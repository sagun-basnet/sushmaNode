export const getUser = (req, res) => {
  res.send("Hello, this is the data you requested!");
};

export const postData = (req, res) => {
  console.log(req);

  const { email, password } = req.body;
  res.send({ email, password });
};
