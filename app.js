function clock(){
	var hours = document.getElementById('hour');
	var minute = document.getElementById('Minute');
	var secound = document.getElementById('Secound');

	var h = new Date().getHours() - 12;
	var m = new Date().getMinutes();
	var s = new Date().getSeconds();

	hours.innerText = h;
	minute.innerText = m;
	secound.innerText = s;



}


var interval = setInterval(clock , 1000)