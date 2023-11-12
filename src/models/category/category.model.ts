import { CATEGORY_NATURES_MAP } from '@/constants/category';
import mongoose, { Schema, Document, InferSchemaType } from 'mongoose';
import { categoryIconAlias } from '@/constants/category';

// https://mongoosejs.com/docs/typescript/subdocuments.html#subdocument-arrays
export interface ICategory extends Document {
  name: string;
  description?: string;
  nature: typeof CATEGORY_NATURES_MAP extends ReadonlyMap<infer K, any>
    ? K
    : never;
  icon: Parameters<typeof categoryIconAlias.get>[0];
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
    enum: Array.from(CATEGORY_NATURES_MAP.keys())
  },
  icon: {
    type: String,
    required: [true, 'Category icon is required'],
    enum: Array.from(categoryIconAlias.keys())
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
  mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
