const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();
const Categories = require("../categories/catModel");

router.get("/", (req, res) => {
  Categories.find()
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get categories" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Categories.findById(id)
    .then((categories) => {
      if (categories) {
        res.json(categories);
      } else {
        res
          .status(404)
          .json({ message: "Could not find categories with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Categories" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Categories.findById(id)
    .then((category) => {
      if (category) {
        res.status(200).json({category})
      } else {
        res
          .status(404)
          .json({ message: "Could not find category with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Category" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Categories.update(changes, id)
    .then((categories) => {
      if (categories) {
        res.status(201).json({ message: "Category updated" });
      } else {
        res
          .status(404)
          .json({ message: "Could not find categories with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update categories" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Categories.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find categories with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete categories" });
    });
});

module.exports = router;
