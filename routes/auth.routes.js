const { Router } = require("express");
const {
  createUser,
  login,
  renewToken,
} = require("../controllers/auth.controller");
const router = Router();

/**
 * create new user
 */
router.post("/new", createUser);
/**
 * login user
 */
router.post("/", login);
/**
 * validate token
 */
router.get("/renew", renewToken);

module.exports = router;
