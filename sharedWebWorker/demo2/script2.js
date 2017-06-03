var worker;
function window_onload(){
	worker=new SharedWorker('test.js');
	var div=document.getElementById('div1');
	worker.port.addEventListener('message',function(e){
		div.innerHTML=e.data;
	},false);
	worker.port.start();
	worker.port.postMessage(2);
}