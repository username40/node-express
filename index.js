const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const { create } = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.set('views', 'views')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Главная',
    isHome: true
  })
})

app.get('/add', (req, res) => {
  res.status(200)
  res.render('add', {
    title: 'Добавить курс',
    isAdd: true
  })
})

app.get('/courses', (req, res) => {
  res.status(200)
  res.render('courses', {
    title: 'Курсы',
    isCourses: true
  })
})

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
})