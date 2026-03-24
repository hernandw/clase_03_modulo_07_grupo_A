import pool from "../config/db.js";

export const obtenerProductosActivos = async () => {
  const { rows } = await pool.query("Select * from productos_activos");
  return rows;
};


export const venderProductos = async(id)=>{

const client = await  pool.connect()

try {
  await client.query("BEGIN")

  //Verificar que le producto exista
  const productResult = await client.query("Select * from productos_activos where id = $1", [id])

  if(productResult.rows.length === 0){
    throw new Error('Producto no encontrado');
  }
  const producto = productResult.rows[0]
//agregamos  a la tabla de productos vendidos
  await client.query(
      `INSERT INTO productos_vendidos (nombre, precio)
       VALUES ($1, $2)`,
      [producto.nombre, producto.precio]
    );

    //eliminarlo de la tabla productos activos
    await client.query(
      'DELETE FROM productos_activos WHERE id = $1',
      [id]
    );
     await client.query('COMMIT');
  return producto;
} catch (error) {
  await client.query("ROLLBACK")
}




}