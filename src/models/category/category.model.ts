import { CATEGORY_NATURES_ENUM } from '@/constants/category';
import mongoose, { Schema, Document, InferSchemaType } from 'mongoose';
import { CATEGORY_ICONS_ALIASES, CATEGORY_COLORS } from '@/constants/category';

// https://mongoosejs.com/docs/typescript/subdocuments.html#subdocument-arrays
interface ICategory extends Document {
  name: string;
  description?: string;
  nature: `${CATEGORY_NATURES_ENUM}`;
  icon: Parameters<typeof CATEGORY_ICONS_ALIASES.get>[0];
  color: (typeof CATEGORY_COLORS)[number];
  depth: number;
  subCategories: ICategory[];
}

const categorySchema: Schema<ICategory> = new Schema<ICategory>({
  name: {
    type: String,
    trim: true,
    required: [true, 'Category name is required'],
    unique: true,
    maxlength: [32, 'Category name cannot exceed 32 characters'],
    text: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: [200, 'Category description cannot exceed 200 characters'],
    text: true
  },
  nature: {
    type: String,
    required: [true, 'Category nature is required'],
    enum: Object.values(CATEGORY_NATURES_ENUM) as `${CATEGORY_NATURES_ENUM}`[]
  },
  icon: {
    type: String,
    required: [true, 'Category icon is required'],
    enum: Array.from(CATEGORY_ICONS_ALIASES.keys())
  },
  color: {
    type: String,
    required: [true, 'Category color is required'],
    enum: CATEGORY_COLORS
  },
  depth: {
    type: Number,
    max: [2, 'Category level cannot exceed 2'],
    min: [0, 'Category level cannot be less than 0'],
    default: 0,
    required: [true, 'Category level is required']
  }
});

categorySchema.add({
  subCategories: {
    type: [categorySchema],
    default: []
  }
});

// https://mongoosejs.com/docs/typescript/schemas.html#automatic-type-inference
export type TCategory = InferSchemaType<typeof categorySchema>;

const Category =
  mongoose.models.Category ||
  mongoose.model('Category', categorySchema, 'categories');

export { Category };
