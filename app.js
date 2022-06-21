//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

let items = ["Buy Food", "Cook Food","Eat Food"];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.set('view engine', 'ejs');

// redirect to the home route in app.get   
app.post('/', function(req,res){
    item = req.body.todoItem;

    items.push(item);

    res.redirect('/');

});


app.get("/", function(req, res){
  
    let today = new Date();
    let currentDay = today.getDay();

    const options = { weekday: 'long', day: 'numeric', month: 'short',};

    let day = today.toLocaleDateString('en-us',options);

    
    res.render('list', {kindOfDay:day, newListItems:items})
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
