import { CreateBlogFormClient } from "@/components/modules/user/createBlog/CreateBlogFormClient";

import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types/blog.type";

export default async function CreateBlogPage() {
  const { data } = await blogService.getBlogPosts();

  return (
    <div className="pt-12">
      
      <CreateBlogFormClient />

      {data.data.map((item: BlogPost) => (
        <p key={item.id}> {item.title} </p>
      ))}
    </div>
  );
}
