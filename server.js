// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// express routes
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// start server
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});