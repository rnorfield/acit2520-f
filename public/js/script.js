function getLocation(place) {
	
	return ($.ajax({
		url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB4kW8zBJbvqhfMmpRpl5FVpp6aY8e3BjI&address=` + place,
		dataType: 'json',
		async: false,
		success: function(data) {
			return data;
		}
	})).responseJSON;
}

function getWeather(){
	var location=document.getElementById('weather').value;
	console.log(location)
	var place=getLocation(location);
	console.log(place)
	var lat=place.results[0].geometry.location.lat;
	var lng=place.results[0].geometry.location.lng;
	console.log(lat,lng)
	return ($.ajax({
		url: `https://api.darksky.net/forecast/8c8234cb6938a8798c7d5f60186e7efa/`+lat+`,`+lng,
		dataType: 'json',
		async: false,
		success: function(data) {
			return data;
		}
	})).responseJSON;
};

document.getElementById('weatherbtn').addEventListener("click", function(){
	data = getWeather()
	console.log(data)
	var result = data.daily.summary;
	var resimg = data.daily.icon;
	console.log(result,resimg)
	document.getElementById('resultimg').src = '/img/' + resimg + '.png';
	document.getElementById('summary').innerHTML = result;
});