import { STATUS } from "../config/status.js";
import { News } from "../models/news.schema.js";

export async function createNews(req, res) {
  try {
    const { title, description, content, author } = req.body;

    if (!title || !description || !content || !author) {
      return res
        .status(STATUS.BAD_REQUEST)
        .json({ message: "Faltan campos requeridos" });
    }

    const newNews = new News({
      title,
      description,
      content,
      author,
      achieved: false,
      archiveDate: null,
      image: "https://picsum.photos/200/300?random=2",
      date: new Date().toISOString(),
    });

    await newNews.save();
    return res
      .status(STATUS.CREATED)
      .json({ message: "Noticia publicada con éxito", status: STATUS.CREATED });
  } catch (error) {
    console.error("Error al publicar la noticia:", error);
    return res
      .status(STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Error interno del servidor", error });
  }
}
