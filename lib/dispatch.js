var resize = require('./resize')
var swipe = require('./swipe')
var getIdsByYear = require('./get-ids-by-year')
var getInfoByYear = require('./get-info-by-year')
var getInfobox = require('./get-infobox')

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
		getInfobox(false)
	})
	o.evt.on('button-click', function(year) {
		console.log('EVENT button-click', year, getInfoByYear(year))
		var info = getInfoByYear(year)
		info.evt = o.evt
		getInfobox(info)
	})
	o.evt.on('close-infobox', function() { getInfobox(false) })
}
