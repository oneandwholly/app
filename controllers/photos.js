const aws = require('../services/aws');
const Photo = require('../models/photo');
const User = require('../models/user');

exports.upload = function(req, res, next) {
  console.log('im in upload in PhotosController')
  const img_url = `https://${req.body.bucket}.s3.amazonaws.com/${req.body.key}`;
  const user_id = req.user.id;
  const caption = req.body.caption;

  const photo = new Photo({img_url, user_id, caption});
  photo.save(function(err) {
    if (err) {
      return next(err);
    }
    const resp = JSON.stringify({
      policy: req.body,
      signature: aws.signRequest(req.body)
    });

    res.writeHead(200, {
      'Content-Length': resp.length,
      'Content-Type': 'application/json; charset=utf-8'
    });
    res.end(resp);
  });
}

exports.fetchByUserId = function(req, res, next) {

      Photo.findByUserId({ uid: req.params.id }, function(err, photos) {
        if (err) { return next(err); }
        if (photos) {
          console.log('photos', photos)
          const resp = JSON.stringify(photos);
          res.writeHead(200, {
            'Content-Length': resp.length,
            'Content-Type': 'application/json; charset=utf-8'
          });
          res.end(resp);
        } else {
          const resp = JSON.stringify([]);
          res.end(resp)
        }
      });

}

exports.fetchByPhotoId = function(req, res, next) {

  Photo.findByPhotoId({ photo_id: req.params.id }, function(err, photo) {
    if (err) { return next(err); }
    if (photo) {
      console.log('photos', photo)
      const resp = JSON.stringify(photo);
      res.writeHead(200, {
        'Content-Length': resp.length,
        'Content-Type': 'application/json; charset=utf-8'
      });
      res.end(resp);
    } else {
      const resp = JSON.stringify([]);
      res.end(resp)
    }
  });

}
