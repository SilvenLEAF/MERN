const router = require('express').Router();
const ytdl = require('ytdl-core');


router.get('/mp3', (req, res, next)=>{
  try {
    
    console.log(req.query);

    const youtubeUrl = req.query.youtubeUrl;
    const videoTitle = req.query.title || 'SilvenLEAF';

    res.header('Content-Disposition', `attachment; filename = ${videoTitle}.mp3`);

    ytdl( youtubeUrl, { filter: 'audioonly'}, {
      format: 'mpeg'
    }).pipe(res);    

  } catch (next) {
    next();
  }
})

router.get('/mp4', (req, res, next)=>{
  try {
    
    console.log(req.query);

    const youtubeUrl = req.query.youtubeUrl;
    const videoTitle = req.query.title || 'SilvenLEAF';

    res.header('Content-Disposition', `attachment; filename = ${videoTitle}.mp4`);

    ytdl( youtubeUrl, {
      format: 'mp4'
    }).pipe(res);    

  } catch (next) {
    next();
  }
})

module.exports = router;
