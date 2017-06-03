onmessage=function(event){
	var intArray=new Array(100);
	for (var i=0;i<100;i++){
		intArray[i]=parseInt(Math.random()*100);
	}
	var worker=new Worker("worker2.js");
	worker.postMessage(JSON.stringify(intArray));
	worker.onmessage=function(event){
			postMessage(event.data);
	}
}