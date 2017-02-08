var fs = require('fs')
var map = fs.readFileSync('./svg/map.svg', 'utf-8')
var tl = fs.readFileSync('./svg/timeline.svg', 'utf-8')

function html(o) { 
	var str = '<!doctype html><html>'
	+ '<head><meta charset="utf-8">'
	+ '<meta name="viewport" content="width=device-width, initial-scale=1"/>'
	+ '<meta name="keywords" content="' + o.keywords + '"/>'
	+ '<meta name="description" content="' + o.description + '"/>'
	+ '<title>' + o.title + '</title>'

	o.style.forEach(function(s) {
		str = str 	+ '<link rel="stylesheet" href="' + s + '">'
	})

	str = str + '</head><body><div id="container">'
	+ o.body
	+ '</div>'

	o.script.forEach(function(s) {
		str = str + '<script src="' + s + '"></script>'
	})

	str = str + '</body></html>'

	return str
}

module.exports = function(o, callback) {
	o.body = '<div id="div-map">' + map + '</div>'
	+ '<div id="div-timeline">' + tl + '</div>'
	var page = html(o)
	callback(page)
}
