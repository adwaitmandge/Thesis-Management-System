import React from "react";
import { useRouter } from "next/router";

function sidebar() {
  const router = useRouter();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    router.push("/");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />
      <div className="min-h-screen flex flex-row fixed bg-gray-100 text-black w-[18.6%] ">
        <div className="flex flex-col w-56 bg-gray-100 rounded-r-3xl overflow-hidden w-[100%] ">
          <div className="flex items-center justify-center h-20 shadow-md w-[100%] ">
            <img
              src="https://cdn.discordapp.com/attachments/1063052883559452682/1063105046880981072/vjti-college-logo-707F46CDA8-seeklogo.png"
              class="mr-3 sm:h-20 py-1"
              alt="Flowbite Logo"
            />
            <h1 className="text-3xl uppercase text-indigo-500">VJTI</h1>
          </div>
          <ul className="flex flex-col py-6 w-[100%] ">
            <li>
              <a
                href="/dashboard"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="hover:text-white bx bx-home"></i>
                </span>
                <span className="text-xl font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/chats"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="hover:text-white bx bx-chat"></i>
                </span>
                <span className="text-xl font-medium">Chat</span>
              </a>
            </li>
            <li>
              <a
                href="/myprojects"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i class=" hover:text-white bx bx-book-add"></i>
                </span>
                <span className="text-xl font-medium">My Project</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="hover:text-white bx bx-user"></i>
                </span>
                <button onClick={() => router.push('/profile')} className="text-xl font-medium">Profile</button>
              </a>
            </li>
            <li>
              <a
                href="/Deadline"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="hover:text-white bx bx-bell"></i>
                </span>
                <span className="text-xl font-medium">Deadlines</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-4 transition-transform ease-in duration-200 text-gray-500 hover:text-white hover:bg-green-700 hover:rounded-full"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="hover:hover:text-white bx bx-log-out"></i>
                </span>
                <button onClick={logoutHandler} className="text-xl font-medium">
                  Logout
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default sidebar;
