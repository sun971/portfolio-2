import "./BlogList.css";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "My First Post",
    description: "This is a brief description of my first post.",
  },
  {
    id: 2,
    title: "Another Post",
    description: "This is a brief description of another post.",
  },
];
const BlogList = () => {
  return (
    <div className="blog-list">
      {blogPosts.map((post) => (
        <div className="blog-card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
