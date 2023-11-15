import { fetchCategories } from '@/models/category/category.actions';
import CategoriesList from './components/categories-list';
import { TCategory } from '@/models/category/category.model';

export default async function Home() {
  const categoryData: TCategory[] = await fetchCategories().then(res => {
    return res;
  });
  return (
    <>
      <CategoriesList categoryList={categoryData as TCategory[]} />
    </>
  );
}
