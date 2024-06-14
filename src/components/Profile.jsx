import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import profile from "../../src/assets/images/profile.png";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { HiIdentification, HiMail } from "react-icons/hi";
import { FaPhone, FaMapLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { SiTask } from "react-icons/si";
import { BsFilePostFill } from "react-icons/bs";

const Profile = () => {
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("userId");
  const [user, setUser] = useState(null);
  const [emp, setEmp] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!resp.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await resp.json();
        setUser(userData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchPosts = async () => {
      try {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        if (!resp.ok) {
          throw new Error("Failed to fetch user posts");
        }
        const postData = await resp.json();
        setPosts(postData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTodos = async () => {
      try {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
        );
        if (!resp.ok) {
          throw new Error("Failed to fetch user todos");
        }
        const todoData = await resp.json();
        setTodos(todoData);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchUser();
      fetchPosts();
      fetchTodos();
    }
  }, [userId]);

  if (!userId) {
    return <div>No user selected.</div>;
  }

  if (!user || !posts || !todos) {
    return <div>Loading...</div>;
  }

  const { id, name, username, email, address, phone, website } = user;

  return (
    <div className="bg-neutral-900 w-full h-full p-2 rounded-md flex flex-col gap-2">
      <Link to="/about">
        <div className="bg-neutral-950 py-1.5 px-2.5 w-fit h-fit rounded-md flex items-center gap-2">
          <IoMdArrowRoundBack />
          Back
        </div>
      </Link>
      <div className="flex gap-2 flex-row overflow-hidden">
        <div className="w-1/2 flex flex-col gap-2 h-full overflow-hidden">
          <div className="bg-neutral-950 p-2 h-fit rounded-md flex flex-col gap-2 ">
            <div>
              <img
                src={profile}
                alt="Profile"
                width={100}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center gap-2">
              <RiCharacterRecognitionFill />
              {name}
            </div>
            <div className="flex items-center gap-2">
              <HiIdentification />
              {username}
            </div>
            <div className="flex items-center gap-2">
              <HiMail />
              {email}
            </div>
            <div className="flex items-center gap-2">
              <FaMapLocationDot />
              {address.street}, {address.suite}, {address.city},{" "}
              {address.zipcode}
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              {phone}
            </div>
            <div className="flex items-center gap-2">
              <FaLink />
              {website}
            </div>
          </div>
          <div className=" overflow-y-scroll sbar flex flex-col">
            <span className="bg-neutral-950 p-2 rounded-md  sticky top-0 flex gap-2 items-center">
              <SiTask />
              Tasks
            </span>
            {todos.map((todo) => (
              <div className="">
                <div className="">
                  <div
                    key={todo.id}
                    className="bg-neutral-950 p-2 rounded-md mt-2 flex flex-col gap-2"
                  >
                    <h4 className="text-md font-medium">{todo.title}</h4>
                    <p
                      className={
                        todo.completed
                          ? "text-green-600 bg-green-300 w-fit py-1 px-2.5 rounded-md text-sm font-bold"
                          : "text-red-600 bg-red-300 w-fit py-1 px-2.5 rounded-md text-sm font-bold"
                      }
                    >
                      {todo.completed ? "Completed" : "Pending"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" overflow-y-scroll sbar w-1/2 h-[100vh] flex flex-col">
          <span className="bg-neutral-950 p-2 rounded-md  sticky top-0 mb-2 flex gap-2 items-center">
            <BsFilePostFill />
            Posts
          </span>
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-neutral-950 p-2 rounded-md mb-2 group"
            >
              <h4 className="text-md font-medium group-hover:bg-neutral-900 group-hover:px-2 duration-500 py-2 rounded-md">
                {post.title}
              </h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
