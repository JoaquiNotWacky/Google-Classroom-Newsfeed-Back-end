const auth          = require('../authenticate.js');
const url           = auth.url;
const classroom     = auth.classroom;
const oauth2Client  = auth.oauth2Client;


exports.getUrl = (req, res) => {
    res.send(url);
}

//Get the users token and sets it into the oauth2Client credentials
exports.getToken = (req, res) => {
    data = req.body.data.code;
    oauth2Client.getToken(data, function (err, tokens) {
        // Now tokens contains an access_token and an optional refresh_token. Save them.
        if (!err) {
            oauth2Client.credentials = tokens;
        }
    });
}

//Getting of active courses
exports.getCourses = (req, res) => {
    classroom.courses.list({
        auth: oauth2Client,
        courseStates: 'ACTIVE',
    }, function(err, result){
        res.send(result);
        console.log(result)
    })
}

//Get the announcements of a given course
exports.getAnnouncements = (req, res) => {
  classroom.courses.announcements.list({
      auth: oauth2Client,
      courseId: '7003708466',
  }, function(err, result){
      res.send(result);
      console.log(result)
  })
}
