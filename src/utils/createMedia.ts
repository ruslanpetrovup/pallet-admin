import payload from "payload";

// Обработчик для загрузки изображений
const createMedia = (req, res) => {
  const images = req.file;
  // if (!images || images.length === 0)
  //   return res.json({
  //     status: 400,
  //     message: "notSuchImages",
  //   });

  //   payload.create({ collection: "media" as never, data: images });

  console.log(images);

  res.json({
    status: 200,
    message: "Images uploaded successfully!",
  });
};

export default createMedia;
