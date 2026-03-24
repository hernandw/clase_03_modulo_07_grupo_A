import { obtenerProductosActivos, venderProductos } from "../models/productosModel.js";

const home = (req, res) => {
  try {
    res.render("home", {
      pageTitle: "inicio",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al cargar los productos");
  }
};

const listarProductos = async (req, res) => {
  try {
    const productos = await obtenerProductosActivos();
    res.render("productos/listar", {
      pageTitle: "Listar Productos",
      productos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al cargar los productos");
  }
};


const vendido = async(req, res)=>{
  const id = req.params.id
  try {
    const producto = await venderProductos(id)
    res.render("productos/resultado", {
      pageTitle: "Productos"
    })
  } catch (error) {
    
  }
}


export { listarProductos, home, vendido };
