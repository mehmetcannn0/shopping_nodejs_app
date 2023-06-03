const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const db_key = require("./database_key").key;

let _db;

const mongoConnect = (callback) => {
    
  
    MongoClient.connect(db_key)
        .then(client => {
            console.log("db_key");
            console.log(db_key);
            console.log('connected');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}

const getdb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database';
}


exports.mongoConnect = mongoConnect;
exports.getdb = getdb;