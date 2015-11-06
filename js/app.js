$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		reset();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		reset();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();
		reset();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{"left": "1020px"},
			500,
			function() {
				$(this).hide();
				$(this).css("left", "520px");
			}
		);
	})
	.mouseup(function() {
		reset();
		$(".ryu-ready").show();
		// ryu goes back to his ready position
	})

	$("body").keydown(function(event) {
		if(event.which == 88) {			
			reset();
			$(".ryu-cool").show();
		}
	})
	$("body").keyup(function(event) {
		if(event.which == 88) {
			reset();
			$(".ryu-still").show();
		}
	});
});

function playHadouken() {
	$("#hadouken-sound")[0].volume=0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}

function reset() {
	$(".ryu-still").hide();
	$(".ryu-ready").hide();
	$(".ryu-cool").hide();
	$(".ryu-throwing").hide();
}