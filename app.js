//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

let items = [];

app.use(bodyParser.urlencoded({extended:true}));


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

    // switch (currentDay) {
    //     case 0:
    //       day = "Sunday";
    //       break;
    //     case 1:
    //       day = "Monday";
    //       break;
    //     case 2:
    //        day = "Tuesday";
    //       break;
    //     case 3:
    //       day = "Wednesday";
    //       break;
    //     case 4:
    //       day = "Thursday";
    //       break;
    //     case 5:
    //       day = "Friday";
    //       break;
    //     case 6:
    //       day = "Saturday";
    //   }

   


    
    res.render('list', {kindOfDay:day, newListItems:items})
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
