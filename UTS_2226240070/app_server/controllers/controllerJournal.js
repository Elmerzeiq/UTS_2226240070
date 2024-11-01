const Journal = require("../app_server/models/journal");

const journalIndex = async (req, res) => {
    try {
        const journal = await Journal.find({});
        res.status(200).json({ message: 'Success', data: journal });
    } catch (error) {
        res.status(400).json({ message: "Failed", error: error.message }); // Tampilkan error message yang lebih spesifik
    }
}

const jounalInsert = async (req, res) => {
    try {
        const { title, abstract, content, publication_date, author, citations, journal_name,volume, issue, pages } = req.body;

        
        

        const journal = new Journal({
            title,
            abstract,
            content,
            publication_date,
            author,
            citations,
            journal_name,
            volume,
            issue,
            pages
            
        });

        // Simpan produk ke database
        await journal.save();
        res.status(201).json({ message: 'Success', data: journal });
    } catch (error) {
        res.status(400).json({ message: "Failed", error: error.message }); // Tampilkan error message yang lebih spesifik
    }
}

module.exports = { journalIndex, journalInsert };


