"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  House, 
  MagnifyingGlass, 
  FilmReel, 
  Heart, 
  UserCircle, 
  PaperPlaneTilt,
  At
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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 hidden w-64 border-r bg-background md:flex flex-col z-50">
      <div className="flex items-center gap-2 p-8 mb-4">
        <At size={32} weight="bold" />
        <span className="text-xl font-bold tracking-tight">MySys</span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-secondary text-primary font-semibold" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon 
                size={28} 
                weight={isActive ? "fill" : "regular"} 
                className="transition-transform active:scale-90"
              />
              <span className="text-lg">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-8 border-t">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Username</span>
            <span className="text-xs text-muted-foreground">My Profile</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
