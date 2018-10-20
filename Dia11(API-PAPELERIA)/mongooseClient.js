const mongoose = require('mongoose');
let db_url = "mongodb://admin:mypass123@ds123822.mlab.com:23822/papeleriadb";
mongoose.connect(db_url,{useNewUrlParser : true});
console.log(mongoose.connection.readyState);