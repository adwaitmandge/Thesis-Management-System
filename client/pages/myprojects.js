import { supabase } from "../config/supabaseClient";
import react, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link, useToast } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";

const uploads = () => {
  const { user } = ChatState();
  console.log(user);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [bucketData, setBucketData] = useState([]);
  const router = useRouter();
  const toast = useToast();

  console.log(bucketData);
  const handleUpload = async (e) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("thesis")
      .upload(`${user.name}/` + file?.name, file);

    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  };

  const downloadFiles = async (fileName) => {
    try {
      console.log("Inside download files at the frontend");
      console.log("About to send a get request");

      const res = await fetch(
        `http://localhost:5000/api/uploads?fileName=${fileName}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log("After the req");
      console.log(res);

      const data = await res.json();

      console.log(data);
      toast({
        title: "File Downloaded",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log("ERROR OCCURRED WHILE FETCHING FILES");
      console.log(error);
    }
  };

  const getFromBucket = async () => {
    const { data, error } = await supabase.storage
      .from("thesis")
      .list(`${user?.name}`, {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    console.log(data);
    setBucketData(data);
  };

  useEffect(() => {
    getFromBucket();
  }, [user]);

  //   className="flex min-h-scree flex-col items-center justify-center py-2 "
  return (
    <>
      <div className="w-[50%] mx-auto">
        <div class="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <span >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create New Projects
            </h5>
          </span>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <Link
            href="https://docs.google.com/document/d/1CHfflA9XCz2EdkV-qukilgAEBdxg0l_DYOBaCEptfgI/edit"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Add New
          </Link>
        </div>
      </div>
      <div className="mt-[3%]">
        <hr />
      </div>
      <div className="flex  flex-col items-center justify-center py-2">
        <input type="file" className="" onChange={handleUpload} />
      </div>
      <div className="mt-[0.5%]">
        <hr />
      </div>
      <div>
        {bucketData?.map((data) => {
          console.log("Mapping", data.name);
          return (
            <div className="bg-gray-300 w-[100%] m-auto h-[50%] rounded-full mt-[10px] mb-[10px]">
              <div className="h-full">
                <div key={data.id} className="flex justify-center py-3">
                  <button
                    onClick={() => downloadFiles(data.name)}
                    className="text-black"
                  >
                    {data.name}{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default uploads;
