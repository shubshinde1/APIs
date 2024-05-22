import React, { useState, useEffect } from "react";
import { FaUserAlt, FaComment, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import profile from "../../src/assets/images/profile.png";

const postUrl = `https://jsonplaceholder.typicode.com/posts`;
const userUrl = `https://jsonplaceholder.typicode.com/users`;
const commentUrl = `https://jsonplaceholder.typicode.com/comments`;

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [comments, setComments] = useState([]);
  const [expandedComments, setExpandedComments] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const resp = await fetch(postUrl);
        if (!resp.ok) {
          throw new Error("Failed to fetch posts");
        }
        const postData = await resp.json();
        setPosts(postData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const resp = await fetch(userUrl);
        if (!resp.ok) {
          throw new Error("Failed to fetch users");
        }
        const userData = await resp.json();
        const userMap = {};
        userData.forEach((user) => {
          userMap[user.id] = user;
        });
        setUsers(userMap);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchComments = async () => {
      try {
        const resp = await fetch(commentUrl);
        if (!resp.ok) {
          throw new Error("Failed to fetch comments");
        }
        const commentData = await resp.json();
        setComments(commentData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
    fetchUsers();
    fetchComments();
  }, []);

  const getUserName = (userId) => {
    const user = users[userId];
    return user ? user.name : "Unknown User";
  };

  const getCommentsForPost = (postId) => {
    return comments.filter((comment) => comment.postId === postId);
  };

  const toggleComments = (postId) => {
    setExpandedComments((prevExpandedComments) => ({
      ...prevExpandedComments,
      [postId]: !prevExpandedComments[postId],
    }));
  };

  const totalPosts = posts.length;
  const totalComments = comments.length;

  return (
    <div className="flex flex-col gap-2 ">
      <div className="bg-neutral-900 px-2 py-4 rounded-md sticky top-0 z-10 ">
        Total Posts: {totalPosts} | Total Comments: {totalComments}
      </div>
      <div className="flex flex-col gap-2 sticky top-2 z-0  ">
        {posts.map((data) => {
          const { id, title, body, userId } = data;
          const postComments = getCommentsForPost(id);
          const isCommentsExpanded = expandedComments[id];
          return (
            <div
              key={id}
              className="bg-neutral-900 p-2 flex flex-col gap-2 rounded-md group "
            >
              <Link to={`/profile?userId=${id}`}>
                <div className="flex items-center gap-2 group-hover:bg-neutral-950 w-fit group-hover:px-2 py-2 duration-300 rounded-md">
                  <img
                    src={profile}
                    alt="Profile"
                    width={40}
                    className="rounded-md"
                  />{" "}
                  {getUserName(userId)}
                </div>
              </Link>
              <div>{title}</div>
              <div className="bg-neutral-950 p-2 rounded-md">{body}</div>
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => toggleComments(id)}
              >
                <div className="flex items-center gap-1 bg-neutral-950 p-2 w-fit rounded-md">
                  <FaComment /> {postComments.length}
                </div>
                <div className="flex items-center gap-1 bg-neutral-950 p-2 w-fit rounded-md">
                  <FaHeart /> 10
                </div>
              </div>
              {isCommentsExpanded && (
                <div className="bg-neutral-950 p-2 rounded-md flex flex-col gap-2">
                  {postComments.map((comment, index) => (
                    <div key={comment.id} className="flex gap-2 items-center">
                      <span className="bg-neutral-900 px-2.5 py-1 h-fit rounded-md">
                        {index + 1}
                      </span>
                      {comment.body}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
