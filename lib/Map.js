module.exports = function(evt) {
	var o = this
	console.log('INIT map')
	o.elements = getElements()
	o.color = function(c) {
		for(k in o.elements) { 
			o.elements[k].setAttribute('fill', '#d9d9d9') 
			o.elements[k].setAttribute('stroke', 'none') 
		}
		c.curr.forEach(function(id) {
			o.elements[id].setAttribute('fill', '#f7fcb9')
			o.elements[id].setAttribute('stroke', '#252525')
		})
		c.gain.forEach(function(id) {
			o.elements[id].setAttribute('fill', '#41ab5d')
			o.elements[id].setAttribute('stroke', '#252525')
		})
		c.loss.forEach(function(id) {
			o.elements[id].setAttribute('fill', '#fc4e2a')
			o.elements[id].setAttribute('stroke', '#252525')
		})
		
	}
}

function getElements() {
	var parts = document.getElementsByClassName('part')
	var r = {}
	for(i=0;i<parts.length;i++) {
		var el = parts[i]
		var id = el.id.split('-')[1]
		r[id] = el
	}
	return r
}
