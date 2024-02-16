import express from 'express'
import listAll from '../controllers/produto/listAll.js'
import getById from '../controllers/produto/getById.js'
import create from '../controllers/produto/create.js'
import update from '../controllers/produto/update.js'
import remove from '../controllers/produto/remove.js'

const router = express.Router()

router.get('/', listAll )

router.get('/:id', getById )

router.post('/', create )

router.put('/', update)

router.delete('/:id', remove)


export default router