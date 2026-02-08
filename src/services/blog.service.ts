import { env } from "@/env";

const API_URL = env.API_URL;

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
};
