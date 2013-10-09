function ikkeFerdig(sidenavn)
{
	document.getElementById("maintext")
	.innerHTML="<br>Beklager, den "+(sidenavn)+"e siden er ikke ferdig";
}

function progLang(pLang)
{
	
	if (pLang)
	{
	document.getElementById("maintext")
	.innerHTML="<br>Du har selektert programmeringspråket "+(pLang);
	}
	//Hvis de har valgt blankt (sannsynligvis etter å allerede ha valgt f.eks BASIC)
	//Vil siden bli lastet inn på nytt igjen, altså samme effekten som å klikke på
	//home-knappen og få tilbake den original teksten.
	else
	{
	window.open('Proglangs.html','_parent');
	}
}