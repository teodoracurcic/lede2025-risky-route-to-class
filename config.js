var config = {
    style: 'mapbox://styles/datadora/cmd50ykme00av01s2dxzzcyip',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZGF0YWRvcmEiLCJhIjoiY21kZjM2ZDZyMDk3bjJpcHh3cHpoaGp4byJ9.tPxsMgyrd7AOBzbbYMP-ow',
    showMarkers: false,
    markerColor: '#fb6a4a  ',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#fb6a4a'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'fully',
            hidden: false,
            description: 'Nearly <span style="color:#a50f15; font-weight: bold;">150,000 traffic accidents</span> between 2016 and the end of 2024</span> were recorded in Belgrade over the past nine years, according to official police data. While not all of them happened near schools, the scale of the problem shows that traffic safety is a serious concern for schoolchildren in the city. <br> <br> This project maps elementary and high schools across Belgrade to identify which ones are located in high-risk traffic zones, and how often students pass through areas with frequent accidents on their way to class.',
            location: {
                center: [20.460916649344853, 44.80892689461899],                
                zoom: 9,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'accidents',
                    opacity: 0.5,
                    duration: 1000,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0,
                 }
            ],
            onChapterExit: [
                {
                    layer: 'accidents',
                    opacity: 0,
                    duration: 500,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0,
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            description: 'To assess the risk, I divided the city into 500-by-500 meter grids and calculated how many accidents and schools fall within each one. <br><br> <p style="margin-top: 20px; font-size: 1.05em; font-weight: bold; line-height: 1.6; text-align: justify; max-width: 260px; margin-left: auto; margin-right: auto;"><span style="color: #a50f15;">■</span> 500–1323<br><span style="color: #de2d26;">■</span> 250–500<br><span style="color: #fb6a4a;">■</span> 100–250<br><span style="color: #fc9272;">■</span> 50–100<br><span style="color: #fcbba1;">■</span> 1–50<br><span style="color: #999;">□</span> 0–1</p>',
            location: {
                center: [20.460916649344853, 44.80892689461899],
                zoom: 10,
                pitch: 10,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                    duration: 500,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0,
                 }
            ],
            onChapterExit: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0,
                 }
            ]
        },
                {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            description: 'The analysis reveals a clear concentration of traffic accidents in the city center, the same area where schools are most densely located. Many of these zones show a consistent overlap between high accident rates and the daily paths students take to school. <br> <br><iframe title="" aria-label="Pie Chart" id="datawrapper-chart-bKsaM" src="https://datawrapper.dwcdn.net/bKsaM/6/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="410" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}})}();</script>',
            location: {
                center: [20.460916649344853, 44.80892689461899],
                zoom: 11.9,
                pitch: 10,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                    duration: 500,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0.9,
                    duration: 4000,

                 }
            ],
            onChapterExit: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0.9,
                 }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            description: 'Most of the traffic accidents in Belgrade happen near schools: <br> <br> <b>Two out of three recorded traffic accidents occurred within 250 meters of a school, a distance that typically takes just a few minutes to walk. <br> <br></b> <iframe title="Most  Accidents Happen  Close to Schools" aria-label="Stacked Bars" id="datawrapper-chart-1m4Lc" src="https://datawrapper.dwcdn.net/1m4Lc/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="152" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r,i=0;r=e[i];i++)if(r.contentWindow===a.source){var d=a.data["datawrapper-height"][t]+"px";r.style.height=d}}})}();</script>Most resulted in material damage, but their location shows how exposed the immediate surroundings of schools are to frequent traffic incidents.',
            location: {
                center: [20.460916649344853, 44.80892689461899],
                zoom: 11,
                pitch: -95,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0.9,
                 }
            ],
            onChapterExit: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0.9,
                 }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'Even when focusing only on accidents near schools, the highest concentration remains in the city center. Stari Grad and Savski Venac, two of Belgrade’s central municipalities, account for more than a third of all traffic accidents recorded within 250 meters of a school. These same areas host a high number of schools, making them particularly important when examining how traffic risks affect students’ daily routines.',
            location: {
                center: [20.460916649344853, 44.80892689461899],
                zoom: 12.3,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0.9,
                 }
            ],
            onChapterExit: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0.9,
                 }
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'This data shows that traffic risk is not a distant or abstract threat: it surrounds many of Belgrade’s schools. Identifying where these risks are concentrated is a first step toward making school routes safer for every student.',
            location: {
                center: [20.460916649344853, 44.80892689461899],                zoom: 8.5,
                zoom: 8.9,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'accidents',
                    opacity: 0.5,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0.9,
                 }
            ],
            onChapterExit: [
                                {
                    layer: 'accidents',
                    opacity: 0,
                    duration: 1000,
                 },
                                 {
                    layer: 'schools',
                    opacity: 0,
                    duration: 1000,
                 }
            ]
        }
    ]
};
