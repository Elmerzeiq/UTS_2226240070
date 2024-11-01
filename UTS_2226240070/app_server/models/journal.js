const mongoose = require ("mongoose");

const journalSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    abstract:{
        type: String,
    },
    content:{
        type: String,
    },
    publication_date: {
        type: Date,
    },
    author :{
        type: String,
        required: true,
    },
    citations : {
        type: Number,
    },
    journal_name:{
        type: String,
    },
    volume : {
        type : String,
    },
    issue : {
        type : String,

    },
    pages : {
        type : String,
    }

    

});

const Journal = mongoose.model('Journal', JournalSchema);
module.exports = Journal;
