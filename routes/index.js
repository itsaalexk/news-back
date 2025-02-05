import { Router } from "express";
import { STATUS } from "../config/status.js";

const router = Router();

router.use("/", (req, res) => {
  res.status(STATUS.OK).json({
    message: "endpoint principal",
  });
});

export default router;
