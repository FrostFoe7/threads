import { ProfileHeader } from "@/components/features/profile/profile-header";
import { PostCard } from "@/components/features/posts/post-card";
import { User, Post } from "@/types/types";

const MOCK_USER: User = {
  id: "1",
  username: "mysys_official",
  displayName: "MySys Official",
  avatarUrl: "https://github.com/shadcn.png",
  bio: "Threads UI clone built with Next.js 16 and React 19. Pixel perfect design with Phosphor Icons. Join the future of social media today. 🧵✨",
  isVerified: true,
  followersCount: 12500,
  followingCount: 120,
  createdAt: new Date().toISOString(),
};

const MOCK_USER_POSTS: Post[] = [
  {
    id: "post_1",
    authorId: "1",
    author: MOCK_USER,
    content: "Our mission at MySys is to build the most aesthetic and performant social media platform. Using Next.js 16 and React 19 allowed us to push the boundaries of what's possible on the web. 🚀",
    likesCount: 1240,
    commentsCount: 86,
    repostsCount: 12,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
  },
  {
    id: "post_2",
    authorId: "1",
    author: MOCK_USER,
    content: "Just updated our mobile layout! It's now smoother and more responsive than ever. Give it a try! 📱✨",
    media: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        type: "image",
      }
    ],
    likesCount: 850,
    commentsCount: 42,
    repostsCount: 5,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // 5 days ago
  }
];

export default function ProfilePage() {
  return (
    <div className="flex flex-col">
      <ProfileHeader user={MOCK_USER} isMe={true} />
      
      <div className="flex flex-col mt-4">
        {MOCK_USER_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
