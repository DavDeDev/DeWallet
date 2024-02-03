import { fetchCategories } from '@/models/category/category.actions';
import CategoriesList from './components/categories-list';
import { TCategory } from '@/models/category/category.model';
import CategoryForm from './components/category-form';

export default async function Home() {
  const categoryData: TCategory[] = await fetchCategories().then(res => {
    return res;
  });
  return (
    <>
      <CategoryForm />
      <CategoriesList categoryList={categoryData as TCategory[]} />
    </>
  );
}
