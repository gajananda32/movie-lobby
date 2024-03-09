const movieCtrl = require('../controllers/movieController');
import express from 'express';
const router = express.Router();

router.get('/movies', movieCtrl.getAllMovies);
router.get('/search', movieCtrl.searchMovies);
router.post('/movies', movieCtrl.addMovie);
router.put('/movies/:id',movieCtrl.updateMovie);
router.delete('/movies/:id',movieCtrl.deleteMovie);

export default router;
