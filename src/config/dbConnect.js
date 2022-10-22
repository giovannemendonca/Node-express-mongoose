import mongoose from "mongoose"

mongoose.connect("mongodb+srv://giovannemendonca:326691@node-study.epsirud.mongodb.net/Biblioteca");

let db = mongoose.connection;

export default db;