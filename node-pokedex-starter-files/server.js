require('dotenv').config();
const express = require('express')
const morgan = require('morgan')
const POKEDEX = require('./pokedex.json');

const app = express()
app.use(morgan('dev'))
app.use(validateBearerToken);

function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get('Authorization');

  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({error: 'Unauthorized request'});
  }
  next();
}

function handleGetTypes(req, res) {
  let types = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychich`, `Rock`, `Steel`, `Water`];
  res.json(types);
}

app.get('/types', handleGetTypes)

function handleGetPokemon(req, res) {
  const { name, type } = req.query;
  // name = name.toLowerCase();
  let results = POKEDEX.pokemon;
  if (name) {
    results = results.filter((poke) => poke.name.toLowerCase().includes(name.toLowerCase()))
  }

  if (type) {
    results = results.filter((pokemon) => pokemon.type.includes(type))
  }
  res.json(results);
}

app.get('/pokemon', handleGetPokemon)
const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})