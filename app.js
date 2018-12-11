const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 8080;

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
	// response.send('<h1>Hello Express!</h1>');
	response.render('main.hbs')
});

app.get('/info', (request, response) => {
	response.render('about.hbs')
});


app.get('/404', (request, response) => {
	response.send({
		error: 'Page not found'
	})
})

app.listen(port, () => {
	console.log(`Server is up on the ${port}`);
});