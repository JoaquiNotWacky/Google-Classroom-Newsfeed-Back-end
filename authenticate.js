'use strict'

const google        = require('googleapis');
const OAuth2        = google.auth.OAuth2;

exports.classroom = google.classroom('v1');

const oAuth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "http://localhost:3000/Home"        //Redirect URL
);

exports.oauth2Client = oAuth2Client;

const scopes = [
    'https://www.googleapis.com/auth/classroom.courses.readonly',
    'https://www.googleapis.com/auth/classroom.announcements.readonly'
];

exports.url = oAuth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'online',
    // If you only need one scope you can pass it as a string
    scope: scopes,
});
