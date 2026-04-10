"use client";

import { User } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  InstagramLogo, 
  Link as LinkIcon, 
  List, 
  DotsThree,
  Share,
  Warning,
  EyeSlash,
  UserMinus,
  Link as LinkIcon2,
  QrCode,
  Bell,
  Lock,
  Question,
  SignOut
} from "@phosphor-icons/react";
import Link from "next/link";
import { ActionMenu } from "@/components/ui/action-menu";
import { useRouter } from "next/navigation";

interface ProfileHeaderProps {
  user: User;
  isMe?: boolean;
}

export function ProfileHeader({ user, isMe = false }: ProfileHeaderProps) {
  const router = useRouter();

  const myProfileItems = [
    { label: "Settings", icon: List, onClick: () => router.push("/profile/settings") },
    { label: "Your activity", icon: Bell, onClick: () => console.log("Activity") },
    { label: "Privacy", icon: Lock, onClick: () => console.log("Privacy") },
    { label: "Saved", icon: LinkIcon, onClick: () => console.log("Saved") },
    { label: "QR code", icon: QrCode, onClick: () => console.log("QR Code") },
    { label: "Log out", icon: SignOut, destructive: true, onClick: () => console.log("Log out") },
  ];

  const otherProfileItems = [
    { label: "Share this profile", icon: Share, onClick: () => console.log("Share") },
    { label: "Copy profile URL", icon: LinkIcon2, onClick: () => console.log("Copy URL") },
    { label: "Mute", icon: EyeSlash, onClick: () => console.log("Mute") },
    { label: "Restrict", icon: Warning, onClick: () => console.log("Restrict") },
    { label: "Block", icon: UserMinus, destructive: true, onClick: () => console.log("Block") },
    { label: "Report", icon: Warning, destructive: true, onClick: () => console.log("Report") },
  ];

  return (
    <div className="flex flex-col mb-8">
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h1 className="text-2xl font-bold tracking-tight truncate">{user.displayName}</h1>
            <ActionMenu 
              items={isMe ? myProfileItems : otherProfileItems}
              trigger={
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full shrink-0">
                  {isMe ? <List size={24} /> : <DotsThree size={28} weight="bold" />}
                </Button>
              }
            />
          </div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[15px] font-medium truncate">{user.username}</span>
            <span className="px-1.5 py-0.5 rounded-full bg-muted text-[11px] font-medium text-muted-foreground shrink-0">
              threads.net
            </span>
          </div>
        </div>
        <Avatar className="w-20 h-20 shrink-0">
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
             <Link href="/profile/edit" className="flex-1">
               <Button variant="outline" className="w-full rounded-xl font-semibold">
                 Edit profile
               </Button>
             </Link>
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
