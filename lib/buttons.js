module.exports = function(evt) {
	var els = getElements()
	els.forEach(function(el) {
		var y = +el.id.split('-')[1]
		el.addEventListener('click', function() {
			evt.emit('button-click', y)
		})
	})
	
}

function getElements() {
	var g = document.getElementById('timeline-icon')
	var childs = g.children
	var els = []
	for(i=0;i<childs.length;i++) {
		els.push(childs[i])
	}
	return els
}
