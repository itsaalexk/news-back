import { STATUS } from "../config/status.js";
import { News } from "../models/news.schema.js";

export const getAllNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
    const archived = req.query.archived === "true";

    const news = await News.find({ achieved: archived })
      .skip(skip)
      .limit(limit);
    const total = await News.countDocuments({ achieved: archived });

    res.json({ news, total, page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error", error });
  }
};
