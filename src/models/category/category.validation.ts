import {
  CATEGORY_NATURES_ENUM,
  CATEGORY_ICONS_ALIASES,
  CATEGORY_COLORS
} from '@/constants/category';
import * as z from 'zod';

const CategoryValidation = z.object({
  name: z
    .string()
    .min(3, { message: 'Minimun 3 characters.' })
    .max(32, { message: 'Maximum 32 characters.' }),
  description: z.string().max(200, { message: 'Maximum 200 characters.' }),
  nature: z
    .nativeEnum(CATEGORY_NATURES_ENUM)
    .default(CATEGORY_NATURES_ENUM.Needs),
  icon: z
    .string()
    .refine(
      (value: string) =>
        Array.from(CATEGORY_ICONS_ALIASES.keys()).includes(value),
      { message: 'Invalid icon.' }
    ),
  color: z.string().refine((value: string) => CATEGORY_COLORS.includes(value), {
    message: 'Invalid color.'
  }),
  depth: z
    .number()
    .min(0)
    .max(2, { message: "You can't create nested categories at this level." })
    .default(0)
});

export { CategoryValidation };
