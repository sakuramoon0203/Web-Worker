var intArray=new Array(100);
var intStr="";
for (var i=0;i<100;i++){
	intArray[i]=parseInt(Math.random()*100);
	if(i!=0){
		intStr+=";";
	}
	intStr+=intArray[i];
}

var worker=new Worker("script.js");
worker.postMessage(intStr);
worker.onmessage=function(event){
	if(event.data!=""){
		var j,k,tr,td,intArray=event.data.split(";"),table=document.getElementById("table");
		for(var i=0;i<intArray.length;i++){
			j=parseInt(i/10,0);
			k=i%10;
			if(k==0){
				tr=document.createElement("tr");
				tr.id="tr"+j;
				table.appendChild(tr);
			}else{
				tr=document.getElementById("tr"+j);
			}
			td=document.createElement("td");
			tr.appendChild(td);
			td.innerHTML=intArray[j*10+k];
			td.style.backgroundColor="blue";
			td.style.color="white";
			td.width="30";
		}
	}
}