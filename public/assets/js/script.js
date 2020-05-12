// For working of buttons

$(function() {
	$(".eatBurger").on("click", function(event) {
		let id = $(this).data("id");

		// Send the PUT request.
		$.ajax("/burgers/" + id, {
			type: "PUT"
		}).then(function() {
			// Reload the page to get the updated list
			location.reload();
		});
	});
	
	$(".create-form").on("submit", function(event) {
		// Make sure to preventDefault on a submit event.
		let newBurger = {
			name: $("#inputBurger")
				.val()
				.trim()
		};

		// Send the POST request.
		$.ajax("/burgers/create", {
			type: "POST",
			data: newBurger
		}).then(function() {
			location.reload();
		});
	});
});