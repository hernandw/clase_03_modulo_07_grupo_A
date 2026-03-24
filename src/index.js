import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'
import productosRouter from './routes/productosRoutes.js'

const __dirname = path.resolve()
const app = express()

const PORT = process.env.PORT || 3005

//Static Files
app.use(express.static(path.join(__dirname, 'src/public')))

//Middlewares
app.use(express.json())



//Configuracion de Handlebars
app.set('view engine', "hbs")
app.set("views", path.join(__dirname, 'src/views'))

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    extname: '.hbs'
}))



//Ruta

app.use('/', productosRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})