import express from 'express'
import { listarProductos, home, vendido } from '../controllers/productosController.js'

const router = express.Router()



router.get('/', home)
router.get('/productos', listarProductos)
router.post('/vender/:id', vendido)


export default router