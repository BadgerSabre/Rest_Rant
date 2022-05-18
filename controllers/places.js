const router = require('express').Router()

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://thumbs.dreamstime.com/b/thai-food-417761.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://thumbs.dreamstime.com/b/espresso-coffee-cup-beans-vintage-table-90374872.jpg'
  }]

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
  res.send('POST /places')
})

module.exports = router