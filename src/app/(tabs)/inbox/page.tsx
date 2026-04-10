"use client";

import { ConversationItem } from "@/components/features/inbox/conversation-item";
import { InboxConversation, User } from "@/types/types";
import { MagnifyingGlass, NotePencil } from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MOCK_CONVERSATIONS: InboxConversation[] = [
  {
    id: "conv_1",
    participants: [
      {
        id: "2",
        username: "zuck",
        displayName: "Mark Zuckerberg",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
        followersCount: 10200000,
        followingCount: 100,
        createdAt: new Date().toISOString(),
      }
    ],
    lastMessage: {
      id: "msg_1",
      senderId: "2",
      receiverId: "1",
      content: "The MySys UI is looking incredible. Keep it up!",
      isRead: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
    },
    unreadCount: 1,
    updatedAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
  },
  {
    id: "conv_2",
    participants: [
      {
        id: "3",
        username: "reactjs",
        displayName: "React",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=React",
        followersCount: 1000000,
        followingCount: 1,
        createdAt: new Date().toISOString(),
      }
    ],
    lastMessage: {
      id: "msg_2",
      senderId: "3",
      receiverId: "1",
      content: "Have you seen the new React 19 features?",
      isRead: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    },
    unreadCount: 0,
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
  }
];

export default function InboxPage() {
  return (
    <div className="flex flex-col">
      <header className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Messages</h1>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
             <NotePencil size={24} />
          </Button>
        </div>
        <div className="relative">
          <MagnifyingGlass 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
            size={18} 
          />
          <Input 
            placeholder="Search" 
            className="pl-10 h-11 rounded-xl bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
      </header>

      <div className="flex flex-col">
        {MOCK_CONVERSATIONS.map((conversation) => (
          <ConversationItem key={conversation.id} conversation={conversation} />
        ))}
      </div>
    </div>
  );
}
