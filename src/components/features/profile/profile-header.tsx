"use client";

import { User } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { At, InstagramLogo, Link as LinkIcon } from "@phosphor-icons/react";

interface ProfileHeaderProps {
  user: User;
  isMe?: boolean;
}

export function ProfileHeader({ user, isMe = false }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight mb-0.5">{user.displayName}</h1>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[15px] font-medium">{user.username}</span>
            <span className="px-1.5 py-0.5 rounded-full bg-muted text-[11px] font-medium text-muted-foreground">
              threads.net
            </span>
          </div>
        </div>
        <Avatar className="w-20 h-20">
          <AvatarImage src={user.avatarUrl} alt={user.username} />
          <AvatarFallback>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>

      <div className="text-[15px] leading-relaxed mb-4 whitespace-pre-wrap">
        {user.bio || "No bio yet."}
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground hover:underline cursor-pointer">
           <div className="flex -space-x-2">
             <div className="w-5 h-5 rounded-full bg-muted border-2 border-background" />
             <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-background" />
           </div>
           <span>{user.followersCount.toLocaleString()} followers</span>
        </div>
        
        <div className="flex items-center gap-4 text-muted-foreground">
           <InstagramLogo size={24} weight="regular" className="hover:text-foreground cursor-pointer transition-colors" />
           <LinkIcon size={24} weight="regular" className="hover:text-foreground cursor-pointer transition-colors" />
        </div>
      </div>

      <div className="flex gap-2 w-full mb-8">
         {isMe ? (
           <>
             <Button variant="outline" className="flex-1 rounded-xl font-semibold">
               Edit profile
             </Button>
             <Button variant="outline" className="flex-1 rounded-xl font-semibold">
               Share profile
             </Button>
           </>
         ) : (
           <>
             <Button className="flex-1 rounded-xl font-semibold bg-foreground text-background hover:bg-foreground/90 transition-colors">
               Follow
             </Button>
             <Button variant="outline" className="flex-1 rounded-xl font-semibold">
               Mention
             </Button>
           </>
         )}
      </div>

      <div className="flex w-full border-b">
         <button className="flex-1 pb-3 border-b-2 border-primary font-semibold text-sm">
           Threads
         </button>
         <button className="flex-1 pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-all font-semibold text-sm">
           Replies
         </button>
         <button className="flex-1 pb-3 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-all font-semibold text-sm">
           Reposts
         </button>
      </div>
    </div>
  );
}
