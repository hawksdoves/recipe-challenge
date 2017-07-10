import { Router } from 'express'
import bodyParser from 'body-parser';

import recipes from '../../../../dataMocks/recipes.json';
import getRecipe from '../../../../dataMocks/recipe';

const router = Router();

router.use((req, res, next) => {
  // CORS AND RESPONSE HEADERS
  res.setHeader('charset', 'utf-8');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PATCH,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.get('/recipes', (req, res) => {
  res.status(200).json(recipes);
})

router.get('/recipe/:id', (req, res) => {
  res.status(200).json(getRecipe(req.params.id));
})

export default router;