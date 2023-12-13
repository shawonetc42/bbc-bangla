import React, { useState } from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';

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
    setCommentsToShow((prev) => prev + 3); // Increase the number of comments to show by 3
  };

  // Sort posts based on the number of likes in descending order
  const sortedPosts = posts.slice().sort((a, b) => b.likes - a.likes);

  return (
    <div className="flex flex-col space-y-4">
      {sortedPosts.map((post, postIndex) => (
        <div key={post.id} className="border p-4 rounded-md bg-white shadow-md">
          <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded" />
          )}
          <p className="text-gray-800 mb-4">{post.content}</p>
          <div className="flex items-center text-gray-500 space-x-4">
            <button
              className="flex items-center cursor-pointer"
              onClick={() => onLike(post.id)}
            >
              <FaThumbsUp className="mr-1" />
              Like {post.likes || 0}
            </button>

            <button
              className="flex items-center cursor-pointer"
              onClick={() => toggleComments()}
            >
              <FaComment className="mr-1" />
              Comment {post.comments ? post.comments.length : 0}
            </button>
          </div>
          <div className={`mt-4 ${showComments ? 'block' : 'hidden'}`}>
            {/* Comment Box */}
            <div className="flex items-center space-x-4 mt-2">
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="border p-2 w-full rounded"
              />
              <button
                onClick={() => handleComment(post.id, 'comment')}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Comment
              </button>
            </div>
            {/* Comments */}
            <div className="mt-2 text-gray-600">
              {post.comments &&
                [...post.comments].reverse().slice(0, commentsToShow).map((comment, commentIndex) => (
                  <div
                    key={commentIndex}
                    className={`flex items-start bg-gray-100 p-2 rounded mt-2 ${
                      replyToIndex === commentIndex ? 'ml-8' : ''
                    }`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <div>
                      <p className="text-gray-700">{comment}</p>
                      <button
                        onClick={() => toggleReplyForm(commentIndex)}
                        className="text-blue-500 mt-1"
                      >
                        Reply
                      </button>
                      {replyToIndex === commentIndex && (
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder="Write a reply..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="border p-2 w-full rounded"
                          />
                          <button
                            onClick={() => handleComment(post.id, 'reply', commentIndex)}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                          >
                            Reply
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              {post.comments && post.comments.length > commentsToShow && (
                <div className="text-blue-500 cursor-pointer" onClick={loadMoreComments}>
                  {showComments ? 'Show More Comments' : 'Hide Comments'}
                </div>
              )}
              <div className="mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
