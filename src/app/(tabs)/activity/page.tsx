"use client";

import { ActivityItem } from "@/components/features/activity/activity-item";
import { Activity, User } from "@/types/types";

const MOCK_USER: User = {
  id: "1",
  username: "mysys_official",
  displayName: "MySys Official",
  avatarUrl: "https://github.com/shadcn.png",
  followersCount: 12500,
  followingCount: 120,
  createdAt: new Date().toISOString(),
};

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: "act_1",
    userId: "1",
    type: "like",
    actorId: "2",
    actor: {
       id: "2",
       username: "zuck",
       displayName: "Mark Zuckerberg",
       avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
       followersCount: 10000000,
       followingCount: 100,
       createdAt: new Date().toISOString(),
    },
    content: "Loved the new MySys update! Pixel perfect work guys. 🧵",
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: "act_2",
    userId: "1",
    type: "follow",
    actorId: "3",
    actor: {
       id: "3",
       username: "elonmusk",
       displayName: "Elon Musk",
       avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elon",
       followersCount: 150000000,
       followingCount: 500,
       createdAt: new Date().toISOString(),
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: "act_3",
    userId: "1",
    type: "repost",
    actorId: "4",
    actor: {
       id: "4",
       username: "jack",
       displayName: "Jack Dorsey",
       avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack",
       followersCount: 6000000,
       followingCount: 600,
       createdAt: new Date().toISOString(),
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
  },
  {
    id: "act_4",
    userId: "1",
    type: "mention",
    actorId: "5",
    actor: {
       id: "5",
       username: "verge",
       displayName: "The Verge",
       avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Verge",
       followersCount: 3000000,
       followingCount: 100,
       createdAt: new Date().toISOString(),
    },
    content: "MySys is setting a new standard for social media UI. Check our latest review.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  }
];

const FILTERS = ["All", "Follows", "Replies", "Mentions", "Quotes", "Reposts", "Verified"];

export default function ActivityPage() {
  return (
    <div className="flex flex-col">
      <header className="mb-6 overflow-x-auto scrollbar-hide">
        <h1 className="text-2xl font-bold mb-4">Activity</h1>
        <div className="flex gap-2 pb-2">
          {FILTERS.map((filter, idx) => (
            <button
              key={filter}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all whitespace-nowrap",
                idx === 0 
                   ? "bg-primary text-primary-foreground border-primary" 
                   : "bg-background text-foreground border-border hover:bg-muted"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-col">
        {MOCK_ACTIVITIES.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
