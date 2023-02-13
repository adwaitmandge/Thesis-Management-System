const express = require("express");
const router = express.Router();
const fs = require("fs");
const { protect } = require("../middleware/authMiddleware");
const supabase = require("../config/supabaseClient");

router.get("/", protect, async (req, res) => {
  console.log("Inside download files at the frontend");

  console.log(req.header("path"));
  const { fileName } = req.query;
  console.log("filename is ", fileName);
  console.log(req.query);
  const path = req.header("path");
  console.log(path);
  const { data, error } = await supabase.storage
    .from("thesis")
    .download(`${path}`);

  const blob = data;
  const buffer = Buffer.from(await blob.arrayBuffer());
  fs.promises.writeFile(
    `C:/Users/Adwait/Downloads/hackathon-front-main/server/files/${fileName}`,
    buffer
  );

  console.log("File has been parsed");
  res.json("SUCCESS");
});

module.exports = router;
