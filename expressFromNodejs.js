const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send("hello");
})

app.get('/tree',function(req,res){
    res.send('kavi');
})

app.get('/tree/:id',function(req,res){
    const id = req.params.id
    if (id === '20'){
        res.send('Data found for '+id);
    }
    else if (id === '21'){
        res.send('found for 21 is "p"');
    }
    else{
        res.send('Value not found for '+id);
    }
    
})

app.listen(9000,function(req,res){
    console.log('Running');
})