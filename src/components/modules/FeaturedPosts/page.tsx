"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Eye, MessageCircle } from "lucide-react";
import { BlogPost } from "@/types/blog.type";

export default function FeaturedPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) {
    return <p>No featured posts found.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.12 }}
          whileHover={{ y: -6 }}
          className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
        >
          <Link href={`/blog/${post.id}`}>
            <div className="relative h-48 w-full">
              {post.thumbnail && (
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold line-clamp-2 mb-3">
                {post.title}
              </h2>

              <div className="flex gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Eye size={16} />
                  {post.views}
                </span>

                <span className="flex items-center gap-1">
                  <MessageCircle size={16} />
                  {post._count?.comments ?? 0}
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
