import { LucideIcon, Briefcase, Apple } from 'lucide-react';

enum CATEGORY_NATURES_ENUM {
  Wants = 'W',
  Musts = 'M',
  Needs = 'N',
  Avoidables = 'A'
}

const CATEGORY_COLORS: string[] = [
  '#A93226',
  '#884EA0',
  '#2471A3',
  '#138D75',
  '#D35400',
  '#1F618D',
  '#1F618D',
  '#196F3D',
  '#6C3483',
  '#1A5276',
  '#117A65',
  '#D68910'
];

/**
 * @description Maps category icon name to its corresponding LucideIcon component
 * @type {Map<categoryNatures, LucideIcon>}
 */
const CATEGORY_ICONS_ALIASES: ReadonlyMap<string, LucideIcon> = new Map<
  string,
  LucideIcon
>([
  [Briefcase.displayName ?? 'ciao', Briefcase],
  ['apple', Apple]
]);

const CATEGORY_ICONS = Array.from(CATEGORY_ICONS_ALIASES.values());

export {
  CATEGORY_NATURES_ENUM,
  CATEGORY_COLORS,
  CATEGORY_ICONS_ALIASES,
  CATEGORY_ICONS
};
