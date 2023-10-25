var config = {
    style: 'mapbox://styles/rifqialfian/clo5hxior00hy01oz897hd2nu',
    accessToken: 'pk.eyJ1IjoicmlmcWlhbGZpYW4iLCJhIjoiY2xvMzEwN2Y1MXFwdjJpcW01eHh6OGR0bCJ9.IzRy_9RyR26uQKlpXQTKsQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Rifqi Maulana',
    footer: 'Map Sources: NYC Open Data. <br> Image Sources: Wikipedia. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Hurricane Sandy and Public Housing',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Hurricane_Sandy_Flooding_East_Village_2012.JPG',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.99930, 40.73644],
                zoom: 11.37,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                     layer: 'pluto-hous-type-master-featu-7b5u7f',
                     opacity: 1
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: "Red Hook: Between Gentrification and Climate Change",
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Red_Hook_Night_Manhattan.JPG/1280px-Red_Hook_Night_Manhattan.JPG?20120708150531',
            description: "Hurricane Sandy struck Brooklyn at 8pm on October 29, 2012, wreaking havoc in Red Hook. The storm left 43 dead in NYC, but Red Hook bore the brunt. Reminding residents of its origins as a tidal marsh, waters surged from sewers and submerged streets. Although homeowners feared property devaluation, Red Hook's real estate surprisingly thrived post-Sandy, with prices surpassing $1m—even on a floodplain. Two blocks of new luxury townhouses rose on King and Sullivan Streets. <br> Source: <a href='https://www.theguardian.com/environment/2018/sep/25/red-hook-climate-change-floodplain-hurricane-sandy-gentrification' target='_blank'>The Guardian</a>",
            location: {
                center: [-74.004608, 40.675838],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
