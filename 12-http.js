const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.end('Welcome to my web page');
    }
    if (req.url === '/about')
    {
        res.end('Ricardo Rosário the developer of the website');
    }
    res.end(`
            <h1>OPPS</h1>
            <p>The page that you're looking for seemed not exist.<br>Try the link bellow</p>
            <a href="/">Homepage</a>
    `);
})

server.listen(5000);