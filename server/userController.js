const axios = require('axios');

module.exports = {

authentication: (req,res) => {
    axios.post(`/https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        code: req.query.code,
        grant_type: 'authorization_code',
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        redirect_uri: `http://${req.headers.host}/auth/callback`,

    }).then(accessTokenResponse => {
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`)
    }).then(userInfoResponse => {
        const userData = {
            name: userInfoResponse.data.name,
            picture: userInfoResponse.data.picture,
            email: userInfoResponse.data.email
        };
        req.session.user = userData;
        res.redirect('/api/profile')
    })

},

profile: (req,res) => {


},

logout: (req,res) => {


},


};