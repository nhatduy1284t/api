const Photo = require('../models/Photo');

class PhotoController {
  // [GET] /photos
  index(req, res, next) {
    Photo.find({}, function (err, docs) {
      res.json({'photos':docs});
    })
  }

  getPhoto(req,res,next) {
    res.status(200).json({});
  }
}

module.exports = new PhotoController();
