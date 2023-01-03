import express from "express";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "fields missing" });
  }
  res.status(200).json({ message: "login success" });
});

// To run the server uncomment the following lines
// app.listen(3000, () => {
//   console.log("Server is running on 3000");
// });

// for integration testing
export { app };
