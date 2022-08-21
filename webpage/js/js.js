Highcharts.chart('container1', {
    exporting: {
        enabled: false,
    },
    chart: {
        type: 'column',
        height: 240,
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
       type: 'datetime',
        // labels: {
        //     overflow: 'justify'
        // }
        visible: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'People'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} people</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,

            pointInterval: 4 * 7 * 24 * 3600 * 1000,
            pointStart: Date.UTC(2020, 2, 31)
        },
        
    },
    series: [{
        name: 'Cases',
        data: [48,37,361,481,249,2363,4952,4004,9693,13521,3821,802,669,945,9768,3835]

    }, {
        name: 'Deaths',
        data: [0,0,0,0,4,35,40,32,95,68,50,10,1,8,31,28]

    }, {
        name: 'Recoveries',
        data: [0,35,20,675,260,494,2544,3367,1644,3676,1509,779,25374,449,4498]

    }]
});


Highcharts.chart('container2', {
    exporting: {
        enabled: false,
    },
    chart: {
        type: 'column',
        height: 320
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'People'
        }
    },
    tooltip: {
        // headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        // pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //     '<td style="padding:0"><b>{point.y} people</b></td></tr>',
        // footerFormat: '</table>',
        shared: true,
        // useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,

            pointInterval: 7 * 24 * 60 * 60 * 1000,
            pointStart: Date.UTC(2019, 11, 30)
        },
       

    },
    series: [{
        name: 'Cases',
        showInLegend: false,
        data: [0,0,0,0,0,0,0,0,0,0,0,1,29,18,5,2,20,10,31,111,85,134,276,101,10,94,86,49,41,73,93,165,732,590,783,1164,1314,1347,1127,
                1047,917,842,1198,1571,1723,1878,2277,2244,4883,3631,2861,2146,1842,531,959,489,288,198,180,136,
                117,92,107,116,195,45,151,227,235,332,401,366,833,2424,5745,8574,6965,8444],
        color: '#3b7ddd',
        id: 'dataSeries'

    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 02, 16),
            title:'1',
            text:'12th WHO declared COVID-19 a pandemic <br>' + 
                '13th Kenya confirmed first case of Coronavirus in East Africa'
        }],
        onSeries: 'dataSeries',
        shared: true,
        shape: 'circlepin',
        width: 16,
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 02, 23),
            title:'2',
            text: '18th Public gatherings were suspended for 32 days <br> ' + 
                    '18thForeigners and Ugandans arriving in Uganda were to be put under 14-day mandatory quarantine in hotels designated by the government that are in Entebbe <br> ' +
                    '20th All schools and universities were closed for 30 days <br> ' +
                    '21th The first case of COVID-19 in Uganda was confirmed <br> ' +
                    '21th Borders were closed except for cargo and goods <br> ' +
                    '23th 8 new COVID-19 cases were reported in Uganda'
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 02, 30),
            title:'3',
            text: '25th Public transport was suspended for 14 days <br> ' + 
                    '25th Nationwide curfew from 7 pm to 6:30 am was declared <br> ' +
                    '25th Police and other security personnel were heavily deployed to enforce the health guidelines'
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 03, 06),
            title:'4',
            text: '04th Relief food distribution started in Kampala and Wakiso for the vulnerable'
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 03, 13),
            title:'5',
            text: '10th Mandatory testing of truck drivers started <br>' +
                    '12th Lockdown and curfew extended for a further 21 days' 
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 03, 20),
            title:'6',
            text: '14th One case was recorded at the Eastern border of Uganda and Kenya ' 
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 04, 04),
            title:'7',
            text: '04th Lockdown and curfew extended for another 14 days <br>' + 
                    '04th Wearing face masks in public is declared mandatory' 
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 04, 11),
            title:'8',
            text: '08th Uganda crossed the mark of 100 people infected with COVID-19 '
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 04, 25),
            title:'9',
            text: '21th A presidential directive reduced the total number of cases from 264 to 145 <br> ' + 
                    'after removing foreign truck drivers who had left the country from the count'
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 05, 01),
            title:'10',
            text: '26th Started to the ease restrictions: <br> ' +
                 'Movement of private cars was allowed with not more than 3 people <br> ' +
                'Some shops selling general items were allowed to open. <br>' + 
                '30th Uganda registered 84 new cases of COVID-19 which is the highest number in a single day since the outbreak in Uganda'
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 05, 08),
            title:'11',
            text: '04th Next phase in easing of restrictions: <br> ' +
                 'Partial resumption of public transport, schools and some businesses'
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2021, 05, 07),
            title:'12',
            text: '04th Highest number of cases registered in the country <br> ' + 
                    '06th All schools and institutions of higher learning were close for 42 days <br> ' + 
                    'Communal prayers in Mosques, churches or in Stadia and other open-air venues were suspended for 42 days <br> ' +
                    'Public and cultural gatherings or conferences were suspended for 42 days <br> ' +
                    'Travel from Category 1 countries, as defined by the Ministry of Health was suspended except returning Ugandans.<br> ' + 
                     'At the moment only India is listed as category A'
        }],
        onSeries: 'dataSeries',
        shape: 'circlepin',
        width: 16
    }]
});