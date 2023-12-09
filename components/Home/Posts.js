import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostModal from "./PostModal";

function Posts({ posts }) {
  const [post, setPost] = useState();

  useEffect(() => {
    console.log("Posts", posts);
  });

  return (
    <div>
      <PostModal post={post} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:ml-80">
        {posts.map((item, index) => (
          <div key={index} onClick={() => { window.my_modal_1.showModal(); setPost(item); }}>
            <PostItem post={item} modal={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
