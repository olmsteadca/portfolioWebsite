import allPosts from "@data/blog-posts.json"
import BlogCard from "@pages/Blog/components/BlogCard"

function RecentUpdates() {
  var posts = allPosts.slice(-2);
  return (
    <section id="recent-updates-section">
      <div className="section-content">
        <h1 className="title">Recent Updates</h1>
        <ul className="flex-row" style={{ flexWrap: "nowrap", listStyle: "none" }}>
          {posts.map((post) => (
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
    </section>
  );
}

export default RecentUpdates;