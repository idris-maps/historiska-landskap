var EventEmitter = require('events').EventEmitter
var evt = new EventEmitter()
var dispatch = require('./lib/dispatch')

window.onload = function() {
	dispatch(evt)
	evt.emit('resize')
}

window.onresize = function() {
	evt.emit('resize')
}
