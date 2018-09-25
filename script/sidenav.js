var isOPEN = false;

function openNav() {
    
	if(!isOPEN){
		isOPEN = true
		document.getElementById("mySidenav").style.width = "420px";
		greyCards()
	}else{
		closeNav()
	}
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	isOPEN = false
}

