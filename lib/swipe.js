var Hammer = require('hammerjs')

module.exports = function(o) {
	console.log('INIT swipe')

	var m = null
	var hammertime = new Hammer(document.getElementById('div-timeline'), {})

	hammertime.on('panstart', function(e) {
		m = e.center.x
	})
	hammertime.on('pan', function(ev) {
			var mov = m - ev.center.x
			if(mov !== 0) { o.timeline.moveX(mov)  }
			m = ev.center.x
	})

}
