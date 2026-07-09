"use client";

import { useMemo, useState } from "react";
import { TabButtons } from "@/components/ui/Tabs";
import { BlogCard } from "@/components/shared/BlogCard";
import { BlogPost } from "@/types/blog";

export function ResourcesFilter({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((post) => post.category)));
    return [{ id: "all", label: "All" }, ...unique.map((category) => ({ id: category, label: category }))];
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all" ? posts : posts.filter((post) => post.category === activeCategory);

  return (
    <div>
      <TabButtons tabs={categories} activeTab={activeCategory} onChange={setActiveCategory} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
