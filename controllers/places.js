const router = require('express').Router()
const places = require('../models/places')

// GET /places
router.get('/', (req, res) => {     
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
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

module.exports = router