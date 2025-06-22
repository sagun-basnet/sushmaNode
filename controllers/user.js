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
