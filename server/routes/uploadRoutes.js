const express = require("express");
const supabase = require("../config/supabaseClient");
const router = express.Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  console.log("Inside download files at the frontend");

  const { fileName } = req.query;
  console.log("filename is ", fileName);
  console.log(req.query);
  const { data, error } = await supabase.storage
    .from("thesis")
    .download(`public/${fileName}`);

  const blob = data;
  const buffer = Buffer.from(await blob.arrayBuffer());
  await fs.promises.writeFile(fileName, buffer);

  console.log("File has been parsed");
  res.json("SUCCESS!");
});

module.exports = router;
