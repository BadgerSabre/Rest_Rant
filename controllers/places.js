const router = require('express').Router()
const places = require('../models/places')

// GET /places
router.get('/', (req, res) => {     
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    } 
    else if(!places[id]) {
      res.render('error404')
    } 
    else {
      res.render('places/show', { place: places[id], id })
    }
})

// POST /places
router.post('/', (req, res) => {
  console.log(req.body)
  if(!req.body.pic) {
    req.body.pic = 'https://media-cdn.tripadvisor.com/media/photo-s/1c/2f/33/2d/healthy-bowl-frische.jpg'
  }
  if(!req.body.city) {
    req.body.city = 'Anytown'
  }
  if(!req.body.city) {
    req.body.city = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// Delete Place
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


module.exports = router