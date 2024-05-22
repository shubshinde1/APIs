import React, { useState, useEffect } from "react";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { HiIdentification } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import profile from "../../src/assets/images/profile.png";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoSave } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

const url = `https://jsonplaceholder.typicode.com/users`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserName, setEditUserName] = useState("");

  const fetchUsers = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error("Failed to fetch users");
      }
      const userData = await resp.json();
      setUsers(userData);
      setTotalUsers(userData.length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditUser = (userId, currentName) => {
    setEditUserId(userId);
    setEditUserName(currentName);
  };

  const handleSubmitEdit = async () => {
    try {
      const resp = await fetch(`${url}/${editUserId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editUserName }),
      });
      if (!resp.ok) {
        throw new Error("Failed to update user");
      }
      fetchUsers();
      setEditUserId(null);
      setEditUserName("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const resp = await fetch(`${url}/${userId}`, {
        method: "DELETE",
      });
      if (!resp.ok) {
        throw new Error("Failed to delete user");
      }
      setUsers(users.filter((user) => user.id !== userId));
      setTotalUsers((prevTotalUsers) => prevTotalUsers - 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-neutral-950 flex flex-col gap-2">
      <div className="bg-neutral-900 px-2 py-4 rounded-md sticky top-0 z-10">
        Total Users: {totalUsers}
      </div>
      <div className="bg-neutral-950 w-full h-full rounded-md overflow-y-scroll sbar grid grid-cols-12 gap-2">
        {users.map((user) => {
          const { id, name, email, phone } = user;
          return (
            <div
              key={id}
              className="bg-neutral-900 flex flex-col gap-2 p-2 rounded-md col-span-12 md:col-span-3 group"
            >
              <div className="flex justify-between">
                <img
                  src={profile}
                  alt="Profile"
                  width={100}
                  className="rounded-md"
                />
                <div className="flex flex-col gap-2">
                  {editUserId === id ? (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSubmitEdit}
                        className="bg-neutral-950 text-white p-1.5 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
                      >
                        <IoSave />
                      </button>
                      <button
                        onClick={() => setEditUserId(null)}
                        className="bg-neutral-950 text-white p-1.5 rounded-md cursor-pointer hover:bg-red-600 transition duration-300"
                      >
                        <MdCancel />
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditUser(id, name)}
                        className="bg-neutral-950 text-white p-1.5 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
                      >
                        <FaUserEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(id)}
                        className="bg-neutral-950 text-white p-1.5 rounded-md cursor-pointer hover:bg-red-600 transition duration-300"
                      >
                        <MdDelete />
                      </button>
                      <Link to={`/profile?userId=${id}`}>
                        <div className="bg-neutral-950 duration-300 w-fit p-1.5 rounded-md">
                          <FaEye />
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <RiCharacterRecognitionFill />
                {editUserId === id ? (
                  <input
                    type="text"
                    value={editUserName}
                    onChange={(e) => setEditUserName(e.target.value)}
                    className="bg-neutral-800 px-2 py-1 rounded-md text-white"
                  />
                ) : (
                  name
                )}
              </div>
              <div className="flex items-center gap-2">
                <HiIdentification />
                {id}
              </div>
              <div className="flex items-center gap-2">
                <HiMail />
                {email}
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                {phone}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
