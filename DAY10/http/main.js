const http = require('http');
const fs = require('fs/promises');
const app = http.createServer(async(req, res)=>{
    // res.setHeader('Content-Type','text/plain');
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    // res.write('Welcome');
    // res.end('
    //     <html lang="en">
    //     <head>
    //         <style>
    //             body{
    //                 padding: 24px;
    //                 background: lime;
    //             }
    //         </style>
    //     </head>
    //     <body>
    //         <h1>Welcome</h1>
    //     </body>
    //     </html>
    //     ');

    
    const route = req.url;
    switch(route){
        case '/':{
            const stream = await fs.readFile('./pages/landingPage.html');
    res.end(stream);
    break;
        }
        case '/product':{
            res.end('This is product page');
            break;
        }
        default:{
            res.end('Oops! page not faund');
        }
    }

});
// http://localhost:2703
app.listen((2703),()=>{
    console.log("---Server Started-----");
});