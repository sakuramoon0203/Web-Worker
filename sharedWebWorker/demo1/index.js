function window_onload(){
	var worker = new SharedWorker('test.js');
	var div = document.getElementById("div1");
	worker.port.onmessage = function(e){
		div.innerHTML=e.data;
	}
}