var count=0;
var images=["images/orientation/orientation.jpeg","images/orientation/orientation1.png", "images/orientation/orientation2.jpeg",
 "images/orientation/orientation3.jpeg", "images/orientation/orientation4.jpeg",
 "images/orientation/orientation5.jpeg","images/orientation/orientation6.jpeg",
 "images/orientation/orientation7.png","images/orientation/orientation8.jpeg"];
function rightClick(){
	count++;
	if(count>=images.length-1){
		count=0;
	}
	onThumbnailClick(document.getElementsByClassName("thumbnail")[count]);
}
function leftClick(){
	count--;
	if(count<=0){
		count=images.length-2;	
	}	
	onThumbnailClick(document.getElementsByClassName("thumbnail")[count]);
}
function onThumbnailClick(el){
	document.getElementById("img-default").src = el.src;  
	el.style.border = "2px solid blue";
	for(i=0; i<images.length-1; i++){
		if(el.src!=document.getElementsByClassName("thumbnail")[i].src){
			document.getElementsByClassName("thumbnail")[i].style.border = "None";
		}else{
			count = i;
		}
	}
	
}



