import { PostCard } from "@/components/features/posts/post-card";
import { Post, User } from "@/types/types";

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

const MOCK_POSTS: Post[] = [
  {
    id: "post_1",
    authorId: "1",
    author: MOCK_USER,
    content: "Welcome to MySys! We've just launched our pixel-perfect Threads clone. What do you think of the new UI? 🚀 #socialmedia #mysys #nextjs",
    likesCount: 1240,
    commentsCount: 86,
    repostsCount: 12,
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
  },
  {
    id: "post_2",
    authorId: "1",
    author: {
      ...MOCK_USER,
      username: "zuck",
      displayName: "Mark Zuckerberg",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
    },
    content: "Building the future of social connection. Threads is getting a massive update today! 🧵✨",
    media: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        type: "image",
      }
    ],
    likesCount: 45200,
    commentsCount: 3200,
    repostsCount: 850,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    id: "post_3",
    authorId: "1",
    author: {
       id: "3",
       username: "reactjs",
       displayName: "React",
       avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=React",
       followersCount: 1000000,
       followingCount: 1,
       createdAt: new Date().toISOString(),
    },
    content: "React 19 is officially here with Server Components, Actions, and more! ⚛️",
    likesCount: 8900,
    commentsCount: 450,
    repostsCount: 1200,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
  }
];

export default function FeedPage() {
  return (
    <div className="flex flex-col">
      <header className="mb-6 flex flex-col items-center">
         <h1 className="text-2xl font-bold mb-1">Feed</h1>
         <div className="flex gap-4 border-b w-full justify-center">
            <button className="px-4 py-3 border-b-2 border-primary font-semibold text-sm transition-all">
               For you
            </button>
            <button className="px-4 py-3 border-b-2 border-transparent text-muted-foreground font-semibold text-sm hover:text-foreground transition-all">
               Following
            </button>
         </div>
      </header>

      <div className="flex flex-col">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
