// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end( 
      '<h1>Home Page</h1>' +
      '<h2>Sup dude</h2>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">'
    )
  } else if (request.url === '/random-joke') {
    response.end(
      '<h1>Random Joke</h1>' +
      randomJoke() +
      "<a href='/'>Back to home</a>"
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      "<a href='/'>Back to home</a>" +
      '<p><img src="https://i.imgur.com/MQHYB.jpg" alt="Super cute cat"></p>'
    )
  } 
  else {
    response.end(
      '<h1>Error 404: ' + request.url + ' not found</h1>' +
      '<p>Son of Anton\'s machine learning algorithm must have deleted the page. It\'s still learning. We\'ll get to fixing that eventually</p>' +
      "<a href='/'>Back to home</a>"
    )
  }
})

// Listen on port 8080, so that we can reach he app at localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')

var randomJoke = function () {
  var html = '<p>'
  var random = Math.floor((Math.random() * 3))

  if (random === 0) {
    html += 'Knock knock' +
            '<p>Who\'s there?</p>' +
            '<p>Suck.</p>' +
            '<p>Suck who?</p>' +
            '<p>Sucks to be you!</p>'
  } else if (random === 1) {
    html += 'Knock knock' +
            '<p>Who\'s there?</p>' +
            '<p>Tank</p>' +
            '<p>Tank who?</p>' +
            '<p>You\'re welcome</p>'
  } else {
    html += 'Knock knock' +
            '<p>Who\'s there?</p>' +
            '<p>Beats.</p>' +
            '<p>Beats who?</p>' +
            '<p>Beats me.</p>'
  }

  html += '</p>'
  return html
}
