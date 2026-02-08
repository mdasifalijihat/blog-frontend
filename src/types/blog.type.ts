export interface BlogPost {
  id: string;
  title: string;
  content: string;
  thumbnail?: string | null;

  tags: string[];
  views: number;

  isFeatured: boolean;
  status: "DRAFT" | "PUBLISHED";

  authorId: string;

  createdAt: string;
  updatedAt: string;

  _count?: {
    comments: number;
  };
}
