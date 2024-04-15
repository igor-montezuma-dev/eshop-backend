const expressJwt = require("express-jwt");
const { patch } = require("../routers/users");

function authJwt() {
  const secret = process.env.secret;
  const api = process.env.API_URL;

  return expressJwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      `${api}/users/login`,
      `${api}/users/register`,
      { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/v1\/categories(.*)/, methods: ["GET", "OPTIONS"] },
    ],
  });
}
module.exports = authJwt;
