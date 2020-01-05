// import fetch from 'isomorphic-unfetch'
const request = require('request')

export default async (req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Content-Type': 'application/json'
  })
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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
      },
    }, (error, r, body) => {
      if (!error) {
        // res.send(body)
        res.end(body)
      } else {
        res.json({ error })
      }
    })
  } else {
    res.end()
  }
}
