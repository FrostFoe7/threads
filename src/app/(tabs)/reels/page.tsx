"use client";

import { useEffect, useState, useRef } from "react";
import { ReelPlayer } from "@/components/features/reels/reel-player";
import { Reel, User } from "@/types/types";

const MOCK_USER: User = {
  id: "1",
  username: "mysys_official",
  displayName: "MySys Official",
  avatarUrl: "https://github.com/shadcn.png",
  followersCount: 12500,
  followingCount: 120,
  createdAt: new Date().toISOString(),
};

const MOCK_REELS: Reel[] = [
  {
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
  },
  {
    id: "reel_2",
    authorId: "1",
    author: {
       ...MOCK_USER,
       username: "adventure_seeker",
       avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adventure",
    },
    content: "Surfing at sunset is a different kind of therapy. 🌊🏄‍♂️",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-ocean-near-the-shore-from-above-5167-large.mp4",
    thumbnailUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
    likesCount: 8900,
    commentsCount: 230,
    repostsCount: 45,
    viewsCount: 32000,
    createdAt: new Date().toISOString(),
  }
];

export default function ReelsPage() {
  const [activeReelId, setActiveReelId] = useState<string | null>(MOCK_REELS[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.8, // 80% of the reel must be visible to be considered active
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const reelId = entry.target.getAttribute("data-reel-id");
          setActiveReelId(reelId);
        }
      });
    }, observerOptions);

    const reelElements = document.querySelectorAll("[data-reel-id]");
    reelElements.forEach((el) => observer.observe(el));

    return () => {
      reelElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
       ref={containerRef}
       className="fixed inset-0 md:inset-auto md:relative md:h-[calc(100vh-64px)] md:w-full md:max-w-md md:mx-auto bg-black overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
       style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {MOCK_REELS.map((reel) => (
        <div key={reel.id} data-reel-id={reel.id} className="h-full w-full snap-start flex-shrink-0">
          <ReelPlayer 
            reel={reel} 
            isActive={activeReelId === reel.id} 
          />
        </div>
      ))}
    </div>
  );
}
