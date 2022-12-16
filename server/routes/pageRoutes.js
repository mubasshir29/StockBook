import express from 'express'
import {getAllAssets} from './../controllers/pageController.js'

const router = express.Router()

router.get('/list-all', getAllAssets)

export default router;
