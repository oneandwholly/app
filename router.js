const Authentication = require('./controllers/authentication');
const PhotosController = require('./controllers/photos');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'super secret code is abc1234' });
  });
  app.post('/users', Authentication.signup);
  app.get('/users/:username/id', Authentication.fetchIdByUsername);
  app.get('/users/id', requireAuth, Authentication.fetchUsernameByToken);
  app.get('/users/:id/photos', PhotosController.fetchByUserId)
  app.post('/login', requireLogin, Authentication.login);
  app.post('/photos', requireAuth, PhotosController.upload);
  app.get('/photos/:id', PhotosController.fetchByPhotoId);
};
