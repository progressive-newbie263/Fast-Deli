const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Chào bạn đến với trang đặt đồ ăn!');
});

app.listen(port, () => {
  console.log(`Food service running on port ${port}`);
});
