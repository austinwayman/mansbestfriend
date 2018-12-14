
const router = require("express").Router();
// const apiRoutes = require('./api');

router.use("/", require("./api"));

router.use("/v1", require("./v1"));
router.use(require("./forumInitial"))

module.exports = router;