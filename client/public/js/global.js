
// These get run when any page moves to another.
function goToLocation(location) {
	window.location = location; //change to page passed.
}
window.onload = function() {
	//Attach click event to the text element
	const clickTarget = document.getElementById('back')
	if (clickTarget) {
		clickTarget.style.cursor = 'pointer';
		clickTarget.addEventListener('click', () =>{
			goToLocation('/');
		})
	}
}