var fs = require('fs')

fs.readFile('calc.js','utf8',function(err,value){
    console.log(value);
})

fs.writeFile('calc1.js','Console.log("Hello");',function(err){
    console.log("Added");
})

fs.appendFile('calc.js','Console.log("Hello there");',function(err){
    console.log("appended");
})

fs.unlink('sample.js',function(err){
    console.log('Deleted successfully');
})