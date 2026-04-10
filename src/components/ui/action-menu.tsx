"use client";

import * as React from "react";
import { 
  DotsThree,
  Share,
  Warning,
  EyeSlash,
  UserMinus,
  Link as LinkIcon,
  QrCode,
  Info
} from "@phosphor-icons/react";
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface ActionMenuItem {
  label: string;
  icon: any;
  onClick?: () => void;
  destructive?: boolean;
}

interface ActionMenuProps {
  trigger?: React.ReactNode;
  items: ActionMenuItem[];
  title?: string;
}

export function ActionMenu({ trigger, items, title }: ActionMenuProps) {
  const isMobile = useIsMobile();

  const defaultTrigger = (
    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
      <DotsThree size={24} weight="bold" />
    </Button>
  );

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          {trigger || defaultTrigger}
        </DrawerTrigger>
        <DrawerContent className="p-0 rounded-t-[32px]">
          <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-muted-foreground/20" />
          {title && (
            <DrawerHeader className="border-b">
              <DrawerTitle className="text-center font-bold text-base">{title}</DrawerTitle>
            </DrawerHeader>
          )}
          <div className="flex flex-col p-2 mb-8 mt-2">
            {items.map((item, index) => (
              <DrawerClose key={index} asChild>
                <button
                  onClick={item.onClick}
                  className="flex items-center gap-4 w-full px-6 py-4 rounded-2xl hover:bg-muted active:bg-muted transition-colors text-left"
                >
                  <item.icon 
                    size={24} 
                    className={item.destructive ? "text-red-500" : "text-foreground"} 
                  />
                  <span className={item.destructive ? "text-red-500 font-semibold" : "text-[17px] font-medium"}>
                    {item.label}
                  </span>
                </button>
              </DrawerClose>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger || defaultTrigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 rounded-xl p-1">
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            className={item.destructive ? "text-red-500 focus:text-red-500 focus:bg-red-50" : "rounded-lg"}
          >
            <item.icon size={18} className="mr-2" />
            <span className="font-medium">{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
