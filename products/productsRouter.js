const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();
const Products = require("../products/productsModel");

router.get("/", (req, res) => {
  Products.find(req.query)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get products" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Products.findById(id)
    .then((products) => {
      if (products) {
        res.json(products);
      } else {
        res
          .status(404)
          .json({ message: "Could not find products with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Products" });
    });
});

router.post("/", (req, res) => {
  if (req.body) {
    Products.addProduct(req.body)
      .then((product) => res.status(201).json(product))
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Could not add new product" });
      });
  } else {
    res.status(400).json({ message: "Product name required" });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Products.update(changes, id)
    .then((products) => {
      if (products) {
        res.status(201).json({ message: "Product updated" });
      } else {
        res
          .status(404)
          .json({ message: "Could not find products with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update products" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Products.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find products with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete products" });
    });
});

// function validProduct(req, res, next) {
// 	if (req.body && Object.keys(req.body).length > 0) {
// 		next();
// 	}
// 	if (!req.body) {
// 		next({ code: 400, message: 'Information is Missing' });
// 	}
// 	if (!req.body.text) {
// 		next({ code: 400, message: 'Oops! Cannot leave that blank!' });
// 	}
// }

module.exports = router;
