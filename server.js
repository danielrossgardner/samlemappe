const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('./public'));


app.listen(process.env.PORT || 8181,function(){
  console.log('listening on port '+ 8181)
})
