var worker2;
function window_onload(){
	worker2=new SharedWorker('test.js');
	var div=document.getElementById('div1');
	worker2.port.addEventListener('message',function(e){
		document.getElementById('text').value=e.data;
	},false);
	worker2.port.start();
}
function sendData(){
	worker2.port.postMessage(document.getElementById('text').value);
}
function getData(){
	worker2.port.postMessage('get');
}