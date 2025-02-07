import { STATUS } from "../config/status.js";
import { News } from "../models/news.schema.js";

export const restoreNews = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.findById(id);

    if (!news) {
      return res
        .status(STATUS.NOT_FOUND)
        .json({ message: "Noticia no encontrada" });
    }

    news.achieved = false;
    news.archiveDate = null;

    await news.save();

    res.status(STATUS.OK).json({
      message: `Noticia con ID ${id} restaurada correctamente`,
      archivedNews: news,
    });
  } catch (error) {
    console.error(error);
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Error al archivar la noticia" });
  }
};
