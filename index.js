import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.listen(process.env.PORT,()=>{
  console.log('listening....');
});