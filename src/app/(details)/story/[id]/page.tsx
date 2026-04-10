"use client";

import { useEffect, useState } from "react";
import { Story, User } from "@/types/types";
import { X, Heart, PaperPlaneTilt, DotsThree } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const MOCK_USER: User = {
  id: "1",
  username: "mysys_official",
  displayName: "MySys Official",
  avatarUrl: "https://github.com/shadcn.png",
  followersCount: 12500,
  followingCount: 120,
  createdAt: new Date().toISOString(),
};

const MOCK_STORY: Story = {
  id: "story_1",
  authorId: "1",
  author: MOCK_USER,
  mediaUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop",
  mediaType: "image",
  expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
  createdAt: new Date().toISOString(),
};

export default function StoryDetailPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          router.back();
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total (100 * 50ms)

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="fixed inset-0 bg-neutral-900 z-[100] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full md:max-w-md md:h-[90vh] md:rounded-xl overflow-hidden shadow-2xl bg-black">
        {/* Story Media */}
        <img 
          src={MOCK_STORY.mediaUrl} 
          alt="Story" 
          className="w-full h-full object-cover select-none pointer-events-none" 
        />

        {/* Top Overlay */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent z-20">
          {/* Progress Bar */}
          <div className="flex gap-1 mb-4">
            <div className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
               <div className="h-full bg-white transition-all duration-50 linear" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex-1 h-0.5 bg-white/30 rounded-full" />
            <div className="flex-1 h-0.5 bg-white/30 rounded-full" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={MOCK_STORY.author.avatarUrl} alt={MOCK_STORY.author.username} />
                <AvatarFallback>{MOCK_STORY.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-white font-semibold text-sm">{MOCK_STORY.author.username}</span>
              <span className="text-white/60 text-xs font-medium">1h</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white h-10 w-10">
                <DotsThree size={24} weight="bold" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white h-10 w-10"
                onClick={() => router.back()}
              >
                <X size={24} weight="bold" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3 z-20 bg-gradient-to-t from-black/50 to-transparent">
           <div className="flex-1 relative">
             <Input 
               placeholder={`Reply to ${MOCK_STORY.author.username}...`}
               className="rounded-full bg-transparent border-white/50 border-2 text-white h-11 placeholder:text-white/70 focus-visible:ring-0 focus-visible:border-white transition-all"
             />
           </div>
           <Button variant="ghost" size="icon" className="text-white h-10 w-10">
              <Heart size={28} />
           </Button>
           <Button variant="ghost" size="icon" className="text-white h-10 w-10">
              <PaperPlaneTilt size={28} />
           </Button>
        </div>
      </div>
    </div>
  );
}
