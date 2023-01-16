import { Router } from "express";

const serviceRouter = Router();

serviceRouter.get("/credentials", (req, res) => {
  res.status(200).json({ message: "Ok" });
});

export { serviceRouter };
