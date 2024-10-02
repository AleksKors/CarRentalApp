import db from './db';

export const insertUser = async (name, email, password) => {
  try {
    console.log('Inserting user');
    await db.runAsync(
      `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
      name, email, password
    );
    console.log('User inserted successfully');
  } catch (error) {
    console.log('Error inserting user: ', error);
  }
};

export const getUser = async (email, password) => {
  try {
    console.log('Fetching user with email: ', email, ' and password: ', password);
    const results = await db.getFirstAsync(
      `SELECT * FROM users WHERE email = ? AND password = ?`,
      [email, password]
    );
    console.log("Results: ", results);
    if (results) {
      return results;
    } else {
      return null;
    }
  } catch (error) {
    console.log('Error fetching user: ', error);
    return null;
  }
};