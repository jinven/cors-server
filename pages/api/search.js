const request = require('request')
export default async (req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Content-Type': 'application/json'
  })
  if (req.method === 'POST' && req.body) {
    const url = 'https://www.google.com'
    request.get({
      url: url,
      headers: {
        // 'Accept': 'application/json',
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
