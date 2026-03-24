import pool from "../config/db.js";

export const obtenerProductosActivos = async () => {
  const { rows } = await pool.query("Select * from productos_activos");
  return rows;
};
