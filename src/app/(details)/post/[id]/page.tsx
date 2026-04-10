"use client";

import { PostCard } from "@/components/features/posts/post-card";
import { CommentItem } from "@/components/features/posts/comment-item";
import { Post, Comment, User } from "@/types/types";
import { CaretLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MOCK_USER: User = {
  id: "1",
  username: "mysys_official",
  displayName: "MySys Official",
  avatarUrl: "https://github.com/shadcn.png",
  isVerified: true,
  followersCount: 12500,
  followingCount: 120,
  createdAt: new Date().toISOString(),
};

const MOCK_POST: Post = {
  id: "post_1",
  authorId: "1",
  author: MOCK_USER,
  content: "Welcome to MySys! We've just launched our pixel-perfect Threads clone. What do you think of the new UI? 🚀 #socialmedia #mysys #nextjs",
  likesCount: 1240,
  commentsCount: 2,
  repostsCount: 12,
  createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
};

const MOCK_COMMENTS: Comment[] = [
  {
    id: "c_1",
    postId: "post_1",
    authorId: "2",
    author: {
       id: "2",
       username: "zuck",
       displayName: "Mark Zuckerberg",
       avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
       isVerified: true,
       followersCount: 1000000,
       followingCount: 100,
       createdAt: new Date().toISOString(),
    },
    content: "This looks amazing! The attention to detail is impressive. 🧵✨",
    likesCount: 450,
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: "c_2",
    postId: "post_1",
    authorId: "3",
    author: {
       id: "3",
       username: "reactjs",
       displayName: "React",
       avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=React",
       isVerified: true,
       followersCount: 1000000,
       followingCount: 1,
       createdAt: new Date().toISOString(),
    },
    content: "Love seeing React 19 in action here! Great job on the implementation.",
    likesCount: 120,
    createdAt: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
  }
];

export default function PostDetailPage() {
  const router = useRouter();

  return (
    <>
      <header className="flex items-center gap-4 py-4 sticky top-0 bg-background/80 backdrop-blur-md z-10 border-b md:border-0 mb-2 -mx-4 md:-mx-8 px-4 md:px-8">
         <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10 -ml-2"
            onClick={() => router.back()}
         >
            <CaretLeft size={24} weight="bold" />
         </Button>
         <h1 className="text-xl font-bold">Thread</h1>
      </header>

      <div className="flex flex-col pb-32">
        <PostCard post={MOCK_POST} className="border-none" />
        
        <div className="mt-4 px-1">
           <h2 className="font-semibold text-sm text-muted-foreground mb-2 px-3">Replies</h2>
           <div className="flex flex-col">
              {MOCK_COMMENTS.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
           </div>
        </div>
      </div>

      {/* Sticky Reply Bar */}
      <div className="fixed bottom-0 left-0 md:left-64 right-0 p-4 bg-background border-t z-20">
         <div className="max-w-2xl mx-auto flex items-center gap-3">
            <Avatar className="w-8 h-8 shrink-0">
               <AvatarImage src={MOCK_USER.avatarUrl} alt="Me" />
               <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <div className="flex-1 relative min-w-0">
               <Input 
                  placeholder={`Reply to ${MOCK_POST.author.username}...`}
                  className="rounded-full bg-muted border-0 h-11 pr-12 text-sm"
               />
               <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-bold text-sm hover:opacity-80 transition-opacity">
                  Post
               </button>
            </div>
         </div>
      </div>
    </>
  );
}
