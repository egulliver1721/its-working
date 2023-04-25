import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
import cors from "cors";
const prisma = new PrismaClient();

// middleware
app.use(
  cors({
    origin: "https://its-working-client-git-routes-egulliver1721.vercel.app",
    credentials: true,
  })
);

app.get("/api/vans", async (req, res) => {
  const data = await prisma.van.findMany();
  console.log(data);
  res.send(data);
});

app.get("/api/vans/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.van.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  console.log(data);
  res.send(data);
});

app.get("/api/host/vans", async (req, res) => {
  const data = await prisma.van.findMany({
    where: {
      hostId: 123,
    },
  });
  console.log(data);
  res.send(data);
});

app.get("/api/host/vans/:id", async (req, res) => {
  const { id } = req.params;
  const data = await prisma.van.findUnique({
    where: {
      id: parseInt(id),
    },
  });
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
