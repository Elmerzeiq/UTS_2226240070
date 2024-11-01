const express = require("express");
const router = express.Router();
const journalController = require("../app_server/controllers/controllerJournal");
//Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB
router.get("/journal", journalController.journalIndex);
router.post("/tambah/journal", journalController.journalInsert);
module.exports = router;