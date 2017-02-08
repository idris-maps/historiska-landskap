var resize = require('./resize')
var swipe = require('./swipe')
var getIdsByYear = require('./get-ids-by-year')

module.exports = function(o) {
	console.log('INIT dispatch')
	o.map.color(getIdsByYear(0))
	swipe(o)

	var p = 0

	o.evt.on('resize', function() { resize() })
	o.evt.on('timeline-move', function(period) {
		if(p !== period) {
			o.map.color(getIdsByYear(period))
			p = period
		}
	})
}
