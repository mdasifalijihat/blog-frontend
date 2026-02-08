import { env } from "@/env";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

export interface BlogData {
  title: string;
  content: string;
  tag?: string[];
}

export const blogService = {
  // ✅ All posts
  getBlogPosts: async () => {
    try {
      const res = await fetch(`${API_URL}/posts`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      console.error(error);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },

  // ✅ Single post by id
  getBlogById: async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch post");
      }

      const data = await res.json();

      return { data, error: null };
    } catch (error) {
      console.error(error);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },
  createBlogPost: async (blogData: BlogData) => {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      if (data.error) {
        return {
          data: null,
          error: { message: "Error: Post not created." },
        };
      }

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};
