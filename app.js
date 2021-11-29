const express = require('express');
const {engine} = require('express-handlebars');
const app = express();


app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.end('plz send the name in query string in /portfoliopage ex. "?name=jacob" to see the porfoliopage');

})

const portfolioPage = (req,res)=>{
    const name = req.query
    
    res.render('home',{name:name});

    
}

app.get('/portfoliopage',portfolioPage);


app.listen(9000,()=>{
    console.log('server is running on localhost:9000');
})