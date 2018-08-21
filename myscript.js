timer();  


function timer(){

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);


    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
     clearInterval(timeinterval);
	  //document.write("It has been 60 minutes!");
	var x = Math.random() * 100; 
	document.write("</br>");
	if (x > 50)
	{
		var first = prompt("Using a print statement in Java, output 'Hello world' on a new line.");

		if (first == 'System.out.println("Hello world");')
		 {
			document.write("Great Answer!");
		 }

			else 
			{
			var str = "Java Tutorials";
			var result = str.link("https://www.tutorialspoint.com/java/java_basic_syntax.htm");
			document.write("Wrong Answer!" + "</br>" + "Wondering why? Check this out: " + result);
			}
	}

	
	else
	{
		var second = prompt("Using Java, declare a variable named flex");
		
		
		if (second == 'String flex;')
		{
			document.write("Great Answer!");
		}
		
		else 
		{
			var str = "Java Tutorials";
			var result = str.link("https://www.tutorialspoint.com/java/java_basic_syntax.htm");
			document.write("Wrong Answer!" + "</br>" + "Wondering why? Check this out: " + result);
		}
	}

	
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1 * 2 * 1000);
initializeClock('clockdiv', deadline);
}





