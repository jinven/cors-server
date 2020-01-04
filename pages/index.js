import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import fetch from 'isomorphic-unfetch'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
  </div>
)

Home.getInitialProps = async (context) => {
  console.log('index.js - method', context.req.method)
  if(context.req.method === 'POST' && context.query && context.query.data){
    const url = 'https://github.com/login/oauth/access_token'
    const options = {
      body: context.query.data,
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'gh-oauth-server',
      },
      method: 'POST',
      mode: 'cors'
    }
    console.log('index.js - options', options)
    const response = await fetch(url, options)
    const json = await response.json()
    console.log('index.js - res', json)
    return { starts: json.stargazers_count }
  }
  return {  }
}
export default Home
