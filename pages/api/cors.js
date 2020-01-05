// import fetch from 'isomorphic-unfetch'
const request = require('request')

export default async (req, res) => {
  if (req.method === 'POST' && req.body) {
    const url = 'https://github.com/login/oauth/access_token'
    // const options = {
    //   body: req.query.data,
    //   cache: 'no-cache',
    //   headers: {
    //     'Accept': 'application/json',
    //     'User-Agent': 'gh-oauth-server',
    //   },
    //   method: 'POST',
    //   mode: 'cors'
    // }
    // const response = await fetch(url, options)
    // const json = await response.json()
    // res.json({  })

    request.post({
      url: url,
      form: req.body,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'gh-oauth-server',
      },
    }, (error, r, body) => {
      if (!error) {
        // res.send(body)
        res.writeHead(200, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          'Content-Type': 'application/json'
        }).end(body)
      } else {
        res.json({ error })
      }
    })
  } else {
    res.json({ error: 'error' })
  }
}
