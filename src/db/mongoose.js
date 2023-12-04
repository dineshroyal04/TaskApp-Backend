const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pokkalladinesh:dinesh@cluster0.lzzkxzu.mongodb.net/TaskManager",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
