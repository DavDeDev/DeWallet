import { LucideIcon, Briefcase, Apple } from 'lucide-react';

const CATEGORY_NATURES = ['W', 'M', 'N', 'A'] as const;

export const CATEGORY_NATURES_MAP: ReadonlyMap<
  (typeof CATEGORY_NATURES)[number],
  string
> = new Map([
  ['W', 'Wants'],
  ['M', 'Musts'],
  ['N', 'Needs'],
  ['A', 'Avoidables']
]);

/**
 * @description Maps category icon name to its corresponding LucideIcon component
 * @type {Map<categoryNatures, LucideIcon>}
 */
export const categoryIconAlias: ReadonlyMap<string, LucideIcon> = new Map<
  string,
  LucideIcon
>([
  [Briefcase.displayName ?? 'ciao', Briefcase],
  ['apple', Apple]
]);
