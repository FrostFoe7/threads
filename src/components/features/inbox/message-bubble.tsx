"use client";

import { InboxMessage } from "@/types/types";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  message: InboxMessage;
  isMe: boolean;
}

export function MessageBubble({ message, isMe }: MessageBubbleProps) {
  return (
    <div className={cn(
      "flex w-full mb-2",
      isMe ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[75%] px-4 py-2.5 rounded-2xl text-[15px] leading-relaxed",
        isMe 
          ? "bg-primary text-primary-foreground rounded-br-none" 
          : "bg-muted text-foreground rounded-bl-none"
      )}>
        {message.content}
      </div>
    </div>
  );
}
