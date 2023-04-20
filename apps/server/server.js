import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
import cors from "cors";
const prisma = new PrismaClient();

// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/api/vans", async (req, res) => {
  const data = await prisma.van.findMany();
  console.log(data);
  res.send(data);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = 8000;
app.listen(port, () => {
  console.log("server is listening on port 8000");
});
