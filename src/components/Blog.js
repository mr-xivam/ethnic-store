import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: "5 Must-Have Ethnic Styles This Season", excerpt: "Discover the top ethnic fashion picks to refresh your wardrobe for every occasion." },
    { id: 2, title: "How to Accessorize Your Saree Perfectly", excerpt: "Tips and tricks to complement your ethnic look with the right accessories." },
    { id: 3, title: "The History Behind Traditional Indian Fabrics", excerpt: "Explore the origins and stories woven into the beautiful fabrics of India." },
  ];
  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-12 space-y-8">
      <h2 className="text-3xl font-bold mb-6">Our Blog</h2>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-stone-700 mt-1">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Blog;
