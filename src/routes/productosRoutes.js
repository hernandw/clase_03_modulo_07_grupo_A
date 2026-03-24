import express from 'express'
import { listarProductos, home } from '../controllers/productosController.js'

const router = express.Router()



router.get('/', home)
router.get('/productos', listarProductos)


export default router