// import { categoryData } from "@/data/categories";
import { fetchCategories } from '@/models/category/category.actions';
//import dashboard for m

// for each category in the db you print it
const CategoriesList = async () => {
  const categoryData = await fetchCategories().then(res => {
    console.log('categories', res);
    return res;
  });

  return (
    <>
      {categoryData.map(category => {
        return <div>ciao</div>;
      })}
    </>
  );
};

export default CategoriesList;
