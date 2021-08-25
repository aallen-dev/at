import React from 'react'

const Document = ({ App, title }) =>
    <html>
        <head>
            <meta charSet="UTF-8" />
            <title>
                {title}
            </title>
        </head>
        <body>this is my html page
            <react id="content" {...App} />
            {/* <script type="text/javascript" key="propsScript" src="/js/initialProps.js" /> */}
            <script type="text/javascript" key="vendorScript" src="/js/vendor.js" />
            <script type="text/javascript" key="bundleScript" src="/js/index.js" />
        </body>
    </html>

export { Document }