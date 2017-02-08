var icon = require('../svg/icons/icons')

module.exports = function(info) {
	var svg = document.getElementById('svg-map')
	clear(svg)
	if(info) {
		var g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
		g.innerHTML = box(info)
		g.setAttribute('class','infobox')
		svg.appendChild(g)
		document.getElementById('close-infobox').onclick = function() { info.evt.emit('close-infobox') }
		if(info.war) {
			document.getElementById('war-text').onclick = function() { window.open(info.war.wiki) }
		}
		document.getElementById('peace-text').onclick = function() { window.open(info.peace.wiki) }
	}
}

function clear(svg) {
	var ib = document.getElementsByClassName('infobox')
	console.log(ib)
	if(ib.length > 0) { svg.removeChild(ib[0]) }
}


function box(info) {
	var fs = 100
	var lineStart = 0
	var line = 200
	var svg = '<g font-size="' + fs + '" transform="translate(100,100)">'
		+ '<rect x="-20" y="-20" width="2320" height="2320" fill="white" opacity="0.7"></rect>'
	if(info.war) {
		svg = svg + '<text x="300" y="' + line * 1 + '" font-weight="bold">' + info.war.start + '-' + info.war.end + '</text>'
			+ '<text id="war-text" x="50" y="' + line * 2 + '">' + info.war.name + '</text>'
			+ '<g transform="translate(150, ' + line * 1 + ') scale(0.2)">' + icon.war('#fed976', '#525252') + '</g>'
			lineStart = line * 2
	}

	svg = svg + '<text x="300" y="' + (lineStart + line * 1) + '" font-weight="bold">' + info.peace.year + '</text>'
		+ '<text id="peace-text" x="50" y="' + (lineStart + line * 2) + '">' + info.peace.name + '</text>'
		+ '<g transform="translate(150, ' + (lineStart + line * 1) + ') scale(0.2)">' + icon.peace('#fed976', '#525252') + '</g>'
	lineStart = lineStart + line * 3

	info.peace.result.gain.forEach(function(n, i) {
		svg = svg + '<text x="100" y="' + (lineStart + line * ((i+1)/2)) + '" fill="#41ab5d">+ ' + n + '</text>'
	})

	info.peace.result.loss.forEach(function(n, i) {
		svg = svg + '<text x="100" y="' + (lineStart + line * ((i+1)/2)) + '" fill="#fd8d3c">- ' + n + '</text>'
	})

	svg = svg 			+ '<g id="close-infobox" transform="translate(1240, 2200) scale(0.2)">' + icon.close('#fb6a4a', 'white') + '</g>'
	return svg
}
