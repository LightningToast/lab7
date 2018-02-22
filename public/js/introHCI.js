'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	ga('create', 'UA-114648191-1', 'auto');
	console.log("Init");
	$(".likeBtn").click(function(e) {
		console.log("CLICK");
		ga('send', 'event', 'like', 'click');
	});
}
