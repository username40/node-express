const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const { create } = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

console.log('is ok');
console.log('is ok');
console.log('is ok');

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.set('views', 'views')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.status(200)
  res.render('about')
})

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
})