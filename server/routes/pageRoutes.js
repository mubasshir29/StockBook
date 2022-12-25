import express from 'express'
import {getAllAssets, addNewEntry} from './../controllers/pageController.js'

const router = express.Router()

router.get('/', getAllAssets)
router.post('/newEntry', addNewEntry)

export default router;
