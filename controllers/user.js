import db from "../database/db.js";

export const getUser = (req, res) => {
  res.send("Hello, this is the data!");
};

export const postData = (req, res) => {
  const { name, email, password } = req.body;

  const q = `INSERT INTO user (name, email, password) VALUES (?,?,?)`;
  db.query(q, [name, email, password], (err, result) => {
    if (err) return res.send({ message: "query garda error aayo", err });
    return res.send({ message: "Data inserted successfully", result });
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const q = `UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?`;
  db.query(q, [name, email, password, id], (err, result) => {
    if (err) return res.send({ message: "query garda error aayo", err });
    return res.send({ message: "Data updated successfully", result });
  });
};
