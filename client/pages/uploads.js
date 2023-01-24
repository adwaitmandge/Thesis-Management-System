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
      <div className="flex  flex-col items-center justify-center py-2">
        <input type="file" className="" onChange={handleUpload} />
      </div>
      <div className="bg-blue-400">
        {bucketData.map((data) => {
          console.log("Mapping", data.name);
          return (
            <div key={data.id}>
              <button
                onClick={() => downloadFiles(data.name)}
                className="text-black"
              >
                {data.name}{" "}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default uploads;
