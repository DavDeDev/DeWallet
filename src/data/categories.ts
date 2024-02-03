import { Category, TCategory } from '@/models/category/category.model';

export const categoryData: TCategory[] = [
  new Category({
    name: 'Root',
    description: 'Root category',
    nature: 'N',
    icon: 'Briefcase',
    depth: 0,
    subCategories: [
      {
        name: 'Wants',
        description: 'Wants category',
        nature: 'W',
        icon: 'Apple',
        depth: 1,
        subCategories: [
          {
            name: 'Sub wants',
            description: 'Sub wants category',
            nature: 'W',
            icon: 'Apple',
            depth: 2,
            subCategories: []
          }
        ]
      },
      {
        name: 'Musts',
        description: 'Musts category',
        nature: 'M',
        icon: 'Apple',
        depth: 1,
        subCategories: []
      },
      {
        name: 'Needs',
        description: 'Needs category',
        nature: 'N',
        icon: 'Apple',
        depth: 1,
        subCategories: []
      },
      {
        name: 'Avoidables',
        description: 'Avoidables category',
        nature: 'A',
        icon: 'Apple',
        depth: 1,
        subCategories: []
      }
    ]
  }),
  new Category({
    name: 'Root',
    description: 'Root category',
    nature: 'N',
    icon: 'Briefcase',
    depth: 0,
    subCategories: [
      {
        name: 'Wants',
        description: 'Wants category',
        nature: 'W',
        icon: 'Apple',
        depth: 1,
        subCategories: [
          {
            name: 'Sub wants',
            description: 'Sub wants category',
            nature: 'W',
            icon: 'Apple',
            depth: 2,
            subCategories: []
          }
        ]
      },
      {
        name: 'Musts',
        description: 'Musts category',
        nature: 'M',
        icon: 'Apple',
        depth: 1,
        subCategories: []
      },
      {
        name: 'Needs',
        description: 'Needs category',
        nature: 'N',
        icon: 'Apple',
        depth: 1,
        subCategories: []
      },
      {
        name: 'Avoidables',
        description: 'Avoidables category',
        nature: 'A',
        icon: 'Apple',
        depth: 1,
        subCategories: []
      }
    ]
  })
];
