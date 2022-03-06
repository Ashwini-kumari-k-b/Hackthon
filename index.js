const searchBtn = document.querySelector('.search-btn');
const inputBar = document.querySelector('.input-bar');
var country = document.querySelector('.country_id');
var probchar = document.querySelector('.probability');


searchBtn.addEventListener('click', function(country){
	fetch(`https://api.nationalize.io?name=${inputBar.value}`)
	.then(response => response.json())
	.then(data => {
	    
        var countryvalue = data['country'][0] ['country_id'];
		var probabilityvalue = data['country'][0]['probability'];
		var countryvalue1 = data['country'][1] ['country_id'];
		var probabilityvalue1 = data['country'][1]['probability'];
        
		document.getElementById("cun").innerHTML = countryvalue;
		document.getElementById("pro").innerHTML = probabilityvalue;
		document.getElementById("cun1").innerHTML = countryvalue1;
		document.getElementById("pro1").innerHTML = probabilityvalue1;
		
	})
	
 .catch(err => alert("Kindly provide the name which is having probablity of 2 or more or provided name contains number or special character"));
})

