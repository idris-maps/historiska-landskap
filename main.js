var EventEmitter = require('events').EventEmitter
var evt = new EventEmitter()
var dispatch = require('./lib/dispatch')
var Timeline = require('./lib/Timeline')

window.onload = function() {
	var tl = new Timeline(evt)
	var o = {
		evt: evt,
		timeline: tl
	}
	window.o = o
	dispatch(o)

	evt.emit('resize')
}

window.onresize = function() {
	evt.emit('resize')
}
