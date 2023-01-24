import { supabase } from "../config/supabaseClient";
import react, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const uploads = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [bucketData, setBucketData] = useState([]);
  const router = useRouter();

  const handleUpload = async (e) => {
    let file;
    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("thesis")
      .upload("public/" + file?.name, file);

    if (data) {
      console.log(data);

      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const jsonRes = await res.json();
      console.log("positve response returned");

      console.log("jsonRes", jsonRes);
      console.log(uploadedFiles);
    } else if (error) {
      console.log(error);
    }
  };

  const downloadFiles = async (fileName) => {
    console.log("Inside download files");

    const { data, error } = await supabase.storage
      .from("thesis")
      .download(`public/${fileName}`);
  };

  const getFiles = async (req, res) => {
    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      setUploadedFiles(data);
      console.log(data);
      console.log("inside get files at frontend");
      console.log(uploadedFiles);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getFromBucket = async () => {
    const { data, error } = await supabase.storage
      .from("thesis")
      .list("public", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    setBucketData(data);
    console.log(data);
  };

  useEffect(() => {
    getFiles();
    getFromBucket();
  }, []);

  //   className="flex min-h-scree flex-col items-center justify-center py-2 "
  return (
    <>
      <div className="w-[50%] mx-auto">
        <div class="max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create New Projects
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
          <a
            href="https://docs.google.com/document/d/1CHfflA9XCz2EdkV-qukilgAEBdxg0l_DYOBaCEptfgI/edit"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Add New
          </a>
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
        {bucketData.map((data) => {
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
