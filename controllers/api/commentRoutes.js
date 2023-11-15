const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//api/comments
router.get("/", (req, res) => {
    Comment.findAll({})
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});
  
module.exports = router;
