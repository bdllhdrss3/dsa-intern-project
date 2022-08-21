var data = [
    ['ug-2595', 0],
    ['ug-7073', 0],
    ['ug-7074', 0],
    ['ug-7075', 0],
    ['ug-2785', 0],
    ['ug-2791', 0],
    ['ug-3385', 0],
    ['ug-3388', 0],
    ['ug-2786', 0],
    ['ug-7056', 0],
    ['ug-7083', 0],
    ['ug-7084', 0],
    ['ug-7058', 0],
    ['ug-1678', 0],
    ['ug-1682', 0],
    ['ug-1683', 0],
    ['ug-1685', 0],
    ['ug-7051', 0],
    ['ug-2762', 0],
    ['ug-2767', 0],
    ['ug-2777', 0],
    ['ug-2778', 0],
    ['ug-2780', 0],
    ['ug-2781', 0],
    ['ug-2782', 0],
    ['ug-2783', 0],
    ['ug-2779', 0],
    ['ug-2784', 0],
    ['ug-3382', 0],
    ['ug-3384', 0],
    ['ug-3389', 0],
    ['ug-3383', 0],
    ['ug-3390', 0],
    ['ug-3386', 0],
    ['ug-3391', 0],
    ['ug-3392', 0],
    ['ug-3394', 0],
    ['ug-2750', 0],
    ['ug-7048', 0],
    ['ug-7080', 0],
    ['ug-7081', 0],
    ['ug-1684', 0],
    ['ug-7082', 0],
    ['ug-1688', 0],
    ['ug-7079', 0],
    ['ug-7068', 0],
    ['ug-7070', 0],
    ['ug-7049', 0],
    ['ug-2787', 0],
    ['ug-7055', 0],
    ['ug-2769', 0],
    ['ug-7052', 0],
    ['ug-2774', 0],
    ['ug-7059', 0],
    ['ug-7060', 0],
    ['ug-7057', 0],
    ['ug-2790', 0],
    ['ug-2776', 0],
    ['ug-7067', 0],
    ['ug-7065', 0],
    ['ug-7066', 0],
    ['ug-7069', 0],
    ['ug-7061', 0],
    ['ug-7063', 0],
    ['ug-7062', 0],
    ['ug-7064', 0],
    ['ug-7086', 0],
    ['ug-2744', 0],
    ['ug-1679', 0],
    ['ug-1680', 0],
    ['ug-7054', 0],
    ['ug-1686', 0],
    ['ug-7078', 0],
    ['ug-1677', 0],
    ['ug-1690', 0],
    ['ug-2745', 0],
    ['ug-2752', 0],
    ['ug-2754', 0],
    ['ug-1687', 0],
    ['ug-2757', 0],
    ['ug-1689', 0],
    ['ug-2760', 0],
    ['ug-2761', 0],
    ['ug-2766', 0],
    ['ug-2765', 0],
    ['ug-2764', 0],
    ['ug-2749', 0],
    ['ug-2768', 0],
    ['ug-2763', 0],
    ['ug-2748', 0],
    ['ug-2771', 0],
    ['ug-2772', 0],
    ['ug-2775', 0],
    ['ug-2788', 0],
    ['ug-2789', 0],
    ['ug-3381', 0],
    ['ug-3387', 0],
    ['ug-3393', 0],
    ['ug-7076', 0],
    ['ug-1681', 0],
    ['ug-2746', 0],
    ['ug-2747', 0],
    ['ug-2751', 0],
    ['ug-2758', 0],
    ['ug-2759', 0],
    ['ug-2756', 0],
    ['ug-2770', 0],
    ['ug-7072', 0],
    ['ug-7053', 0],
    ['ug-2753', 0],
    ['ug-2755', 0],
    ['ug-2773', 0]
];



let recent = []
let top_districts = []
let map_data = []
let last_update = ''
let map;
function initialise() {
   map = Highcharts.mapChart('container1', {
     exporting: {
        enabled: false,
    },
    credits: {
        enabled: false
      },
    chart: {
        map: 'countries/ug/ug-all',
        height: 580,
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    colorAxis: {  
                dataClasses: [{
                    to: 10,
                    color:'#ffb2b2'
                }, {
                    from: 10,
                    to: 50,
                    color: '#ff7f7f'
                }, {
                    from: 50,
                    to: 100,
                    color:'#ff4c4c'
                }, {
                    from: 100,
                    to: 500,
                    color:'#ff1919'
                }, {
                    from: 500,
                    to: 1000,
                    color:'#ff0000'
                }, {
                    from: 1000,
                    to: 5000,
                    color:'#cc0000'
                }, {
                    from: 5000,
                    to: 10000,
                    color: '#990000'
                },
                 {
                    from: 10000,
                    color: '#660000'
                }]
    },

    series: [{
        data: data,
        name: 'Cummulative data',
        states: {
            hover: {
                color: '#fff'
            }
        },
        dataLabels: {
            enabled: true,
            format: ''
        },
        color: 'yellow'
    }]
});
}
fetch(url)
        .then(response => response.json())
        .then(function(x){
            recent = x.recent
            top_districts = x.top
            map_values = x.map_data.map(x=>[x.code,x.total])
            last_update = x.last_update
            data = map_values
            dislpayGeneralCases(top_districts)
            dislpayRecentCases(recent)
            initialise()
        });

 function dislpayGeneralCases(x){
    let casesContainer = document.getElementById('general-cases')
    for (i in x){
        let classes = ["d-xl-table-cell"]
        let district = x[i][0]
        let district_cases = x[i][1].toLocaleString()
        let row = document.createElement('tr')
        let name = document.createElement('td')
        name.classList.add(...classes)
        name.innerHTML += district
        row.appendChild(name)
        let cases = document.createElement('td')
        cases.classList.add(...classes)
        cases.innerHTML += district_cases
        row.appendChild(cases)
        casesContainer.appendChild(row)
    }
}
function dislpayRecentCases(x,y){
    let casesContainer = document.getElementById('recent-cases')
    let dateContainer = document.getElementById('date')
    dateContainer.innerText = dateFormart(last_update)
    for (i in x){
        let classes = ["d-xl-table-cell"]
        let district = x[i][0]
        let district_cases = x[i][1].toLocaleString()
        let row = document.createElement('tr')
        let name = document.createElement('td')
        name.classList.add(...classes)
        name.innerHTML += district
        row.appendChild(name)
        let cases = document.createElement('td')
        cases.classList.add(...classes)
        cases.innerHTML += district_cases
        row.appendChild(cases)
        casesContainer.appendChild(row)

    }
}

    function dateFormart(d){
        let date = new Date(d).setHours(0,0,0,0)
        let daybefore = new Date(date).toString()
        let today = new Date().setHours(0,0,0,0)
        let yesterday = new Date((new Date()).valueOf() - 1000*60*60*24).setHours(0,0,0,0)
        if(date == today){
            return "Districts with the highest cases-Today"
        }else if(date == yesterday){
            return "Districts with the highest cases-Yesterday"
        }
        else {
            return `Districts with the highest cases - ${daybefore.slice(0,16)}`
        }
    }
    function filter(){
        let to = document.getElementById("to")
        let from = document.getElementById("from")
        let loader = document.getElementById("loader")
        loader.hidden = false
        fetch(url2+`?start=${from.value}&end=${to.value}`)
            .then(response => response.json())
            .then(function(x){
                if (x.map_data.length <= 0){
                    map_data = x.map_data.map(x=>[x.code,x.total])
                    map.series[0].update({  
                        data: map_data  
                    });
                    loader.hidden = true
                }else{
                    map_data = x.map_data.map(x=>[x.code,x.total])
                    map.series[0].update({  
                        data: map_data  
                    });
                    loader.hidden = true
                }
                
            })
            .catch(function(e){
                loader.hidden = true
                map.series[0].update({  
                    data: data  
                });
            })
    }

   