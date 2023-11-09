import { LucideIcon, Briefcase, Apple } from 'lucide-react';

export enum categoryNatures {
  WANT = 'W',
  MUST = 'M',
  NEED = 'N',
  AVOIDABLE = 'A'
}

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
