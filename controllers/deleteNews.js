import { STATUS } from "../config/status.js";
import { News } from "../models/news.schema.js";

export async function deleteNews(req, res) {
  const { id } = req.params;

  try {
    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      return res
        .status(STATUS.NOT_FOUND)
        .json({ message: "Noticia no encontrada", status: STATUS.NOT_FOUND });
    }

    return res
      .status(STATUS.OK)
      .json({ message: "Noticia eliminada exitosamente", status: STATUS.OK });
  } catch (error) {
    console.error(error);
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Error al eliminar la noticia",
      status: STATUS.INTERNAL_SERVER_ERROR,
    });
  }
}
