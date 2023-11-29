var config = {
    style:  'mapbox://styles/rifqialfian/clp73klmn012b01qna8id8qiv',
    accessToken: 'pk.eyJ1IjoicmlmcWlhbGZpYW4iLCJhIjoiY2xvMzEwN2Y1MXFwdjJpcW01eHh6OGR0bCJ9.IzRy_9RyR26uQKlpXQTKsQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'ASSESSING THE EFFICACY OF ZONE-BASED ADMISSIONS IN INDONESIAN PUBLIC SENIOR HIGH SCHOOLS',
    subtitle: 'A Case Study of Surabaya in 2021',
    byline: 'By Rifqi Maulana',
    para1: 'Indonesian public senior high schools are highly praised for successfully preparing their students to enter top universities both in Indonesia and overseas. Their popularity is further boosted by the low cost of attendance, making parents and students are so eager to secure a spot. However, the limited number of public schools compared to the demand creates a competitive environment for admission.',
    para2: "Prior to 2017, the selection for admission was primarily based on academic performance. While this method is meritocratic on the surface, it can perpetuate inequalities if those from wealthier backgrounds have more resources to prepare for the selection process.There's a concern that taxpayer-funded schools should be accessible to a broader segment of the population, not just to those who are academically or economically privileged.",
    para3: "Since 2017, the government's zonation policy has obliged public schools (from elementary to senior high schools) to accept students from nearby areas, aiming to improve educational access. However, its effectiveness is doubtful due to the scarcity of public schools, especially in senior high school level and urban areas. Critics claim the policy only shifts competition from academic merit to proximity to preferred schools, leading to concerns about dishonest methods like cheating and bribery to obtain addresses in favored zones.",
    footer: 'Map Sources: Indonesia Education Primary Data. <br> Media Sources: Wikipedia, Youtube. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Surabaya and Public Senior High School',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Downtown_of_Central_Surabaya.jpg',
            description: "Surabaya, Indonesia's second-largest city, is home to over 3 million people within a 135.3 square mile area. It serves as the commercial heart of Eastern Indonesia and is a critical junction for numerous pivotal businesses in the country. Nearly 8 percent of the population, which equates to about 250,000 individuals, are of senior high school age (15-19 years). Although Surabaya's overall school availability is more than sufficient, the city is limited to only 22 Public Senior High Schools (compared to 63 Public Junior High Schools). Furthermore, these schools are predominantly concentrated in the central region and have origins tracing back to the Dutch colonial era.",
            location: {
                center: [112.68771, -7.28594],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sman-buffer-8yf7u7',
                    opacity: 0,
                },
                {
                     layer: 'sman-komplek-buffer-42hdys',
                     opacity: 0,
                 },
                {
                     layer: 'building-footprint-59q9b5',
                     opacity: 0,
                 },
                 {
                    layer: 'sman-surabaya-aedmij',
                    opacity: 0,
                },
                {
                    layer: 'sma-surabaya-1pk0sl',
                    opacity: 0.7,
                },
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'The admission process in Surabaya operates under the framework of East Java Governor Law No. 24/2021 as the implementation of the Minister of Education and Culture Law No. 1/2021. This legislation obligates public schools to allocate a minimum of 50% of their admissions to applicants residing within the nearest zone to the school. Originally, the law prescribed a higher quota, requiring that 90% of student admissions come from the immediate zone. This initial mandate resulted in notable public protests. Despite the adjustment to a 50% quota, the issue continues to be a subject of ongoing debate.',
            video: 'images/Aksi Penolakan Sistem Zonasi PPDB di Surabaya.mp4',
            location: {
                center: [112.68771, -7.28594],
                zoom: 10,
                pitch: 0,
                bearing: 0,
            },
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: "Zone-based Admission and Access to Education",
            //image: 'images/source.png',
            description: " <br> Source: <a href='https://ppdbjatim.net/' target='_blank'>PPDB Jawa Timur</a>",
            location: {
                center: [112.76121, -7.27737],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: .5, // make the flying slow
                curve: 1,
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
            onChapterEnter: [
                {
                    layer: 'sman-buffer-8yf7u7',
                    opacity: 0.5,
                },
                {
                     layer: 'sman-komplek-buffer-42hdys',
                     opacity: 0,
                 },
                {
                     layer: 'building-footprint-59q9b5',
                     opacity: 0,
                 },
                 {
                    layer: 'sman-surabaya-aedmij',
                    opacity: 0.7,
                },
                {
                    layer: 'sma-surabaya-1pk0sl',
                    opacity: 0,
                },
            ],
            onChapterExit: []
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            //title: 'Third Title',
            //image: './path/to/image/source.png',
            description: '',
            location: {
              center: [112.74977, -7.25718],
              zoom: 16,
              pitch: 45,
              bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sman-buffer-8yf7u7',
                    opacity: 0,
                },
                {
                     layer: 'sman-komplek-buffer-42hdys',
                     opacity: 0,
                 },
                {
                     layer: 'building-footprint-59q9b5',
                     opacity: 0,
                 },
                 {
                    layer: 'sman-surabaya-aedmij',
                    opacity: 0.7,
                },
                {
                    layer: 'sma-surabaya-1pk0sl',
                    opacity: 0,
                },
                ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            //title: 'Third Title',
            //image: './path/to/image/source.png',
            description: '',
            location: {
              center: [112.74, -7.25718],
              zoom: 13.7,
              pitch: 0,
              bearing: 0,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sman-buffer-8yf7u7',
                    opacity: 0,
                },
                {
                     layer: 'sman-komplek-buffer-42hdys',
                     opacity: 0.2,
                 },
                {
                     layer: 'building-footprint-59q9b5',
                     opacity: 0.7,
                 },
                 {
                    layer: 'sman-surabaya-aedmij',
                    opacity: 0.7,
                },
                {
                    layer: 'sma-surabaya-1pk0sl',
                    opacity: 0,
                },
                ],
            onChapterExit: []
        }
    ]
};
