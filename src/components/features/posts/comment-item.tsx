"use client";

import { Comment } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Heart, 
  ChatCircle, 
  ArrowsClockwise, 
  PaperPlaneTilt,
  DotsThree
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

interface CommentItemProps {
  comment: Comment;
}

export function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="flex gap-3 py-4 border-b last:border-0">
      <div className="flex flex-col items-center">
        <Link href={`/u/${comment.author.username}`}>
          <Avatar className="w-9 h-9">
            <AvatarImage src={comment.author.avatarUrl} alt={comment.author.username} />
            <AvatarFallback>{comment.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-1 w-[2px] bg-muted mt-2 mb-1 rounded-full" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <div className="flex items-center gap-1">
            <Link href={`/u/${comment.author.username}`} className="font-semibold text-sm hover:underline">
              {comment.author.username}
            </Link>
            {comment.author.isVerified && (
               <div className="w-2.5 h-2.5 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full" />
               </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <time className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: false })}
            </time>
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground">
               <DotsThree size={18} weight="bold" />
            </Button>
          </div>
        </div>

        <p className="text-[14px] leading-relaxed mb-2 whitespace-pre-wrap break-words">
           {comment.content}
        </p>

        <div className="flex items-center gap-1 -ml-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-red-500">
             <Heart size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-blue-500">
             <ChatCircle size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-green-500">
             <ArrowsClockwise size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-primary">
             <PaperPlaneTilt size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
