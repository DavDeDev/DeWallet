import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@radix-ui/react-popover';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Colors from '@/components/ui/color-picker';
import { CATEGORY_ICONS } from '@/constants/category';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  selectedIcon: LucideIcon;
  setSelectedIcon: (icon: LucideIcon) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export function IconPopover({
  selectedIcon,
  setSelectedIcon,
  selectedColor,
  setSelectedColor
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="mt-auto" variant="outline" size="none">
          <div
            className="w-12 h-12 rounded-md flex items-center justify-center border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
            style={{ backgroundColor: selectedColor }}
          >
            {React.createElement(selectedIcon, {
              size: 24,
              absoluteStrokeWidth: true
            })}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80  bg-background border z-auto">
        <Tabs defaultValue="icons" className="w-full min-h-[15vh]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="icons">Icons</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
          </TabsList>
          <TabsContent value="icons">
            <div className="mt-2 mb-3 flex flex-wrap gap-3 relative items-center justify-center">
              {CATEGORY_ICONS.map((Icon, index) => (
                // TODO: change timing to be similar to Color component (use transition)
                <Icon
                  key={index}
                  size={28}
                  className={`rounded-md cursor-pointer hover:scale-125 ${
                    (Icon === selectedIcon && 'bg-primary') || ' hover:bg-muted'
                  }`}
                  onClick={() => setSelectedIcon(Icon)}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="colors">
            <Colors
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
