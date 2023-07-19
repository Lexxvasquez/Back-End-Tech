const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include:[Product]}).then(data => {
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = req.params.id
  Category.findByPk(id,{include:[Product]})
  .then((categoryData)=>res.status(200).send(categoryData))
  .catch(()=>res.status(404).end())
});

router.post('/', (req, res) => {
  // create a new category
  Category.findProduct({include:[Product]}).then(data) => {
    res.json(data)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
