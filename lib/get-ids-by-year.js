var data = require('../data/years.json')

module.exports = function(y) {
	var r = null
	data.forEach(function(d) {
		if(d.y === y) { r = { curr: d.ids, gain: d.gain, loss: d.loss } }
	})
	return r
}
