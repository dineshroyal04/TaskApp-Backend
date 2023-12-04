const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pokkalladinesh:dinesh@atlascluster.loylxaz.mongodb.net/TaskManager",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
