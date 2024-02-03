import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { TCategory } from '@/models/category/category.model';

const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <Card key={category.id}>
      <CardHeader>
        <CardTitle>{category.name}</CardTitle>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      {category.subCategories &&
        category.subCategories.map(subCategory => {
          return (
            <Card key={subCategory.id}>
              <div>subcat</div>
              <CardHeader>
                <CardTitle>{subCategory.name}</CardTitle>
                <CardDescription>{subCategory.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
    </Card>
  );
};

const CategoriesList = ({ categoryList }: { categoryList: TCategory[] }) => {
  return (
    <ul>
      {categoryList.map(category => {
        return (
          <li key={category.id}>
            <CategoryCard category={category} />
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
