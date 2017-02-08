var resize = require('./resize')

module.exports = function(evt) {

	evt.on('resize', function() { resize() })
}
