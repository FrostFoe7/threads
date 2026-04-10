"use client";

import { ReelPlayer } from "@/components/features/reels/reel-player";
import { Reel, User } from "@/types/types";
import { CaretLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const MOCK_USER: User = {
  id: "1",
  username: "mysys_official",
  displayName: "MySys Official",
  avatarUrl: "https://github.com/shadcn.png",
  followersCount: 12500,
  followingCount: 120,
  createdAt: new Date().toISOString(),
};

const MOCK_REEL: Reel = {
  id: "reel_1",
  authorId: "1",
  author: MOCK_USER,
  content: "Check out this amazing view! The future of MySys is looking bright. ✨ #nature #travel #mysys",
  videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-leaves-low-angle-shot-1479-large.mp4",
  thumbnailUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000&auto=format&fit=crop",
  likesCount: 12500,
  commentsCount: 450,
  repostsCount: 120,
  viewsCount: 45000,
  createdAt: new Date().toISOString(),
};

export default function ReelDetailPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      <header className="absolute top-0 left-0 right-0 flex items-center gap-4 p-4 z-30 text-white">
         <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border-0"
            onClick={() => router.back()}
         >
            <CaretLeft size={24} weight="bold" />
         </Button>
         <h1 className="text-xl font-bold drop-shadow-md">Reel</h1>
      </header>

      <div className="flex-1 w-full h-full">
        <ReelPlayer reel={MOCK_REEL} isActive={true} />
      </div>
    </div>
  );
}
