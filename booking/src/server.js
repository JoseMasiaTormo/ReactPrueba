// server.js
import express from "express";
import cors from "cors";
import dataByDate from "./data.js";

const app = express();

app.use(cors());

const port = process.env.PORT || 8000;

app.get("/:date", function (req, res) {
  const requestedDate = req.params.date;

  if (dataByDate[requestedDate]) {
    res.json({
      data: dataByDate[requestedDate],
    });
  } else {
    res.status(404).json({
      error: "No hay datos disponibles para la fecha solicitada.",
    });
  }
});

app.listen(port);
console.log("API escuchando en el puerto " + port);

export default app;
