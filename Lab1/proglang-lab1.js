function favBrowser()
{
var mylist=document.getElementById("myList");
document.getElementById("favorite").value=mylist.options[mylist.selectedIndex].text;
}
function ikkeferdig (sidenavn)
{
	document.getElementById("content")
	.innerHTML="<br>Beklager, men "+(sidenavn)+" sortering er under konstruksjon.";
	}