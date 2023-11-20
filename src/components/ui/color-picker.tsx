import React from 'react';
import Circle from '@uiw/react-color-circle';
import { CATEGORY_COLORS } from '@/constants/category';

interface Props {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export default function Colors({ selectedColor, setSelectedColor }: Props) {
  return (
    <Circle
      className="items-center justify-center "
      colors={CATEGORY_COLORS}
      color={selectedColor}
      onChange={color => {
        setSelectedColor(color.hex);
      }}
    />
  );
}
