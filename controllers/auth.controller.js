const { response } = require("express");

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  console.log("Body new user: ", name, email, password);
  return res.json({
    message: "create user /new",
    status: "ok",
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  console.log("body login: ", email, password);
  return res.json({
    message: "login user /",
    status: "ok",
  });
};

const renewToken = (req, res) => {
  return res.json({
    message: "renew token /renew",
    status: "ok",
  });
};

module.exports = {
  createUser,
  login,
  renewToken,
};
