import React, { useState } from 'react'
import Head from 'next/head'

const Home = () => {
    let [url, setUrl] = useState('')
    let apiUrl = '/api?a=' + encodeURIComponent(url)
    let isValid = false;
    if(url && url.indexOf && url.length>10){
        isValid = url.indexOf('http://') === 0 || url.indexOf('https://') === 0;
    }
    return (
        <div style={{width:500, margin: '0 auto', textAlign: 'center'}}>
            <Head>
            <title>Home</title>
            </Head>
            <h1>API下载资源</h1>
            <div>
                <p>
                    <input type="text" onInput={ev => setUrl(ev.target.value)} placeholder="输入资源url地址" style={{height: 35, width: 450, fontSize: 20, padding: '5px 10px'}} />
                </p>
                <p>
                    输入url地址，如：https://www.bing.com
                </p>
                {
                    isValid &&
                    <p>
                        <a href={apiUrl} target="_blank">跳转获取</a>
                    </p>
                }
            </div>
        </div>
    )
}

Home.getInitialProps = async (context) => {
  return {  }
}
export default Home
