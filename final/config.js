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
    footer: 'Map Sources: OpenStreetMap. <br> Media Sources: Wikipedia, Youtube. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Surabaya and Public Senior High Schools',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Downtown_of_Central_Surabaya.jpg',
            description: "Surabaya, Indonesia's second-largest city, is home to almost 3 million people within a <a href='https://jatim.bps.go.id/indicator/153/81/1/luas-wilayah-menurut-kabupaten-kota.html' target='_blank'>350.54 square kilometers area</a>. It serves as the commercial heart of Eastern Indonesia and is a critical junction for numerous pivotal businesses in the country. Nearly 8 percent of the population, which equates to about <a href='https://opendata.surabaya.go.id/dataset/jumlah-penduduk-menurut-usia-per-kelurahan-tahun-2022' target='_blank'>230,000 individuals</a>, are of senior high school age (15-19 years). Although Surabaya's overall school availability is more than sufficient, the city is limited to only <a href='https://dapo.kemdikbud.go.id/sp/1/050000' target='_blank'>22 public senior high schools</a> (compared to 63 Public Junior High Schools). Furthermore, these public schools are concentrated in certain areas, especially in the center of Surabaya.",
            image2: 'images/legend1.png',
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
                {
                    layer: 'surabaya-data-8dbg85',
                    opacity: 0,
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
            description: "This debate in Surabaya is occurring for well-founded reasons. The limited number of schools, along with their concentrated locations, results in a distance-based admission system that favors only certain areas. In 2021, the distance of the furthest student admitted into these schools ranged from 0.43 to 1.7 kilometers, with an average maximum distance of 1.02 kilometers. Consequently, this situation indicates that public senior high schools in Surabaya are not accessible to students from most areas of the city. <br> Source: <a href='https://ppdbjatim.net/' target='_blank'>East Java Public Schools Admission</a>",
            image2: 'images/legend2.png',
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
                    opacity: 0.7,
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
                {
                    layer: 'surabaya-data-8dbg85',
                    opacity: 0,
                },
            ],
            onChapterExit: []
        },
        {
            id: 'third-chapter',
            alignment: 'right',
            hidden: false,
            //title: "Zone-based Admission and Access to Education",
            image: 'images/Graph1.png',
            description: "Furthermore, the data from <a href='https://opendata.surabaya.go.id/dataset/jumlah-penduduk-menurut-usia-per-kelurahan-tahun-2022' target='_blank'>Satu Data Surabaya</a> reveals the population numbers for ages 15-19 in each village (the smallest administrative division). By overlaying the geographic boundaries of each village with the buffer zones around schools (based on the furthest student admitted), it emerges that 67 out of 154 villages are entirely outside these buffer zones. Remarkably, these 67 villages comprise 103,203 individuals, which is almost 43.4% of the population aged 15-19 in Surabaya. This figure may underestimate the number of impacted children, as most villages (96 out of 154) have less than 20% of their area covered by the buffer (see the histogram above).",
            image2: 'images/legend3.png',
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
                    opacity: 0.7,
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
                {
                    layer: 'surabaya-data-8dbg85',
                    opacity: 0.7,
                },
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Identifying Potential Fraud in Zone-Based Admissions: Insights from Building Footprint Data',
            image: 'images/sma-5-surabayajpg-20211109042944.jpg',
            description: "These four institutions - SMAN 1, SMAN 2, SMAN 5, and SMAN 9 - are among Surabaya's most prestigious public senior high schools. Built during the Dutch colonial period, it has not only educated several of Indonesia's founding fathers but also a host of notable alums who have made significant contributions in fields like art, science, business, and government. Additionally, these schools are acclaimed for their impressive track record in securing student admissions to Indonesia's top universities. However, a notable concern arises from their spatial aspect: these four schools, out of the city's 22 public senior high schools, are all located in a single, consolidated area. This situation highlights the uneven distribution of educational resources in Surabaya.",
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
                    opacity: 0.1,
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
                {
                    layer: 'surabaya-data-8dbg85',
                    opacity: 0,
                },
                ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            //title: 'Third Title',
            //image: 'images/source.png',
            description: "When all four buffer zones are combined, they form an expanded buffer with a less than 1.5 kilometers radius. Within this area, it's noticeable that most buildings are non-residential. In Surabaya, particularly in these neighborhoods, vertical housing is rare, with landed housing being the norm. Additionally, it is important to note that within this buffer, there are also three other public senior high schools (indicated by red dots). This situation prompts questions about the residential proximity of the students who are accepted into these schools. Are they actually living near the schools, in line with the intended policy?",
            image2: 'images/legend4.png',
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
                {
                    layer: 'surabaya-data-8dbg85',
                    opacity: 0,
                },
                ],
            onChapterExit: []
        },
        {
            id: 'interlude2',
            alignment: 'center',
            hidden: false,
            description: "\"After visiting one of the public senior high schools in Surabaya, we found that 50% of students admitted through the zoning system had addresses on their Family ID Cards that did not match their actual locations. These students had chosen points near the school that differed from their official addresses. There are cases where the addresses seem nonsensical, like those listed directly behind the school. This situation is unfair.\" – <a href='https://ombudsman.go.id/artikel/r/pwkmedia--ombudsman-sebut-sejumlah-sman-di-jatim-terindikasi-curang-pada-ppdb-2023' target='_blank'>Ombudsman East Java Office</a>",
            //image: 'images/Ombudsman-Republik-Indonesia-20%.png',
            location: {
                center: [112.74, -7.25718],
                zoom: 13.7,
                pitch: 0,
                bearing: 0,
            },
        },
    ]
};
