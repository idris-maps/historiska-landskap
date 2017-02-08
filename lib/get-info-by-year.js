var data = require('../data/wars.json')

module.exports = function(year) {
	var r = null
	data.forEach(function(d) {
		if(d.peace.year === year) { r = d }
	})
	return r
}
