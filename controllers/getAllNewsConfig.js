import { STATUS } from "../config/status.js";
import { News } from "../models/news.schema.js";

export const getAllNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) ?? 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const news = await News.find({ achieved: false }).skip(skip).limit(limit);

    const total = await News.countDocuments({ achieved: false });

    res.json({ news, total, page, totalPages: Math.ceil(total / limit) });
  } catch (error) {
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error", error });
  }
};
