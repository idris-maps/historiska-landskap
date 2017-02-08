var fs = require('fs')
var html = require('./make/make-html')

var htmlConfig = {
	keywords: '',
	description: '',
	title: '',
	style: ['style.css'],
	script: ['script.js']
}

html(htmlConfig, function(page) {
	fs.writeFile('public/index.html', page, 'utf-8', function() { console.log('wrote public/index.html') })
})
