var worker1;
function window_onload(){
	worker1=new SharedWorker('test.js');
	var div=document.getElementById('div1');
	worker1.port.addEventListener('message',function(e){
		document.getElementById('text').value=e.data;
	},false);
	worker1.port.start();
}
function sendData(){
	worker1.port.postMessage(document.getElementById('text').value);
}
function getData(){
	worker1.port.postMessage('get');
}