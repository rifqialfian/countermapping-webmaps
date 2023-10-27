var config = {
    style:  'mapbox://styles/iamwfx/cjjx6bl926vgt2ss0l9dbpmxz',
    accessToken: 'pk.eyJ1IjoicmlmcWlhbGZpYW4iLCJhIjoiY2xvMzEwN2Y1MXFwdjJpcW01eHh6OGR0bCJ9.IzRy_9RyR26uQKlpXQTKsQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By Rifqi Maulana',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec porttitor augue. Aenean aliquam nulla in mauris tempus porttitor. Sed nunc tortor, aliquam a ultricies non, aliquet et mauris. Vestibulum non condimentum mi. Phasellus pharetra, risus ac sollicitudin accumsan, justo mauris porttitor felis, id pharetra nulla augue et magna. Nullam placerat egestas lacus id pellentesque. Nunc pellentesque maximus odio id maximus. Integer eu sapien ac est rhoncus facilisis. Mauris luctus feugiat diam vitae malesuada. Aenean egestas a ex ut vestibulum. Morbi at magna quis diam elementum pulvinar. Pellentesque ex ipsum, placerat vitae orci sit amet, vulputate maximus est. Mauris mollis tortor massa, et rutrum ligula sagittis ut. Ut maximus purus at urna porttitor placerat. Donec tincidunt leo eget est semper, a volutpat felis consequat.',
    para2: 'Suspendisse eu lorem rutrum, luctus sapien in, ultrices elit. Duis lectus arcu, convallis vel semper ut, consectetur in tortor. Nunc pretium sed tellus elementum aliquam. Integer dictum augue ac metus placerat, sit amet accumsan urna accumsan. Pellentesque vitae ex in dolor commodo dignissim vel placerat magna. Integer faucibus lorem non orci ultricies, quis pretium ligula hendrerit. Cras eu neque non nunc vehicula rhoncus sed nec odio. Quisque pretium nunc eu purus dictum iaculis. Maecenas consectetur luctus blandit. Nullam sed orci nec magna feugiat ullamcorper. Sed congue urna ullamcorper arcu feugiat, eget ullamcorper mi ultrices. Nulla dui quam, porta ac sem eget, eleifend euismod mauris. Duis consectetur lacus sit amet sem blandit, ac scelerisque sapien facilisis. Donec id justo ullamcorper, rutrum odio quis, suscipit nibh.',
    footer: 'Map Sources: NYC Open Data. <br> Image Sources: Getty Images, Wikipedia. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Hurricane Sandy and Public Housing',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Hurricane_Sandy_Flooding_East_Village_2012.JPG',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.99930, 40.73644],
                zoom: 9,
                pitch: 45,
                bearing: 2.4
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
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: "Red Hook: Between Gentrification and Climate Change",
            //image: 'images/source.png',
            description: "Hurricane Sandy struck Brooklyn at 8pm on October 29, 2012, wreaking havoc in Red Hook. The storm left 43 dead in NYC, but Red Hook bore the brunt. Reminding residents of its origins as a tidal marsh, waters surged from sewers and submerged streets. Although homeowners feared property devaluation, Red Hook's real estate surprisingly thrived post-Sandy, with prices surpassing $1m—even on a floodplain. Two blocks of new luxury townhouses rose on King and Sullivan Streets. <br> Source: <a href='https://www.theguardian.com/environment/2018/sep/25/red-hook-climate-change-floodplain-hurricane-sandy-gentrification' target='_blank'>The Guardian</a>",
            location: {
                center: [-74.01301, 40.67248],
                zoom: 15.84,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
                center: [-74.01301, 40.67248],
                zoom: 14,
                pitch: 30,
                bearing: 0,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            //image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};
