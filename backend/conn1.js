
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jhwang:pokpok2002@cluster0-fsmhv.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology:true, useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
