import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = 8000;
app.listen(port, () => {
  console.log("server is listening on port 8000");
});
