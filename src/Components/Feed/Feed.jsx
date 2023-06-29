import FeedContents from "../FeedContents/FeedContents";
import Post from "../Post/Post";
import "./Feed.css";
import { Posts } from "../../TestData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <FeedContents />

        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
