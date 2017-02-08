var EventEmitter = require('events').EventEmitter
var evt = new EventEmitter()
var dispatch = require('./lib/dispatch')
var Timeline = require('./lib/Timeline')
var Map = require('./lib/Map')
var buttons = require('./lib/buttons')

window.onload = function() {
	var tl = new Timeline(evt)
	var m = new Map(evt)

	var o = {
		evt: evt,
		timeline: tl,
		map: m
	}
	buttons(evt)
	dispatch(o)
	//testIcons()

	evt.emit('resize')
}

window.onresize = function() {
	evt.emit('resize')
}
/*
var icons = require('./svg/icons/icons')
function testIcons() {
	var svg = document.getElementById('svg-map')
	var g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
	g.setAttribute('transform', 'translate(100,100) scale(0.2)')
	g.innerHTML = icons.close('red', 'white')
	svg.appendChild(g)
}
*/
