const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({ 
  destination: (req, file, callback) => {
    callback(null, "uploads/")
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

app.post('/files/upload', upload.single('arquivo'), (req, res) => {
  console.log(req.body, req.file)
  res.send('Ok!')
});

app.get('/ping', (req, res) => res.send('pong!'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Running at port: ${PORT}`));