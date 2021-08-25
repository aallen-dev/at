const express = require('express')
const app = express()
const port = 3000
import React from 'react'
const ReactDOMServer = require('react-dom/server');
const print=console.log
import { App } from './app'


import {Document} from './components/util/Document'

app.get('/', (req, res) => {
    const props = {
        title: 'reactapp',
        // while the Document is treated as static markup and rendered with `renderToStaticMarkup` the app itself will be
        // reused on the client side. This requires renderToString to allow react on the client to understand its context.
        App: {
            dangerouslySetInnerHTML: {
                __html: ReactDOMServer.renderToString(<App />)
            }
        }
    }
    const doc = ReactDOMServer.renderToStaticMarkup(<Document {...props} />)
    res.send(doc)
})

app
    .use(express.static('dist'))
    // .use(`/static-assets/`, serveStatic(path.join(__dirname, `../static-assets`)))
    .listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })