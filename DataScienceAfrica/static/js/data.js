// const data =  [{name: 'Facebook',y: 430075,color:'#FA8C00'}, {name: 'Twitter',y: 15354,color:'#822600' }]
const data =  [{name: 'Facebook',y: 430075}, {name: 'Twitter',y: 15354}]
const data2 = [{ name: 'Facebook', y: 5344 }, { name: 'Twitter', y: 5656 }] 
Highcharts.chart('container', {
    chart: {

        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 260,
        borderRadius: 10,
        plotBackgroundColor: null,
    },
    credits: {
        enabled: false
      },
    title: {
        text: '',
    },
    exporting: {
        enabled: false,
    },
    tooltip: {
        // pointFormat: '{point.y} {point.name} data points</b>'
        // '{series.name}: <b>{point.percentage:.1f}% <br> {point.y} data points</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} % '
            }
        }
    },
    series: [{
        name: 'raw data',
        colorByPoint: true,
        data: data,
        size: '80%',
        innerSize: '60%',
    }]
});



Highcharts.chart('annotate', {
    chart: {
        type: 'bar',
        height: 270,
        borderRadius: 10
    },
    exporting: {
        enabled: false,
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['FaceBook', 'Twitter',],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Posts and Tweets',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

    credits: {
        enabled: false
    },
    series: [{
        name: 'Data Collected',
        data: [430075, 15354]
    }, {
        name: 'Dataset After Annotation',
        data: [4479, 3527]
    }]
});


Highcharts.chart('annotation', {
    chart: {
        type: 'bar',
        height: 270,
        borderRadius: 10
    },
    exporting: {
        enabled: false,
    },
    title: {
        text: ''
    },
    subtitle: {
        text: 'Annotated Data basing on Languages'
    },
    xAxis: {
        categories: ['FaceBook', 'Twitter'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Posts and Tweets',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

    credits: {
        enabled: false
    },
    series: [{
        name: 'English',
        data: [567, 234,]
    }, {
        name: 'Luganda',
        data: [267, 34,]
    }, {
        name: 'CodeMixed',
        data: [134, 24,]
    }]
});



Highcharts.chart('annotation2', {
    chart: {
        type: 'column',
        height: 270,
        borderRadius: 10
    },
    title: {
        text: 'Facebook'
    },
    exporting: {
        enabled: false,
    },
    subtitle: {
        text: ''
    },
    credits: {
        enabled: false
      },
    xAxis: {
        categories: [
            'Not Fake',
            'Fake',
            'Partially Fake',
            'Others'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'posts'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Posts',
        data: [2267, 1529, 1009, 506]
    }]
});

Highcharts.chart('annotation3', {
    chart: {
        type: 'column',
        height: 270,
        borderRadius: 10
    },
    title: {
        text: 'Twitter'
    },
    exporting: {
        enabled: false,
    },
    subtitle: {
        text: ''
    },
    credits: {
        enabled: false
      },
    xAxis: {
        categories: [
            'Not Fake',
            'Fake',
            'Partially Fake',
            'Others'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'tweets'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        color:'#A9FF96',
        name: 'Tweets',
        data: [4801, 472, 233, 120]
    }]
});
Highcharts.chart('annotation4', {
    chart: {
        type: 'column',
        height: 270,
        borderRadius: 10
    },
    title: {
        text: 'Twitter'
    },
    exporting: {
        enabled: false,
    },
    subtitle: {
        text: ''
    },
    credits: {
        enabled: false
      },
    xAxis: {
        categories: [
            'Positive',
            'Negative',
            'Neutral',
            'Others'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'tweets'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        color:'#A9FF96',
        name: 'Tweets',
        data: [1253, 2449, 2962,10] 
    }]
});

Highcharts.chart('annotation5', {
    chart: {
        type: 'column',
        height: 270,
        borderRadius: 10
    },
    title: {
        text: 'Facebook'
    },
    exporting: {
        enabled: false,
    },
    subtitle: {
        text: ''
    },
    credits: {
        enabled: false
      },
    xAxis: {
        categories: [
            'Positive',
            'Negative',
            'Neutral',
            'Others'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'posts'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Posts',
        data: [1225, 2976, 2912,39]
    }]
});

Highcharts.chart('twitter_sentiment_analysis', {
    chart: {
       type: 'column',
        height: 370,
        borderRadius: 10
    
    },
    exporting: {
        enabled: false,
    },
    title: {
        text: 'Twitter'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Border', 'Covid19', 'Covid19_impact', 'NPIS', 'Presidential_address',
            'SOPs', 'Testing', 'Cases', 'Covid_fund', 'Covid-releif',
            'Death', 'Hospitals', 'Treatment', 'Truck_drivers', 'Vaccine',
        ],
        title: {
            text: ''
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'tweets'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        series: {
            stacking:'normal'
        }
    },

    credits: {
        enabled: false
    },
    series: [
        {
            name: 'Negative',
            data: [
                57, 314, 337, 432, 158,
                59, 62, 391, 11, 37,
                81, 173, 25
            ]
        },
        {
            name: 'Neutral',
            data:[
                98, 571, 181, 507, 149,
                257, 190, 345, 17, 131,
                54, 52, 195, 121, 124
            ]
        },
        {
            name: 'Positive',
            data:[
                10, 113, 106, 214, 33,
                120, 52, 83, 19, 180,
                18, 35, 230, 8, 32
            ]
        }
    ]
});


Highcharts.chart('facebook_sentiment_analysis', { 
    
    chart: {
        type: 'column',
        height: 370,
        borderRadius: 10
    
    },
    exporting: {
        enabled: false,
    },
    title: {
        text: 'Facebook'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Border', 'Covid19', 'Covid19_impact', 'NPIS', 'Presidential_address',
            'SOPs', 'Testing', 'Cases', 'Covid_fund', 'Covid-releif',
            'Death', 'Hospitals', 'Treatment', 'Truck_drivers', 'Vaccine',
        ], title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'posts',

        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        series: {
            stacking:'normal'
        }
    },

    credits: {
        enabled: false
    },
    series: [{
        name: 'Negative',
        data: [
            47, 670, 529, 519, 111,
            82, 49, 327, 16, 203,
            109, 14, 58, 203, 39
        ]
        },
        {
            name: 'Neutral',
            data: [
                123, 656, 124, 683, 131,
                226, 161, 176, 11, 116,
                56, 22, 185, 157, 95
            ]
        },
        {
            name: 'Positive',
            data: [
                4, 170, 56, 158, 68,
                106, 81, 59, 12, 123,
                21, 23, 213, 36, 95
            ]
        }
    ],
});


