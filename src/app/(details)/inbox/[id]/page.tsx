"use client";

import { MessageBubble } from "@/components/features/inbox/message-bubble";
import { InboxMessage, User } from "@/types/types";
import { CaretLeft, Info, Phone, VideoCamera, Image as ImageIcon, Heart } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MOCK_OTHER_USER: User = {
  id: "2",
  username: "zuck",
  displayName: "Mark Zuckerberg",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
  isVerified: true,
  followersCount: 10200000,
  followingCount: 100,
  createdAt: new Date().toISOString(),
};

const MOCK_MESSAGES: InboxMessage[] = [
  {
    id: "m_1",
    senderId: "2",
    receiverId: "1",
    content: "Hey, how is the MySys project going?",
    isRead: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: "m_2",
    senderId: "1",
    receiverId: "2",
    content: "It's going great! We just finished the Reels and Inbox UI. Everything is pixel perfect.",
    isRead: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
  },
  {
    id: "m_3",
    senderId: "2",
    receiverId: "1",
    content: "That's awesome! I'd love to see it soon. The Threads aesthetic is tricky to get right on web.",
    isRead: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: "m_4",
    senderId: "1",
    receiverId: "2",
    content: "Exactly. We focused a lot on spacing and Phosphor icons to capture that premium feel.",
    isRead: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
  },
  {
    id: "m_5",
    senderId: "2",
    receiverId: "1",
    content: "The MySys UI is looking incredible. Keep it up!",
    isRead: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
  }
];

export default function ConversationPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between py-3 px-2 sticky top-0 bg-background/80 backdrop-blur-md z-10 border-b">
         <div className="flex items-center gap-2">
            <Button 
               variant="ghost" 
               size="icon" 
               className="rounded-full h-10 w-10"
               onClick={() => router.back()}
            >
               <CaretLeft size={24} weight="bold" />
            </Button>
            <div className="flex items-center gap-3">
               <Avatar className="w-8 h-8">
                  <AvatarImage src={MOCK_OTHER_USER.avatarUrl} alt={MOCK_OTHER_USER.username} />
                  <AvatarFallback>{MOCK_OTHER_USER.username.slice(0, 2).toUpperCase()}</AvatarFallback>
               </Avatar>
               <div className="flex flex-col">
                  <span className="font-bold text-sm leading-none">{MOCK_OTHER_USER.displayName}</span>
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{MOCK_OTHER_USER.username}</span>
               </div>
            </div>
         </div>
         <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
               <Phone size={22} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
               <VideoCamera size={22} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
               <Info size={22} />
            </Button>
         </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col pb-24">
         <div className="flex flex-col items-center py-10 mb-6">
            <Avatar className="w-20 h-20 mb-3">
               <AvatarImage src={MOCK_OTHER_USER.avatarUrl} alt={MOCK_OTHER_USER.username} />
               <AvatarFallback>{MOCK_OTHER_USER.username.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h2 className="font-bold text-lg">{MOCK_OTHER_USER.displayName}</h2>
            <span className="text-sm text-muted-foreground">{MOCK_OTHER_USER.username} · MySys</span>
            <Button variant="secondary" className="mt-4 rounded-xl font-bold h-9 px-6">
               View profile
            </Button>
         </div>

         {MOCK_MESSAGES.map((msg) => (
           <MessageBubble 
             key={msg.id} 
             message={msg} 
             isMe={msg.senderId === "1"} 
           />
         ))}
      </div>

      {/* Sticky Message Input */}
      <div className="fixed bottom-0 left-0 md:left-64 right-0 p-4 bg-background z-20">
         <div className="max-w-2xl mx-auto flex items-center gap-2 bg-muted rounded-full px-4 py-1 border focus-within:ring-1 focus-within:ring-primary/20 transition-all">
            <Button variant="ghost" size="icon" className="rounded-full text-foreground h-10 w-10 shrink-0">
               <ImageIcon size={24} />
            </Button>
            <Input 
               placeholder="Message..."
               className="bg-transparent border-0 h-10 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 px-1"
            />
            <div className="flex items-center gap-1 shrink-0">
               <Button variant="ghost" size="icon" className="rounded-full text-foreground h-10 w-10">
                  <Heart size={24} />
               </Button>
               <button className="text-primary font-bold text-sm px-2 hover:opacity-80 transition-opacity">
                  Send
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
