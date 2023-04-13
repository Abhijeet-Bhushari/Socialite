const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path");

dotenv.config();

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_URL);
  console.log("Mongo connected");
} catch (error) {
  console.log(error);
  process.exit();
}

app.use("/images", express.static(path.join(__dirname,"public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,"public/images");
  }, 
  filename: (req, file, cb)=>{
    // const name = Date.now() + file.originalname;
    // // console.log(name);
    console.log(req.body.name);
    cb(null, file.originalname);
  },
})

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
  try{
    return res.status(200).json("File uploaded successfully.");
  } catch(err){
    console.log(err)
  }
});


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(8800, () => {
  console.log("Backend server is running!");
});
