"use client";

import Link from "next/link";
import { 
  Heart, 
  ChatCircle, 
  ArrowsClockwise, 
  PaperPlaneTilt,
  DotsThree
} from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/types";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  className?: string;
}

export function PostCard({ post, className }: PostCardProps) {
  return (
    <article className={cn("py-4 border-b last:border-0", className)}>
      <div className="flex gap-3">
        {/* Left Column: Avatar & Vertical Line */}
        <div className="flex flex-col items-center">
          <Link href={`/u/${post.author.username}`}>
            <Avatar className="w-10 h-10 ring-1 ring-border ring-offset-2">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.username} />
              <AvatarFallback>{post.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1 w-[2px] bg-muted mt-2 mb-1 rounded-full" />
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <Link 
                href={`/u/${post.author.username}`}
                className="font-semibold text-sm hover:underline"
              >
                {post.author.username}
              </Link>
              {post.author.isVerified && (
                <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
               <time className="text-xs text-muted-foreground">
                 {formatDistanceToNow(new Date(post.createdAt), { addSuffix: false })}
               </time>
               <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                 <DotsThree size={20} weight="bold" />
               </Button>
            </div>
          </div>

          <div className="text-[15px] leading-relaxed mb-3 whitespace-pre-wrap break-words">
            {post.content}
          </div>

          {post.media && post.media.length > 0 && (
             <div className="mb-3 rounded-xl overflow-hidden border">
                {post.media[0].type === 'image' ? (
                   <img 
                     src={post.media[0].url} 
                     alt="Post media" 
                     className="w-full h-auto object-cover max-h-[512px]"
                   />
                ) : (
                   <video 
                     src={post.media[0].url} 
                     controls 
                     className="w-full h-auto max-h-[512px]"
                   />
                )}
             </div>
          )}

          <div className="flex items-center gap-1 -ml-2 mb-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-red-500">
               <Heart size={22} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-blue-500">
               <ChatCircle size={22} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-green-500">
               <ArrowsClockwise size={22} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-primary">
               <PaperPlaneTilt size={22} />
            </Button>
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
             <span>{post.likesCount} likes</span>
             <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
             <span>{post.commentsCount} comments</span>
          </div>
        </div>
      </div>
    </article>
  );
}
