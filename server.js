var express = require('express');
var cors = require('cors');
require('dotenv').config()
const fileUpload = require('express-fileupload')

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.use(fileUpload({
  createParentPath: true
}));

app.post('/api/fileanalyse', (req, res) => {
  response = {
    name: req.files.upfile.name,
    type: req.files.upfile.mimetype,
    size: req.files.upfile.size
  }
  res.json(response)
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
