import { BlogPost } from "@/types/blog.type";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-sm transition hover:shadow-lg">
      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {post.isFeatured && (
            <span className="absolute left-3 top-3 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-white">
              Featured
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-semibold">{post.title}</h3>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {post.content}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-1 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>👁 {post.views} views</span>
          <span>💬 {post._count?.comments ?? 0} comments</span>
        </div>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.id}`}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
