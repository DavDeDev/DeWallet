'use server';
import { connectToDB } from '@/lib/database';
import { Category, TCategory } from './category.model';

import { categoryData } from '@/data/categories';

export async function createCategory({
  name,
  description = undefined,
  nature,
  icon,
  depth
}: TCategory): Promise<void> {
  try {
    await connectToDB();

    const createdCategory: TCategory = await Category.create({
      name,
      description,
      nature,
      icon,
      depth
    });
    console.log(createdCategory);
    // revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create category: ${error.message}`);
  }
}

export async function fetchCategories(): Promise<TCategory[]> {
  try {
    await connectToDB();

    // const categories : TCategory[] = await Category.find();
    // return categories;
    console.log('fetch categories called');
    return categoryData;
  } catch (error: any) {
    throw new Error(`Failed to get categories: ${error.message}`);
  }
}
