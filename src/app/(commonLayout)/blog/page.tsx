import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types/blog.type";

export default async function BlogPage() {
  const { data } = await blogService.getBlogPosts();

  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
