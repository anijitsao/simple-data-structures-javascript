import express from "express";

const serviceRouter = express.Router();

serviceRouter.get("/credentials", (req, res) => {
  res.status(200).json({ message: "Ok" });
});

export { serviceRouter };
