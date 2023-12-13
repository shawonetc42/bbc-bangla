// components/Home/Posts.js
import React, { useState } from 'react';

const Posts = ({ posts, onLike, onComment }) => {
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(true);
  const [replyToIndex, setReplyToIndex] = useState(null);
  const [commentsToShow, setCommentsToShow] = useState(3);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleComment = (postId, commentType, parentId = null) => {
    const currentTime = getCurrentTime();
    const timestampedComment = `${newComment} - ${currentTime}`;
    onComment(postId, timestampedComment, commentType, parentId);
    setNewComment('');
    setReplyToIndex(null);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const toggleReplyForm = (index) => {
    setReplyToIndex(replyToIndex === index ? null : index);
  };

  const loadMoreComments = () => {
    setCommentsToShow((prev) => prev + 3);
  };

  return (
    <div className="flex flex-wrap">
      {posts.map((post, postIndex) => (
        <div key={post.id} className="border p-4 m-4 w-full max-w-md">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full h-32 object-cover mt-2 rounded" />
          )}
          <p>{post.content}</p>
          <div className="flex justify-between mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => onLike(post.id)}>
              Like
            </button>
            <span className="text-gray-600">Likes: {post.likes || 0}</span>
            <span className="text-gray-600">Comments: {post.comments ? post.comments.length : 0}</span>
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Tweet your reply..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="border p-2 w-full"
            />
            <button
              onClick={() => handleComment(post.id, 'comment')}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Tweet
            </button>
          </div>
          <div className={`mt-2 ${showComments ? 'block' : 'hidden'}`}>
            {post.comments &&
              post.comments.slice(0, commentsToShow).map((comment, commentIndex) => (
                <div
                  key={commentIndex}
                  className={`bg-gray-100 p-2 rounded mt-2 ${replyToIndex === commentIndex ? 'ml-8' : ''}`}
                >
                  {/* Twitter-like UI for each comment */}
                  <div className="flex items-start">
                    <img src={comment.userAvatar} alt="Avatar" className="w-8 h-8 object-cover rounded-full mr-2" />
                    <div>
                      <span className="font-semibold">{comment.userName}</span>
                      <span className="text-gray-600">@{comment.userHandle}</span>
                      <p>{comment.text}</p>
                      <div className="flex items-center mt-2">
                        <button onClick={() => toggleReplyForm(commentIndex)} className="text-blue-500 mr-2">
                          Reply
                        </button>
                        <span className="text-gray-600">{comment.timestamp}</span>
                      </div>
                      {replyToIndex === commentIndex && (
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Tweet your reply..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="border p-2 w-full"
                          />
                          <button
                            onClick={() => handleComment(post.id, 'reply', commentIndex)}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                          >
                            Tweet
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            {post.comments && post.comments.length > commentsToShow && (
              <div className="mt-2 text-blue-500 cursor-pointer" onClick={loadMoreComments}>
                {showComments ? 'Show More Comments' : 'Hide Comments'}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
