Highcharts.chart('container', {
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
            text: 'Tweets'
        }
    },
    tooltip: {
        // headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        // pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //     '<td style="padding:0"><b>{point.y} tweets</b></td></tr>',
        // footerFormat: '</table>',
        shared: true,
        // useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,

            pointInterval: 7 * 24 * 3600 * 1000,
            pointStart: Date.UTC(2020, 2, 1)
        },
        
    },
    series: [{
        name: 'Fake',
        data: [23, 56, 45, 34, 34, 12, 54, 45, 23, 65, 23, 43, 56, 12, 54, 78, 54, 54, 23, 45, 54,
         12, 54, 44, 54, 12, 34, 65, 34, 43, 65, 54, 12, 34, 65, 34, 43, 65, 43]

    }, {
        name: 'Not Fake',
        data: [2, 56, 65, 23, 56, 23, 76, 23, 54, 12, 34, 65, 34, 43, 65, 12, 65, 34, 45, 34, 34,
         12, 34, 45, 23, 64, 23, 45, 54, 12, 34, 34, 34, 12, 54, 45, 23, 62, 23]

    }, {
        name: 'Partially Fake',
        data: [21, 45, 67, 34, 12, 32, 54, 23, 45, 54, 12, 54, 76, 23, 64, 23, 65, 32, 12, 34, 65, 
        34, 43, 65, 54, 23, 45, 54, 12, 54, 76, 23, 54, 12, 34, 65, 34, 43, 64]

    },{
        type: 'flags',
        showInLegend: false,
        data: [{
            x: Date.UTC(2020, 07, 2),
            title:'1',
            text:'12th WHO declared COVID-19 a pandemic <br>' + 
                '13th Kenya confirmed first case of Coronavirus in East Africa'
        }],
        onSeries: 'dataSeries',
        shared: true,
        shape: 'circlepin',
        width: 16,
    }]
});
