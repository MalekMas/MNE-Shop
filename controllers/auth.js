const users = require("../models/users");
exports.postLogin = (req, res, next) => {
  users
    .find({
      name: req.body.username,
      password: req.body.password,
    })
    .then((user) => {
      if (user.length != 0) {
        req.session.isAuthenticated = true;
        req.session.save(() => {
          return res.redirect("/");
        });

      } else
        return res.render("auth/login", {
          PageTitle: "Login",
          invalid: true,
        });
    });
};
exports.getLogin = (req, res, next) => {
  return res.render("auth/login", {
    PageTitle: "Login",
    isAuthenticated: req.session.isAuthenticated,
    invalid: false,
  });
};
exports.getLogout = (req, res, next) => {
  req.session.destroy();
  return res.redirect("/");
};
