const express = require("express");
const { upload , deleteVideo } = require("../controllers/user");

const router = express.Router();

router.get('/admin/upload', (req, res) =>  res.render('upload'));
router.post('/admin/upload', upload);
router.get('/admin/delete', (req, res) =>  res.render('delete'));
router.delete('/admin/delete/:id', deleteVideo);

router.get('/', () => {}) // 2 ways either in search query, send video name or get all videos ( paginated in both cases )
router.get('/:id', () => {}); // play the video with video id 'id'

module.exports = router;