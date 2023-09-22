const selects = document.querySelectorAll('.select-js');

selects.forEach(select => {
	new Choices(select, {
		searchEnabled: false, 
		allowHTML: true,
			searchEnabled: false,
			placeholder: true,
			itemSelectText: '',
			dropUp: false
	})
})

//Slider

function sliderInit() {
	document.getElementById("slipper1").addEventListener("click", function() {
		document.getElementById("slipper-display1").style.display = "block";
		document.getElementById("slipper-display3").style.display = "none";
		document.getElementById("slipper-display4").style.display = "none";
		document.getElementById("slipper-display2").style.display = "none";
	});

	document.getElementById("slipper2").addEventListener("click", function() {
		document.getElementById("slipper-display2").style.display ="block";
		document.getElementById("slipper-display1").style.display ="none";
		document.getElementById("slipper-display3").style.display ="none";
		document.getElementById("slipper-display4").style.display ="none";
	
	});

	document.getElementById("slipper3").addEventListener("click", function() {
		document.getElementById("slipper-display3").style.display ="block";
		document.getElementById("slipper-display1").style.display ="none";
		document.getElementById("slipper-display4").style.display ="none";
		document.getElementById("slipper-display2").style.display ="none";
	});

	document.getElementById("slipper4").addEventListener("click", function() {
		document.getElementById("slipper-display4").style.display ="block";
		document.getElementById("slipper-display1").style.display ="none";
		document.getElementById("slipper-display3").style.display ="none";
		document.getElementById("slipper-display2").style.display ="none";
	});
}
sliderInit();

// Timer

function timerRun() {

	const timerElement = document.querySelector('.hero__timer');

	function startTimer(duration) {

		let timer = duration;

		let hours, minutes, seconds;

		const countdown = setInterval(() => {

			hours = parseInt(timer / 3600, 10);

			minutes = parseInt((timer % 3600) / 60, 10);

			seconds = parseInt(timer % 60, 10);


			hours = hours < 10 ? "0" + hours : hours;

			minutes = minutes < 10 ? "0" + minutes : minutes;

			seconds = seconds < 10 ? "0" + seconds : seconds;

			timerElement.textContent = hours + ":" + minutes + ":" + seconds;

			if (--timer < 0) {

				clearInterval(countdown);
				startTimer(duration);
			}
		}, 1000);
	}


	if (timerElement) {
		const timerValue = timerElement.getAttribute('data-timer');

		const [hours, minutes, seconds] = timerValue.split(':');

		const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

		startTimer(totalSeconds);
	}
}

timerRun();
