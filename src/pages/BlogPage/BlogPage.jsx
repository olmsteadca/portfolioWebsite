import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '@data/blog-posts.json';

function RenderContent({ content }) {
  return (
    <div>
      {content.split('\n').map((line, index) => (
        <p key={index} style={{ marginBottom: "4rem", marginInline: "4rem", textAlign: "justify"}}>{line}</p>
      ))}
    </div>
  );
}

function BlogPage() {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section id={post.id + post.title}>
      <div className="transparent-container" style={{padding: "1rem"}}>
        <h2>{post.title}</h2>
        <RenderContent content={post.content} />
      </div>
    </section>
  );
}

export default BlogPage;