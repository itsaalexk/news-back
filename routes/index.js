import { Router } from "express";
import { getAllNews } from "../controllers/getAllNewsConfig.js";
import { archiveNews } from "../controllers/archiveNews.js";

const router = Router();

router.use("/getAllNews", getAllNews);
router.use("/archiveNews/:id", archiveNews);

export default router;
