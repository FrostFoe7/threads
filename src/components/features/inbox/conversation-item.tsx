"use client";

import { InboxConversation } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ConversationItemProps {
  conversation: InboxConversation;
}

export function ConversationItem({ conversation }: ConversationItemProps) {
  const otherParticipant = conversation.participants[0]; // Simplified

  return (
    <Link 
      href={`/inbox/${conversation.id}`}
      className="flex items-center gap-3 py-4 px-2 hover:bg-muted/50 transition-all rounded-xl cursor-pointer group"
    >
      <div className="relative">
        <Avatar className="w-14 h-14 ring-1 ring-border group-hover:ring-primary/50 transition-all">
          <AvatarImage src={otherParticipant.avatarUrl} alt={otherParticipant.username} />
          <AvatarFallback>{otherParticipant.username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        {conversation.unreadCount > 0 && (
           <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-background" />
        )}
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[15px] truncate">
            {otherParticipant.username}
          </span>
          <time className="text-xs text-muted-foreground">
             {formatDistanceToNow(new Date(conversation.updatedAt), { addSuffix: false })}
          </time>
        </div>
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <p className={cn(
            "text-sm truncate flex-1",
            conversation.unreadCount > 0 ? "font-bold text-foreground" : "text-muted-foreground"
          )}>
            {conversation.lastMessage?.content || "No messages yet"}
          </p>
          {conversation.unreadCount > 0 && (
             <span className="w-2 h-2 rounded-full bg-blue-500" />
          )}
        </div>
      </div>
    </Link>
  );
}
