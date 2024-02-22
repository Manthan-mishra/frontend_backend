import express from "express";
import "dotenv/config";

const port = process.env.PORT || 4000;
const app = express();

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "joke 1", content: "this is joke 1" },
    { id: 2, title: "joke 2", content: "this is joke 2" },
    { id: 3, title: "joke 3", content: "this is joke 3" },
    { id: 4, title: "joke 4", content: "this is joke 4" },
    { id: 5, title: "joke 5", content: "this is joke 5" },
    { id: 6, title: "joke 6", content: "this is joke 6" },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
