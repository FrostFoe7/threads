"use client";

import { DetailsHeader } from "@/components/features/navigation/details-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditProfilePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    displayName: "MySys Official",
    username: "mysys_official",
    bio: "Threads UI clone built with Next.js 16 and React 19. Pixel perfect design with Phosphor Icons. Join the future of social media today. 🧵✨",
    link: "mysys.io",
  });

  const handleDone = () => {
    // Save logic here
    router.back();
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader title="Edit profile" onDone={handleDone} />
      
      <div className="p-4 flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 py-8 w-full border-b">
           <Avatar className="w-24 h-24 ring-1 ring-border ring-offset-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>MO</AvatarFallback>
           </Avatar>
           <button className="text-blue-500 font-bold text-sm hover:underline">
             Edit picture
           </button>
        </div>

        <div className="w-full space-y-6 py-6">
           <div className="space-y-2">
              <Label htmlFor="displayName" className="text-sm font-bold">Name</Label>
              <Input 
                id="displayName" 
                value={formData.displayName} 
                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                className="rounded-xl px-4 h-11 text-[15px] border-muted bg-muted/30 focus-visible:bg-transparent"
              />
           </div>

           <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-bold">Username</Label>
              <Input 
                id="username" 
                value={formData.username} 
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="rounded-xl px-4 h-11 text-[15px] border-muted bg-muted/30 focus-visible:bg-transparent"
              />
           </div>

           <div className="space-y-2">
              <Label htmlFor="bio" className="text-sm font-bold">Bio</Label>
              <Textarea 
                id="bio" 
                value={formData.bio} 
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="rounded-xl px-4 py-3 text-[15px] border-muted bg-muted/30 focus-visible:bg-transparent min-h-[100px]"
              />
           </div>

           <div className="space-y-2">
              <Label htmlFor="link" className="text-sm font-bold">Link</Label>
              <Input 
                id="link" 
                value={formData.link} 
                placeholder="+ Add link"
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                className="rounded-xl px-4 h-11 text-[15px] border-muted bg-muted/30 focus-visible:bg-transparent"
              />
           </div>
        </div>

        <div className="w-full border-t py-6">
           <div className="flex items-center justify-between">
              <span className="text-sm font-bold">Private profile</span>
              <div className="w-10 h-6 bg-muted rounded-full relative cursor-not-allowed">
                 <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
           </div>
           <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
             Only approved followers can see your profile and threads.
           </p>
        </div>
      </div>
    </div>
  );
}
