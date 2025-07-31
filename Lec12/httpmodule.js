// HTTP SERVER
const http = require("node:http");

const blogPost = [
    {
        "blogTitle" : "THIS IS TILE OF BLOG",
        "blogDescription":"THIS IS DESCRIPTION OF BLOG",
        "authorBlog": "Pransh",
        "date":"22 July"

    }

]

const server = http.createServer((req,res)=>{
    if (req.method == "GET" && req.url == '/'){
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("DATA FETCHED RESPONSE SEND")
    }
    else if (req.method == "GET" && req.url == '/blog'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(blogPost))
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end("NOT FOUND")
    }
})

server.listen(8000,()=>{
    console.log("YOUR SERVER RUNNING ON PORT 8000")
})
