import "dotenv/config";
import express from "express";
const app = express();
import { extractData } from "./utils.js/extractdata.js";

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = 3000;
await extractData();

 
app.listen(port, () => {
  console.log(`server is running on ${process.env.BASE_URL}:${process.env.PORT}`);
})