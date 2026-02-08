// app/page.tsx
import FeaturedPosts from "@/components/modules/FeaturedPosts/page";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types/blog.type";

export default async function Home() {
  const { data } = await blogService.getBlogPosts();

  const featuredPosts: BlogPost[] =
    data?.data?.filter((post: BlogPost) => post.isFeatured) ?? [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">✨ Featured Posts</h1>

      <FeaturedPosts posts={featuredPosts} />
    </div>
  );
}
