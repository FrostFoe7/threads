"use client";

import { Activity } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  UserPlus, 
  ChatCircle, 
  ArrowsClockwise, 
  At 
} from "@phosphor-icons/react";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ActivityItemProps {
  activity: Activity;
}

export function ActivityItem({ activity }: ActivityItemProps) {
  const getIcon = () => {
    switch (activity.type) {
      case "like":
        return <Heart size={14} weight="fill" className="text-white" />;
      case "follow":
        return <UserPlus size={14} weight="fill" className="text-white" />;
      case "comment":
        return <ChatCircle size={14} weight="fill" className="text-white" />;
      case "repost":
        return <ArrowsClockwise size={14} weight="fill" className="text-white" />;
      case "mention":
        return <At size={14} weight="bold" className="text-white" />;
      default:
        return null;
    }
  };

  const getIconBg = () => {
    switch (activity.type) {
      case "like":
        return "bg-red-500";
      case "follow":
        return "bg-blue-500";
      case "comment":
        return "bg-cyan-500";
      case "repost":
        return "bg-green-500";
      case "mention":
        return "bg-purple-500";
      default:
        return "bg-primary";
    }
  };

  const getText = () => {
    switch (activity.type) {
      case "like":
        return "liked your thread";
      case "follow":
        return "started following you";
      case "comment":
        return "replied to your thread";
      case "repost":
        return "reposted your thread";
      case "mention":
        return "mentioned you in a thread";
      default:
        return "interacted with you";
    }
  };

  return (
    <div className="flex items-start gap-3 py-4 border-b last:border-0">
      <div className="relative">
        <Link href={`/u/${activity.actor.username}`}>
          <Avatar className="w-10 h-10 ring-1 ring-border ring-offset-2">
            <AvatarImage src={activity.actor.avatarUrl} alt={activity.actor.username} />
            <AvatarFallback>{activity.actor.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Link>
        <div className={cn(
          "absolute -right-1 -bottom-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-background shadow-sm",
          getIconBg()
        )}>
          {getIcon()}
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-1 text-sm">
          <Link href={`/u/${activity.actor.username}`} className="font-semibold hover:underline truncate">
            {activity.actor.username}
          </Link>
          <time className="text-muted-foreground ml-1">
             {formatDistanceToNow(new Date(activity.createdAt), { addSuffix: false })}
          </time>
        </div>
        <p className="text-[15px] text-muted-foreground leading-snug">
           {getText()}
        </p>
        {activity.content && (
           <p className="text-[15px] mt-1 line-clamp-2 text-foreground">
             {activity.content}
           </p>
        )}
      </div>
    </div>
  );
}
