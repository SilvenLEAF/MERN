const router = require('express').Router();

router.get('/test', (req, res, next)=>{
  res.send('Hello SilvenLEAF')
}) 

module.exports = router;