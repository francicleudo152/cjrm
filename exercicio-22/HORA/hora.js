


function changeTime() {
	var hour = moment().format("HH");
	var minute = moment().format("mm");
	var second = moment().format("ss");

	document.getElementById("hour-1").setAttribute("class","num-"+hour.substr(0,1));
	document.getElementById("hour-2").setAttribute("class","num-"+hour.substr(1,1));
	document.getElementById("minute-1").setAttribute("class","num-"+minute.substr(0,1));
	document.getElementById("minute-2").setAttribute("class","num-"+minute.substr(1,1));
	document.getElementById("second-1").setAttribute("class","num-"+second.substr(0,1));
	document.getElementById("second-2").setAttribute("class","num-"+second.substr(1,1));

	setTimeout(changeTime, 1000);
}

changeTime();