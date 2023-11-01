mapboxgl.accessToken = 'pk.eyJ1IjoicmlmcWlhbGZpYW4iLCJhIjoiY2xuM3R6bXBqMGNycTJtcndkaWZheXphdCJ9.Xq-7tIuYs74pTg160KwWdA'
const map = new mapboxgl.Map({
	container:'rifqi',
	style:'mapbox://styles/rifqialfian/clod1lg3e00sd01pdewopgqj8',
	center:[-122.42214, 37.78934],
	zoom:13,
})

var textField = document.getElementById('restText');

map.on('load', function () {
	const popup = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	console.log('My name is Rifqi');

	map.addSource('inspectionLayer',{
		'type':'vector',
		'url': 'mapbox://rifqialfian.d9eaayji'
	});

	//map.addSource('censusLayer',{
		//'type':'vector',
		//'url': 'mapbox://iamwfx.6nowkujs'
	//});

	map.addLayer({
		'id':'inspection',
		'type':'circle',
		'source':'inspectionLayer',
		'source-layer':'Restaurant_Scores_-_LIVES_Sta-dy19a5',
		'paint':{
			'circle-opacity': 0.8,
			'circle-color':[
            'interpolate',
            ['linear'],
            ['coalesce',
            	['to-number', ['get', 'inspection_score']],0],
            45, '#aaaaaa',
            80, '#440154',
            85, '#3b528b',
            90, '#21908d',
            95, '#5dc963',
            100, '#fde725'
        ],
        }
	});
})

map.on('mouseenter', 'inspection', (e) => {
        console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name'];
        textField.textContent = name;
    })