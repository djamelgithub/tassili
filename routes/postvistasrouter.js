const router = require('express').Router()
const postvistasCtrl = require('../controllers/postvistasCtrl')
//const postvistasCtrl = require('../controllers/postvistasCtrl')
const auth = require('../middleware/auth')
 
//router.put('/post/vistas/:id', auth, postCtrl.getVistas);
 
router.put('/post/:id', auth, postvistasCtrl.Vistas)

 
 

module.exports = router