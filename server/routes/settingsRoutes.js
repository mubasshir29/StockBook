import express from 'express'
import {addCategory, addType, addVendor, addModel, addProject, addPerson} from '../controllers/settingsController.js'

const router = express.Router()

router.post('/addCategory', addCategory)
router.post('/addType', addType)
router.post('/addVendor', addVendor)
router.post('/addModel', addModel)
router.post('/addProject', addProject)
router.post('/addPerson', addPerson)

export default router;
