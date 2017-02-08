var fs = require('fs')
var html = require('./make/make-html')

var htmlConfig = {
	keywords: 'Sverige, historia, landskap, krig, landvinningar, landförluster, karta, map, interactive',
	description: 'Sveriges historiska landskap - interaktiv karta',
	title: 'Sveriges historiska landskap',
	style: ['style.css'],
	script: ['script.min.js']
}

html(htmlConfig, function(page) {
	fs.writeFile('public/index.html', page, 'utf-8', function() { console.log('wrote public/index.html') })
})
