const express = require("express");
const path = require("path");
const fs = require("fs");
const { userInfo } = require("os");
const app = express();
const port = process.env.port || 80;

// EXPRFESS SPECIFIC STUFF
app.use("/static", express.static('static'));// for serving static files
app.use(express.urlencoded());


// PUG SPECIFIC STUFF
app.set('view engine', 'pug');// set the template engine as pug
app.set('views', path.join(__dirname, 'views'));// set the views directory


// ENDPOINTS
app.get('/', (req, res) =>{
    const con = "This is one of the best survival game."
    const params = {'title': 'PUBG is the best Game', 'content' : con}
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    about = req.body.about

    let UserInformation =  `The name of clint is "${name}", age - "${age}", gender - "${gender}", address - "${address}" and more info abuot him/her - "${about}"`;
    fs.writeFileSync('userinfo.txt', UserInformation);
    const params = {'message': 'Your form is submited successfully!'};
res.status(200).render('index.pug', params);
});


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The server is started successfully on port ${port}`);
});