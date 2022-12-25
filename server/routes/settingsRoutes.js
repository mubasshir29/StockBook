import express from 'express'
import {addCategory, addType, addVendor, addModel, addProject, addPerson, getCategories, getTypes, getvendors, getModels,getProjects,getPersons} from '../controllers/settingsController.js'

const router = express.Router()

router.get('/categories', getCategories)
router.get('/types', getTypes)
router.get('/vendors', getvendors)
router.get('/models', getModels)
router.get('/projects', getProjects)
router.get('/persons', getPersons)

router.post('/addCategory', addCategory)
router.post('/addType', addType)
router.post('/addVendor', addVendor)
router.post('/addModel', addModel)
router.post('/addProject', addProject)
router.post('/addPerson', addPerson)

export default router;
