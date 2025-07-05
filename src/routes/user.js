const express = require("express");


const router = express.Router();

router.get('/admin', () => {}); // 2 ways either in search query send video name or get all videos ( obviously paginated in both cases )
router.get('/admin/upload', () => {});
router.post('/admin/upload', () => {});
router.delete('/admin/delete/:id', () => {});

router.get('/', () => {}) // only 1 way i.e. send paginated list of all videos
router.get('/:id', () => {});

module.exports = router;