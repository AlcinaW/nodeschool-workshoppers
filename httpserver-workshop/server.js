//server: responds to requests, can send back HTML, CSS, XML, JSON, images
//client: makes requests, can be browsers, mobile apps, cmd line

//making a node server! o u o /
//server software can be written in any lang that the server can understand > JS (can be Go, PHP, Ruby)

//new http object that you can work with
var http = require('http');
//create the server, listen takes two args (port num)

//something use for reading files
var fs = require ('fs');
var request = require('request');

var server = http.createServer();

//dynamic routing, can use regex
var re = /^\/currencies\/(\w+)/;

var currencies = {
  'CAN' : 'CAD',
  'USA' : 'USD',
  'FRA' : 'EUR',
  'SPA' : 'EUR'
};

function getLiveValue(symbol, callback) {
  request.get('http://api.fixer.io/latest?base=USD', function (error, response, body){
    //need to parse the JSON into a JS object
    var rates = JSON.parse(body).rates;
    //return rates[symbol];
    //but async, need callback
    callback(rates[symbol]);
  });
}
//callback function with test message
//why this port, default?
server.listen(8080, function(){
  console.log('server is listening on 8080');
});
//what to when get a request, server is an instance of EventEmitter
//first part is type of event, second part is callback > 2 parts, response and arg
server.on('request', function (request, response) {
  //console.log(request);
  //error handlers are very common on Node
  response.on('error', function(error){
    //error handling for debugging
    console.error(error);
  });
    //use regex, send back match if there is one
    var match = request.url.match(re);

    if (match) {
       var currency = currencies[match[1].toUpperCase()];
       if (currency) {
         getLiveValue(currency, function (value) {
           var output = {
             currency: currency,
             value: value
           }
           response.setHeader('Content-Type', 'application/json');
           response.write(JSON.stringify(output), 'utf-8');
           response.end();
         })
       } else {
         response.write('Not a valid country code')
         response.end();
       }
     } else if (request.url === '/home') {
        fs.readFile('index.html', function (error, contents) {
         response.write(contents);
         response.end();
       });
     } else {
       response.write('Not found');
       response.statusCode = 404;
       response.end();
     }

     // if (request.url === '/home') {
     //   fs.readFile('index.html', function (error, contents) {
     //     response.write(contents);
     //     response.end();
     //   });
     // } else {
     //   response.write('Not found');
     //   response.statusCode = 404;
     //   response.end();
     // }

   });
    //if(match){
      //var currency = currencies[match[1].toUpperCase()];
      //if(currency) {
        //only run after request made to API
        //getLiveValue (currency, function (value){
          //match it after /currencies to object
          //going to create an output object
            //fs.readFile('index.html', 'utf-8', function(error,contents){
              //order matters, because do not want to write in before file is done
              //var string = 'The currecny for that currency is ${currency} <br>  USD = ${value} //${currency}';
              //replace the string with the contents of the variable
              //var output = contents.replace('$contents', string);
              //response.write(output, 'utf-8');
              //so many callbacks woaw
              //response.end();
              //var output = {
                //currency : currency,
                //value : value
              //}
            //   response.setHeader('Content-Type', 'application/JSON');
            //   response.write(output, 'utf-8');
            //   response.end();
            // });
        //response.write(currency);
        //response.end();
      //} else if {
        //response.write('not a valid country');
        //response.end();
      // } else {
      //   response.write('not found');
      //   response.statusCode = 404;
        //response server completed >o<!!
        // response.end();
    //}

  // if (request.url === '/home') {
  //   fs.readFile('index.html', function(error,contents){
  //     //order matters, because do not want to write in before file is done
  //     response.write(contents);
  //     response.end();
  //   });
  // } else {
  //   response.write('not found');
  //   response.statusCode = 404;
  //   response.end();
  // }
//});
//header info sent back, user agent (browser), what formats it takes, what root URL was requested
//got a response object, now send a write + end of building object, send to client
//this is the bridge between front and back-end (everything that happens on the server)
//because the server needs to be restarted every time there is a change on the server, can use the npm nodemon to auto restart
