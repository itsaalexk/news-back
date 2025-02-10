import { STATUS } from "../config/status.js";
import { News } from "../models/news.schema.js";

export async function toggleFavorites(req, res) {
  try {
    const newsId = req.params.id;

    let newsItem = await News.findById(newsId);
    if (!newsItem) {
      return res
        .status(STATUS.NOT_FOUND)
        .json({ message: "Noticia no encontrada", status: STATUS.NOT_FOUND });
    }

    newsItem.isFavorite = !newsItem.isFavorite;
    await newsItem.save();

    res
      .status(STATUS.OK)
      .json({
        message: "Estado de favorito actualizado",
        status: STATUS.OK,
        isFavorite: newsItem.isFavorite,
      });
  } catch (error) {
    res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Error del servidor", error });
  }
}
