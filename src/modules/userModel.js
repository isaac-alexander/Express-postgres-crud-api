import pool from "../config/db";

export const getAllUserService = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};
export const getUserByIdService = async () => {
    const result = await pool.query("SELECT * FROM users where id = $1", [id]);
    return result.rows[0];
};
export const createUserService = async (name, email) => {
    const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
    return result.rows[0];
};
export const updateUserService = async () => {};
export const deleteUserService = async () => {};