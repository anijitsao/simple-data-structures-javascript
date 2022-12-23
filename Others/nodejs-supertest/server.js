import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// To run the server uncomment the following lines
// app.listen(3000, () => {
//   console.log("Server is running on 3000");
// });

// for integration testing
export { app };
