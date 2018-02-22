'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Init");
	$(".likeBtn").click(function(e) {
		console.log("CLICK");
		ga('send', 'event', 'like', 'click');
	});
}
