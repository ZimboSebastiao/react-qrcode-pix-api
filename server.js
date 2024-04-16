// server.js

const express = require("express");
const { PIX } = require("react-qrcode-pix");

const app = express();
const port = 3001;

app.use(express.json());

app.post("/generate-qrcode", (req, res) => {
  const { pixkey, merchant, city, cep, code, amount } = req.body;

  // Gerar o payload do QR Code PIX
  const payload = `00020126470014BR.GOV.BCB.PIX0125${pixkey}5204000053039865802BR5915${merchant}6014${city}62070503***6304${code}`;

  // Enviar o payload como resposta
  res.json({ payload });
});

app.listen(port, () => {
  console.log(`Servidor API está rodando em http://localhost:${port}`);
});
