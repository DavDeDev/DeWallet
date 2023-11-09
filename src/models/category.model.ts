import { LucideIcon } from 'lucide-react';
import mongoose, { Schema, Document } from 'mongoose';

export enum categoryNatures {
  WANT = 'W',
  MUST = 'M',
  NEED = 'N',
  AVOIDABLE = 'A'
}

// https://mongoosejs.com/docs/typescript/subdocuments.html#subdocument-arrays
interface ICategory extends Document {
  name: string;
  description?: string;
  nature: categoryNatures;
  icon: string | LucideIcon;
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
    enum: Object.values(categoryNatures) as string[]
  },
  icon: {
    type: String,
    required: [true, 'Category icon is required']
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

const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
