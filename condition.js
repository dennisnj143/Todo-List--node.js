const express = require('express')
const bodyparser = require('body-parser')
const ejs = require('ejs')

const app = express();


app.listen(3000, function(req, res){
    console.log('server at 3000');
    
})

let bpar = bodyparser.urlencoded({extended:true});

app.use('/public',express.static('public'));


app.get('/contact', function(req , res){
    res.render('contact.ejs') 
})

app.post('/contact',bpar, function(req , res){
    res.render('contact-success.ejs',{name: req.body.name});
    console.log(req.body);
    
})

let data = ['Eating', 'Drinking', 'Coding'];

var today = new Date();
  var day = today.getDay();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  let tday = daylist[day];

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  let tdate = today.getDate();
  var month = today.getMonth();
  let tmonth = monthNames[month];
  let tyear = today.getFullYear();
  

app.get('/todo', function(req , res){
    res.render('todo.ejs',{data: data , Today: tday , Tdate: tdate , Tmonth: tmonth , Tyear: tyear});
    console.log(tdate);
    
    
})

app.post('/todo',bpar, function(req, res){
    let newi = req.body.newItem;
    data.push(newi);
    res.render('todo.ejs',{data: data , Today: tday , Tdate: tdate , Tmonth: tmonth , Tyear: tyear
    
    })

    console.log(newi)
})
