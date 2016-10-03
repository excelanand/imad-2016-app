var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
    'Article-one' : {
        title: "Article One ! - HAHAHAHA",
        heading: "ARTICLE ONE",
        date: "25 Sep, 2016",
        content:
            `<p>
                HELLO GUYS, WELCOME TO ARTICLE ONE
            </p>`
    },
    'Article-two' : {
        title: "Article Two ! - LOLOLOL",
        heading: "ARTICLE TWO",
        date: "25 Sep, 2016",
        content:
            `<p>
                HELLO GUYS, WELCOME TO ARTICLE TWO
            </p>`
    },
    'Article-three' : {
        title: "Article THREE ! - END",
        heading: "ARTICLE THREE",
        date: "25 Sep, 2016",
        content:
            `<p>
                HELLO GUYS, WELCOME TO ARTICLE THREE
            </p>`
    },
};

function createCommon (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

                                var Common = 
                                                `<html>
                                                    <head>
                                                        <title>
                                                            ${title}
                                                        </title>
                                                        <meta name = "viewport" content="width=device-width, initail-scale=1"/>
                                                        <link href="/ui/style.css" rel="stylesheet" />
                                                    </head>
                                                    <body>
                                                        <div class="container">
                                                            <div>
                                                                <a href = "/">Home</a>
                                                            </div>
                                                            <hr/>
                                                            <h3>
                                                                ${heading}
                                                            </h3>
                                                            <div>
                                                                ${date}
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    ${content}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </body>
                                                </html>`;
                                                return Common;
                            }

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;    
  res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:Articlename', function (req, res) {
    var Articlename = req.params.Articlename;
  res.send(createCommon(Articles[Articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names = [];
app.get('/submit', function (req, res) {
  var name = req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
