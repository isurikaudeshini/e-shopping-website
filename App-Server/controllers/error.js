exports.get404 = (req, res, next) => {
    console.log('request.path', req.path);
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404'});
  }