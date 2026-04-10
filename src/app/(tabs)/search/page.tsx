"use client";

import { UserSearchCard } from "@/components/features/search/user-search-card";
import { User } from "@/types/types";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";

const MOCK_USERS: User[] = [
  {
    id: "1",
    username: "mysys_official",
    displayName: "MySys Official",
    avatarUrl: "https://github.com/shadcn.png",
    isVerified: true,
    followersCount: 12500,
    followingCount: 120,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    username: "zuck",
    displayName: "Mark Zuckerberg",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
    isVerified: true,
    followersCount: 10200000,
    followingCount: 100,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    username: "reactjs",
    displayName: "React",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=React",
    isVerified: true,
    followersCount: 1000000,
    followingCount: 1,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    username: "vercel",
    displayName: "Vercel",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vercel",
    isVerified: true,
    followersCount: 500000,
    followingCount: 20,
    createdAt: new Date().toISOString(),
  }
];

export default function SearchPage() {
  return (
    <div className="flex flex-col">
      <header className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Search</h1>
        <div className="relative">
          <MagnifyingGlass 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
            size={18} 
          />
          <Input 
            placeholder="Search" 
            className="pl-10 h-11 rounded-xl bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
      </header>

      <div className="flex flex-col">
        {MOCK_USERS.map((user) => (
          <UserSearchCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
