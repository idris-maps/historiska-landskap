module.exports = function(evt) {
	var o = this
	console.log('INIT timeline')
	o.el = document.getElementById('graph')
	o.transform = function() {
		var r = null
		for(i=0;i<o.el.attributes.length;i++) {
			if(o.el.attributes[i].name === 'transform') { r = o.el.attributes[i] }
		}
		return r
	}
	o.period = 0
	o.setX = function(n) {
		if(n < 25 && n > -2700) {
			o.transform().value = 'translate(' + n + ',0)'
		}

		if(n > -55) { o.period = 0 }
		if(n < -55) { o.period = 1561 }
		if(n < -615) { o.period = 1617 }
		if(n < -735) { o.period = 1629 }
		if(n < -895) { o.period = 1645 }
		if(n < -925) { o.period = 1648 }
		if(n < -985) { o.period = 1654 }
		if(n < -1025) { o.period = 1658 }
		if(n < -1045) { o.period = 1660 }
		if(n < -1635) { o.period = 1719 }
		if(n < -1655) { o.period = 1721 }
		if(n < -2475) { o.period = 1803 }
		if(n < -2535) { o.period = 1809 }
		if(n < -2595) { o.period = 1815 }
		evt.emit('timeline-move', o.period)

	}
	o.moveX = function(n) {
		var currX = o.transform().value.split(',')[0].split('(')[1]
		var x = +currX - n
		o.setX(x)
	}
}

