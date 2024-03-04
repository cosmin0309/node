const http = require("http");
const URL = require("url");

const server = http.createServer((req, res)=>{
    const url = req.url;
    const queryParams = URL.parse(url, true).query;
    console.log('queryParams : ', queryParams);

    if(url === "/")
        {
            console.log("req:", req);
            res.setHeader("content-type", "text/html");
            res.write('<h1 style="color:green">Salut din node!</h1>');
            res.end();
        }else if(url === "/json")
        {
            res.setHeader("content-type", "application/json");
            const obj = {
                prop: "prop1",
                prop2: [1,2,3],
                propNumber: 1
            };

            res.write(JSON.stringify(obj));
            res.end();
        }

        else{
            res.setHeader("content-type", "text/html");
            res.write("<h1>Path not found</h1>");
            res.end();
        }
})
const PORT = 3000;
server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));