import express from 'express';
const router = express.Router();

import recipesList from './recipes.js'

router.use('/recipes', recipesList);

export default router;