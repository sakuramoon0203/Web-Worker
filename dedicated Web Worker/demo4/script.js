onmessage=function(event){
	var worker=new Worker("worker1.js");
	worker.postMessage("");
	worker.onmessage=function(event){
		var data = event.data;
		worker = new Worker("worker2.js");
		worker.postMessage(data);
		worker.onmessage=function(event){
			var data = event.data;
			postMessage(data);
		}
	}
}