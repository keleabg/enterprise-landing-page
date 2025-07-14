"use client"
import React, { useState } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";

const blogPosts = [
  {
    title: "Unlocking Business Innovation in 2024",
    slug: "business-innovation-2024",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=350&fit=crop&auto=format",
    excerpt: "Discover the latest trends and strategies for driving innovation in a rapidly changing business landscape.",
    date: "2024-02-05",
    author: "Emily Tran"
  },
  {
    title: "5 Steps to Effective Digital Transformation",
    slug: "effective-digital-transformation",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=350&fit=crop&auto=format",
    excerpt: "A proven approach for a smooth and successful shift to digital-first operations, tailored for modern enterprises.",
    date: "2024-01-20",
    author: "Liam Smith"
  },
  {
    title: "Why Market Analysis is Key to Growth",
    slug: "market-analysis-growth",
    image: "https://images.unsplash.com/photo-1517971071642-34a2d3eccb0c?w=600&h=350&fit=crop&auto=format",
    excerpt: "Learn how data-driven research empowers your organization to stay ahead of the competition in any sector.",
    date: "2023-12-10",
    author: "Ava Green"
  },
  {
    title: "Creating Resilient Teams Remotely",
    slug: "remote-teams-resilience",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=350&fit=crop&auto=format",
    excerpt: "Leadership insights for building strong, collaborative cultures even across distributed workforces.",
    date: "2023-11-22",
    author: "Noah Wang"
  }
];

const fuse = new Fuse(blogPosts, {
  keys: ["title", "excerpt", "author"],
  threshold: 0.3
});

export const BlogSection: React.FC = () => {
  const [query, setQuery] = useState("");
  const results = query ? fuse.search(query).map(r => r.item) : blogPosts;

  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our Blog</h2>
        <div className="max-w-xl mx-auto mb-12 relative">
          <input
            aria-label="Search blog articles"
            className="w-full py-3 pl-10 pr-4 rounded-xl border border-orange-200 shadow text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {results.length > 0 ? (
            results.map(post => (
              <div key={post.slug} className="rounded-xl bg-white shadow hover:shadow-lg transition flex flex-col overflow-hidden">
                <div className="aspect-[16/9] bg-orange-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1 flex flex-col gap-2 p-6">
                  <div className="text-xs text-orange-600 font-semibold mb-1">{new Date(post.date).toLocaleDateString()}</div>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <div className="text-gray-700 mb-3 text-sm">{post.excerpt}</div>
                  <div className="text-xs text-right text-gray-500">by {post.author}</div>
                  <a
                    href={"/blog/" + post.slug}
                    className="inline-block mt-2 text-orange-600 font-semibold underline text-sm hover:text-orange-800"
                  >Read More</a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 text-lg py-16">No articles found for "{query}"</div>
          )}
        </div>
      </div>
    </section>
  );
};
