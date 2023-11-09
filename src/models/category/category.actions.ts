'use server';
import { connectToDB } from '@/lib/database';
import Category, { categoryNatures } from './category.model';

interface Params {
  name: string;
  description?: string;
  nature: categoryNatures;
  icon: string;
  level: number;
  // subCategories?: Types.ObjectId[],
}

export async function createCategory(
  { name, description, nature, icon, level }: Params = {
    name: 'twtw',
    nature: categoryNatures.WANT,
    icon: 'test',
    level: 1
    // subCategories: []
  }
): Promise<void> {
  try {
    await connectToDB();

    const createdCategory = await Category.create({
      name,
      description,
      nature,
      icon,
      level
    });
    console.log(createdCategory);
    // revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create category: ${error.message}`);
  }
}
