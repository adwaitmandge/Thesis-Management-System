import React from "react";

function newprojectform() {
  return (
    <div className="w-[60%] m-auto mt-[2%]">
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Abstract
        </label>
        <textarea
          id="message"
          rows="2"
          class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Base input
        </label>
        <input
          type="text"
          id="base-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          for="small-input"
          class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Small input
        </label>
        <input
          type="text"
          id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <label
        class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-6"
        for="user_avatar"
      >
        Upload file
      </label>
      <input
        class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
      />
      <div className="text-center my-6">
        <a className="text-xl ">OR</a>
      </div>

      <div class="flex items-center justify-center w-full mb-[6%]">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              class="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>

      {/* <div
				class="mt-1 text-lg text-gray-500 dark:text-gray-300"
				id="user_avatar_help"
			></div> */}
    </div>
  );
}

export default newprojectform;
