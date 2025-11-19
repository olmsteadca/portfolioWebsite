import BlogCard from "./components/BlogCard"
import allPosts from "@data/blog-posts.json"

/* TODO: prep for pagination */

function Blog() {
  return (
    <div className="section-content">
      <h1 style={{ color: "#FFFFFFF" }}>Blog</h1>
      <div className="transparent-container">
        <ul className="flex-grid" style={{padding: "2rem", listStyle: "none"}}>
          {allPosts.map((post) => (
            <li key={post.id}>
            <BlogCard
              id={post.id}
              title={post.title}
              date={post.date}
              summary={post.summary}
              image={post.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Blog;