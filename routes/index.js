import { Router } from "express";
import { getAllNews } from "../controllers/getAllNewsConfig.js";
import { archiveNews } from "../controllers/archiveNews.js";
import { restoreNews } from "../controllers/restoreNews.js";

const router = Router();

router.use("/getAllNews", getAllNews);
router.use("/archiveNews/:id", archiveNews);
router.use("/restoreNews/:id", restoreNews);

export default router;
