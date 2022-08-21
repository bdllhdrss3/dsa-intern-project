var covid_data = {}
events = []
function dateFormater(n,old,d=null){
    let percentage
    let date = new Date(d).setHours(0,0,0,0)
    let daybefore = new Date(date - 1000*60*60*24).toString()
    let today = new Date().setHours(0,0,0,0)
    let yesterday = new Date((new Date()).valueOf() - 1000*60*60*24).setHours(0,0,0,0)
    if(old >= 1){
        let x = (n - old)/old
        percentage = (x<0)? `${x.toFixed(2)}%`: `+${x.toFixed(2)}%`
    }
    else if(old - n == 0){
        x = 0.00
        percentage = x.toFixed(2) + "%"
    }
    else{
        x = 100
        percentage = x.toFixed() + "%"
    }

    if(date == today){
        return {
            percentage,
            date: "Today",
            since: "since Yesterday"
        }
    }else if(date == yesterday){
        return {
            percentage,
            date: "Yesterday",
            since: `since ${daybefore.slice(0,16)} `
        }
    }
    else {
        return {
            percentage,
            date: new Date(d).toString().slice(0,16),
            since: `since ${daybefore.slice(3,16)} `
        }
    }
}
function graphData(data){
    cases = []
    deaths =[]
    recoveries = []
    for (i in data){
        cases.push(data[i].covid_cases)
        deaths.push(data[i].deaths)
        recoveries.push(data[i].recovered)
    }
    return {cases,recoveries,deaths}
}
function getEvents(d){
    data = d.all_cases
    for (i in data){
        date = data[i].date.split("-")
        if (data[i].context !=="" || data[i].events !== "" ){
            events.push({
                type: 'flags',
                showInLegend: false,
                data:[{
                    title: data[i].context,
                    x:  Date.UTC(date[0],date[1]-1, date[2]),
                    text: data[i].events
                }],
                onSeries: 'dataSeries',
                shape: data[i].context ==  'DV' ? 'squarepin' :data[i].context == 'EV' ? 'squarepin' : data[i].context == 'PH' ? 'diamond' : 'circlepin', 
                shared: true,
                fillColor: data[i].context == 'DV' ? 'yellow' :data[i].context == 'EV' ? '#A9FF96' : data[i].context == 'PH' ? '#434348': data[i].context == 'OV' ? 'red': data[i].context == 'LD' ? '#2FBF71' : data[i].context == 'SC' ? '#BB8588' :'blue', 
                lineColor:  data[i].context == 'DV' ? 'black' :data[i].context == 'EV' ? '#A9FF96' : data[i].context == 'PH' ? '#434348':data[i].context == 'OV' ? 'red': data[i].context == 'LD' ? 'D8A48F' : data[i].context == 'SC' ? '#BB8588' :'blue', 
                style: { // text style
                    color: data[i].context == 'EV'  ? 'black' :'DV'  ? 'black' :'white'
                },
                enabled:true,
                width: 16
            })
        }
       
    }
}

function numFormater(num) {
    if (num > 999 && num < 1000000) {
        return (num/1000).toFixed(2) + 'K'
    } else if (num > 1000000) {
        return (num/1000000).toFixed(2) + 'M'
    } else {
        return num
    }
}
async function loadCharts(){
    //fetch data before loading highcharts
    var data = {}
    await fetch(url)
        .then(response => response.json())
        .then(function(x){
            data = graphData(x.all_cases)
            covid_data = x
            getEvents(x)

        });
    // populate Dashboard with data
    total_cases = covid_data.total_cases
    total_recoveries = covid_data.total_recoveries + 27109
    total_deaths = covid_data.deaths

    latest_case_recording = covid_data.latest.cases
    latest_case_recording_date = covid_data.latest.date
    cases_day_before = covid_data.latest.cases_previous_day

    latest_death_recording = covid_data.latest.deaths
    deaths_day_before = covid_data.latest.deaths_previous_day

    latest_recovery_recording = covid_data.latest.recoveries
    recoveries_day_before =  covid_data.latest.recoveries_previous_day
    
    cases_increase = ((cases_day_before < 1) ? 100 : (latest_case_recording - cases_day_before)/cases_day_before) + "%"
    death_increase = ((deaths_day_before < 1) ? 100 : (latest_death_recording - deaths_day_before)/deaths_day_before) + "%"
    recoveries_increase = ((recoveries_day_before < 1) ? 100 : (latest_recovery_recording - recoveries_day_before)/recoveries_day_before) + "%"

    latest_case_details = dateFormater(latest_case_recording,cases_day_before,latest_case_recording_date)
    deaths_details =  dateFormater(latest_death_recording,deaths_day_before,latest_case_recording_date)
    recoveries_details = dateFormater(latest_recovery_recording,recoveries_day_before,latest_case_recording_date)
    total_cases_details =  dateFormater(latest_case_recording,(total_cases-latest_case_recording),latest_case_recording_date)


    document.getElementById("recent_cases").innerText = latest_case_recording.toLocaleString()
    document.getElementById("daily-update-subtitle").innerText = latest_case_details.since
    document.getElementById("cases").innerText = total_cases.toLocaleString()
    document.getElementById("recoveries").innerText = total_recoveries.toLocaleString()
    document.getElementById("deaths").innerText = total_deaths.toLocaleString()

    document.getElementById("recent_cases_increase").innerText = latest_case_details.percentage
    document.getElementById("daily-update").innerText = latest_case_details.date

    document.getElementById("deaths_increase").innerText = deaths_details.percentage
    document.getElementById("deaths_increase_subtitle").innerText = deaths_details.since

    document.getElementById("total_cases").innerText = total_cases_details.percentage
    document.getElementById("total_cases_subtitle").innerText = total_cases_details.since
    
    document.getElementById("recoveries_percentage" ).innerText = recoveries_details.percentage
    document.getElementById("recoveries_percentage_subtitle").innerText = recoveries_details.since
    
    offset1 = Math.floor(0.3 * covid_data.offset)
    offset2 = Math.floor(0.7 * covid_data.offset)
    
    document.getElementById("total_vaccines").innerText = numFormater(covid_data.total_vaccinated)
    document.getElementById("fully_vaccinated").innerText = (covid_data.fully_vaccinated_total + offset1).toLocaleString()
    document.getElementById("Partially_vaccinated").innerText = (covid_data.partially_vaccinated_total + offset2).toLocaleString()

    //Load high charts
    Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });
    Highcharts.chart('container1', {
        exporting: {
        enabled: false,
        },
        credits: {
            enabled: false
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
                    text: 'Cases'
                }
            },
            tooltip: {
                shared: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    pointIntervalUnit: 'day',
                    pointStart: Date.UTC(2020, 02, 01)
                },
                
            },
            series: [{
                name: 'Cases',
                data: data.cases
        
            }, {
                name: 'Deaths',
                data: data.deaths
        
            }, {
                name: 'Recoveries',
                data: data.recoveries
        
            }]
        });
        
        
        Highcharts.chart('container2', {
            exporting: {
                enabled: false,
            },
            credits: {
                enabled: false
              },
            chart: {
                type: 'column',
                height: 320
            },
            title: {
                text: ''
            },
            xAxis: {
                type: 'datetime',
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Cases'
                }
            },
            tooltip: {
                shared: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.1,
                    borderWidth: 0,
                    dataGrouping: {
                        enabled: true,
                        units: [ ['week', [1]] ]
                    },
       
                    pointIntervalUnit: 'day',
                    pointStart: Date.UTC(2020, 02, 01)
                },
               
        
            },
            series: [{
                name: 'Cases',
                showInLegend: false,
                showInNavigator:true,
                data:data.cases,
                
                color: '#3b7ddd',
                id: 'dataSeries'
        
            }, ...events]
        });
        Highcharts.stockChart('vaccination-graph', {
            exporting: {
            enabled: false,
            },
            credits: {
                enabled: false
            },
            chart: {
            height: 300,
            },
 
            yAxis: {
                min: 0,
                title: {
                    text: 'vaccine doses'
                },
                 
            },
            rangeSelector: {
                enabled: true
            },
            navigator: {
                enabled: false
            },
            xAxis: [{
            type: 'datetime',
            reversed: false,
            labels: {
                overflow: 'justify'
            },
            visible: true

        }],
            tooltip: {
                shared: true,
                valueSuffix: " doses",
                pointFormat: '<span style="color:{series.color}">daily {series.name}</span>: <b>{point.y:,.0f}</b> <br/> <span style="color:{series.color}">total {series.name}</span>: <strong>{point.cumulativeSum:,.0f} </strong><br/>',
            },
            plotOptions: {
                series: {
                    cumulative: true,
                    pointIntervalUnit: 'day',
                    pointStart: Date.UTC(2020, 02, 01)
                },  
            },
            series: [{
                name: 'Vaccinations',
                data: covid_data.vaccinations_daily
        
            },
                {
                name: 'full vaccinations',
                data: covid_data.fully_vaccinated
        
                },
                {
                name: 'partial vaccinations',
                data: covid_data.partially_vaccinated
        
            },
            ]
        });
}

// Run script to initialise Dashboard
loadCharts()


