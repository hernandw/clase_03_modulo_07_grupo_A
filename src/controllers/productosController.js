import { obtenerProductosActivos } from "../models/productosModel.js";

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

export { listarProductos, home };
