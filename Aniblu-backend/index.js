const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const axios = require("axios").default;

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/home_ongoing", (req, res) => {
  //  fetch("https://api.jikan.moe/v4/top/anime/?filter=airing&limit=10")
  try {
    fetch("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.json())
      .then((data) => {
        res.send(data);
      });
  } catch (error) {
    res.status.send(400);
    console.error(error);
  }
  //   .catch((error) => {
  //     console.log(error);
  //   })
});
