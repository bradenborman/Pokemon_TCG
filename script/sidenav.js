var isOPEN = false;

function openNav() {
    
	if(!isOPEN){
		isOPEN = true
		document.getElementById("mySidenav").style.width = "400px";
	}else{
		closeNav()
	}
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	isOPEN = false
}

