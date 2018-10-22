function check(){
	ageOfsaad = parseInt(document.querySelector("#input1").value);
	ageOfMarium = parseInt(document.querySelector("#input2").value);
	ageOfUmar = parseInt(document.querySelector("#input3").value);

if (ageOfsaad<ageOfMarium && ageOfUmar) {
	alert("saad is youngest");
}else if (ageOfMarium < ageOfUmar && ageOfsaad) {
	alert("maruim is youngest");
}else {
	alert("umar is youngest");
}
}

