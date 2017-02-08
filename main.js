var EventEmitter = require('events').EventEmitter
var evt = new EventEmitter()
var dispatch = require('./lib/dispatch')
var Timeline = require('./lib/Timeline')
var Map = require('./lib/Map')

window.onload = function() {
	var tl = new Timeline(evt)
	var m = new Map(evt)
	var o = {
		evt: evt,
		timeline: tl,
		map: m
	}
	window.o = o
	console.log(o)
	dispatch(o)

	evt.emit('resize')
}

window.onresize = function() {
	evt.emit('resize')
}
