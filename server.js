/*zoo animals rest api*/
let html_root = require("./views/root.js");
let logs = require("./logs");
let morgan = require("morgan");
let mongo = require("mongodb").MongoClient;
let express = require("express");
let _PORT_ = process.env.PORT || 3011;

//express definitions
let app = express();
app.use(morgan('Morgan** - [:date[clf]] "HTTP/:http-version" :status ":user-agent"'));

//mongodb server connection
let mongo_url = "mongodb://localhost:27017/zoo";

mongo.connect(mongo_url, {useNewUrlParser: true}, (err, db) => {
    if (err) return console.log(err);

    var dbase = db.db("zoo");
    var collection = dbase.collection("animals");

    ///all route
    app.get("/all", (req, res) => {
        collection.find().toArray((err, documents) => {
            if (err) throw error;
            res.send(documents);
        });
         /*** SERVER INFO ***/
        logs.server_info(req);
    });

    //names asc order route
    app.get("/name", (req, res) => {
        collection.find().sort({name:1}).toArray((err, documents) => {
            if (err) throw error;
            res.send(documents);
        });
        
        logs.server_info(req);
    });

    //weight desc order route
    app.get("/weight", (req, res) => {
        collection.find().sort({wieght:-1}).toArray((err, documents) => {
            if (err) throw error;
            res.send(documents);
        }); 

        logs.server_info(req);
    })

    //mongodb server listener
    app.listen(3000, () => {console.log('mongo listening on ' + _PORT_)});
    
});  

app.get("/", (req, res) => {
    
    res.send(html_root);
    logs.server_info(req);
    
});

//node server listener
app.listen(_PORT_, (req) =>{
    console.log("Running at " + _PORT_);
}); 