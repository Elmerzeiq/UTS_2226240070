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
    publication_date{
        type: Date,
    },
    author :{
        type: String,
        required: true,
    },
    citations : {
        type: Number,
    }

    

});

const Journal = mongoose.model('Journal', JournalSchema);
module.exports = Journal;
