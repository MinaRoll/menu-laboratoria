
var menu = Array.from(document.getElementsByClassName("link"));
document.getElementById("menuTitulo").addEventListener("click", function(){
	
	menu.forEach(function(item){
		item.classList.toggle("mostrar");
		item.classList.toggle("hiden");
	});
});