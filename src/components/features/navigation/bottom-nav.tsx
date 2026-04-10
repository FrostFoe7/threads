"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  House, 
  MagnifyingGlass, 
  FilmReel, 
  Heart, 
  UserCircle, 
  PaperPlaneTilt 
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Feed", href: "/feed", icon: House },
  { label: "Search", href: "/search", icon: MagnifyingGlass },
  { label: "Reels", href: "/reels", icon: FilmReel },
  { label: "Inbox", href: "/inbox", icon: PaperPlaneTilt },
  { label: "Activity", href: "/activity", icon: Heart },
  { label: "Profile", href: "/profile", icon: UserCircle },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around h-16">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon 
                size={26} 
                weight={isActive ? "fill" : "regular"} 
              />
              <span className="sr-only">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
