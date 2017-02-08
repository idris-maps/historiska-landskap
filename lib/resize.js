module.exports = function() {
	var tlH = 200
	var winH = window.innerHeight
	var winW = window.innerWidth

	var divMap = document.getElementById('div-map')
	var divTl = document.getElementById('div-timeline')
	var svgTl = document.getElementById('svg-timeline')

	if(winH > winW) {
		var w = winW
	} else {
		var w = winH - tlH
	}

	divMap.style.width = w + 'px'
	divTl.style.width = w + 'px'
	svgTl.setAttribute('width', w)
	
}
