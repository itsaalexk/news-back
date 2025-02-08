import { Router } from "express";
import { getAllNews } from "../controllers/getAllNewsConfig.js";
import { archiveNews } from "../controllers/archiveNews.js";
import { restoreNews } from "../controllers/restoreNews.js";
import { deleteNews } from "../controllers/deleteNews.js";
import { createNews } from "../controllers/createNews.js";

const router = Router();

router.use("/getAllNews", getAllNews);
router.use("/archiveNews/:id", archiveNews);
router.use("/restoreNews/:id", restoreNews);
router.delete("/deleteNews/:id", deleteNews);
router.post("/createNews", createNews);

export default router;
