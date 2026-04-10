"use client";

import { User } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface UserSearchCardProps {
  user: User;
}

export function UserSearchCard({ user }: UserSearchCardProps) {
  return (
    <div className="flex items-center gap-3 py-4 border-b last:border-0">
      <Link href={`/u/${user.username}`} className="shrink-0">
        <Avatar className="w-10 h-10 ring-1 ring-border ring-offset-2">
          <AvatarImage src={user.avatarUrl} alt={user.username} />
          <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </Link>
      
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <Link href={`/u/${user.username}`} className="font-semibold text-sm hover:underline truncate">
            {user.username}
          </Link>
          {user.isVerified && (
            <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
               <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          )}
        </div>
        <span className="text-sm text-muted-foreground truncate">{user.displayName}</span>
        <span className="text-sm text-foreground mt-1">{user.followersCount.toLocaleString()} followers</span>
      </div>

      <Button variant="outline" className="rounded-xl font-semibold h-9 px-5 shrink-0">
        Follow
      </Button>
    </div>
  );
}
