"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Heart, 
  ChatCircle, 
  PaperPlaneTilt, 
  MusicNotes, 
  SpeakerHigh, 
  SpeakerX,
  DotsThreeVertical
} from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Reel } from "@/types/types";
import { useReelStore } from "@/hooks/use-reel-store";
import { cn } from "@/lib/utils";

interface ReelPlayerProps {
  reel: Reel;
  isActive: boolean;
}

export function ReelPlayer({ reel, isActive }: ReelPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isMuted, toggleMute } = useReelStore();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.play().catch(() => {
         // Auto-play might be blocked
         setIsPlaying(false);
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-full w-full bg-black flex items-center justify-center snap-start overflow-hidden group">
      <video
        ref={videoRef}
        src={reel.videoUrl}
        loop
        muted={isMuted}
        playsInline
        className="h-full w-full object-contain"
        onClick={handleTogglePlay}
      />

      {/* Overlay Actions */}
      <div className="absolute right-3 bottom-20 flex flex-col items-center gap-4 text-white z-10">
        <div className="flex flex-col items-center gap-1">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-0">
            <Heart size={28} weight="fill" className="text-white hover:text-red-500 transition-colors" />
          </Button>
          <span className="text-xs font-semibold">{reel.likesCount.toLocaleString()}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-0">
            <ChatCircle size={28} weight="fill" />
          </Button>
          <span className="text-xs font-semibold">{reel.commentsCount.toLocaleString()}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-0">
            <PaperPlaneTilt size={28} weight="fill" />
          </Button>
        </div>

        <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-0">
          <DotsThreeVertical size={24} weight="bold" />
        </Button>

        <div className="w-8 h-8 rounded-lg border-2 border-white/80 overflow-hidden animate-spin-slow">
           <img src={reel.author.avatarUrl} alt="Music" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white z-10">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-8 h-8 ring-1 ring-white">
            <AvatarImage src={reel.author.avatarUrl} alt={reel.author.username} />
            <AvatarFallback>{reel.author.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm">{reel.author.username}</span>
          <Button variant="outline" size="sm" className="h-7 px-3 text-[11px] font-bold rounded-lg border-white text-white bg-transparent hover:bg-white/10">
             Follow
          </Button>
        </div>

        <p className="text-sm mb-4 line-clamp-2 max-w-[80%] leading-relaxed">
          {reel.content}
        </p>

        <div className="flex items-center gap-2 text-xs font-medium">
          <MusicNotes size={16} />
          <span className="max-w-[150px] truncate">
            {reel.author.username} • Original Audio
          </span>
        </div>
      </div>

      {/* Mute Button Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <Button 
           variant="ghost" 
           size="icon" 
           className="h-10 w-10 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
           onClick={(e) => {
              e.stopPropagation();
              toggleMute();
           }}
        >
          {isMuted ? <SpeakerX size={24} /> : <SpeakerHigh size={24} />}
        </Button>
      </div>

      {/* Play/Pause Visual Indicator (Optional) */}
      {!isPlaying && (
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-20 w-20 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center">
               <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
            </div>
         </div>
      )}
    </div>
  );
}
