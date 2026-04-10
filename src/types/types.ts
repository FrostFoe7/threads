export interface User {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
  isVerified?: boolean;
  followersCount: number;
  followingCount: number;
  createdAt: string;
}

export type MediaType = 'image' | 'video' | 'text';

export interface Media {
  url: string;
  type: 'image' | 'video';
  thumbnailUrl?: string;
  aspectRatio?: number;
}

export interface Post {
  id: string;
  authorId: string;
  author: User;
  content: string;
  media?: Media[];
  likesCount: number;
  commentsCount: number;
  repostsCount: number;
  isLiked?: boolean;
  isReposted?: boolean;
  createdAt: string;
}

export interface Reel extends Omit<Post, 'media'> {
  videoUrl: string;
  thumbnailUrl: string;
  viewsCount: number;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  author: User;
  content: string;
  likesCount: number;
  createdAt: string;
}

export interface Story {
  id: string;
  authorId: string;
  author: User;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  expiresAt: string;
  createdAt: string;
}

export interface Activity {
  id: string;
  userId: string;
  type: 'like' | 'follow' | 'comment' | 'mention' | 'repost';
  actorId: string;
  actor: User;
  targetId?: string; // e.g. postId or commentId
  content?: string;
  createdAt: string;
}

export interface InboxMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  mediaUrl?: string;
  isRead: boolean;
  createdAt: string;
}

export interface InboxConversation {
  id: string;
  participants: User[];
  lastMessage?: InboxMessage;
  unreadCount: number;
  updatedAt: string;
}
