const http = require("http");
const fsPromises = require("fs/promises");
const fs = require("fs");
const url = require("url");


const dataText = fs.readFileSync(`${__dirname}/data.json`);
const data = JSON.parse(dataText);

console.log(__dirname);

const app = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  const {query, pathname} = url.parse(req.url,true);
  console.log(query);
  switch (pathname) {
    case "/": {
      const bf = await fsPromises.readFile(`${__dirname}/pages/homepage.html`);
      res.end(bf);
      break;
    }
    case "/products": {
      const bf = await fsPromises.readFile(`${__dirname}/pages/landingPage.html`);
      let text = bf.toString();

      let productText = "";
      for (let i = 0; i < data.length; i++) {

        productText += `<div class"product-card"> <h3>${data[i].title}</h3><img src="${data[i].thumbnail}" alt='product-image'><p>${data[i].description}</p>
        <a href="/view?id=${data[i].id}" target="_blank">more</a>
        </div>`;}

      text = text.replace(
        "$PRODUCTS$",productText);
      res.end(text);
      break;
    }
    case "/view": {

        const product = data.find((elem)=>{
            if(elem.id==query.id)return true;else return false;
        })

        let outcome = `<div><h2>This is product id =${product.id}</h2><h3>${product.title}</h3><img src="${product.thumbnail}" alt='product-image'><p>${product.description}</p></div>`;

        text = text.replace("$PRODUCTS$",outcome);
        
        res.end(text);
        break;
      }
    default: {
      res.end("<h2>Oops! Page is not found </h2>");
    }
  }
});
// http://localhost:2703
app.listen(2703, () => {
  console.log("---Server Started-----");
});
