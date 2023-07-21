import "dotenv/config";
require("dotenv").config();

import express from "express";
import { playlist } from "./entity/playlist";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.get("/song/:id", (req, res) => {
  const id = req.params.id;
  const song = getSong(id);
  res.json({
    message: "success",
    data: song,
  });
});

app.get("/playlist", (req, res) => {
  const { sort } = req.query;
  if (sort) {
    playlist.sort((song1, song2) => song2.played - song1.played);
  }
  res.json(playlist);
});

app.post("/playlist", (req, res) => {
  const body = { req };
  const song = {
    id: uuidv4(),
    played: 0,
    ...body,
  };

  playlist.push(song);
  res.json({
    message: "success",
    data: song,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
