var resize = require('./resize')
var swipe = require('./swipe')


module.exports = function(o) {
	console.log('INIT dispatch')
	var p = 0

	swipe(o)
	
	o.evt.on('resize', function() { resize() })
	o.evt.on('timeline-move', function(period) {
		if(p !== period) {
			console.log('EVENT timeline-move', period)
			p = period
		}
	})
}
