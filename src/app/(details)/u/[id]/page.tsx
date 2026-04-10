"use client";

import { ProfileHeader } from "@/components/features/profile/profile-header";
import { PostCard } from "@/components/features/posts/post-card";
import { User, Post } from "@/types/types";
import { CaretLeft, DotsThree } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const MOCK_OTHER_USER: User = {
  id: "2",
  username: "zuck",
  displayName: "Mark Zuckerberg",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
  bio: "Building the future of social connection. 🧵✨",
  isVerified: true,
  followersCount: 10200000,
  followingCount: 100,
  createdAt: new Date().toISOString(),
};

const MOCK_OTHER_USER_POSTS: Post[] = [
  {
    id: "post_2",
    authorId: "2",
    author: MOCK_OTHER_USER,
    content: "Threads is getting a massive update today! We're focusing on speed and simplicity. 🧵⚡️",
    likesCount: 45200,
    commentsCount: 3200,
    repostsCount: 850,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  }
];

export default function OtherProfilePage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <>
      <header className="flex items-center justify-between py-4 sticky top-0 bg-background/80 backdrop-blur-md z-10 border-b md:border-0 mb-2 -mx-4 md:-mx-8 px-4 md:px-8">
         <div className="flex items-center gap-4">
            <Button 
               variant="ghost" 
               size="icon" 
               className="rounded-full h-10 w-10 -ml-2"
               onClick={() => router.back()}
            >
               <CaretLeft size={24} weight="bold" />
            </Button>
            <span className="font-bold text-sm">{MOCK_OTHER_USER.username}</span>
         </div>
         <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 -mr-2">
            <DotsThree size={24} weight="bold" />
         </Button>
      </header>

      <div className="flex flex-col">
        <ProfileHeader user={MOCK_OTHER_USER} isMe={false} />
        
        <div className="flex flex-col mt-4">
          {MOCK_OTHER_USER_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
