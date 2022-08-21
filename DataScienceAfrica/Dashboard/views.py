from datetime import datetime
from django.shortcuts import render
from django.db.models import Sum
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CovidData, District, CasesPerDistrict, SentimentAnalysis
from .serializers import CovidModelSerializer, DistrictModelSerializer
from .helpers import getCovidFields, eee
from .ml_models.sentimentAnalysis import predict



# def aboutView(request):
#     template = 'about.html'
#     return  render(request,template)

def indexView(request):
    template = 'index.html'
    return render(request,template)

def blogsView(request):
    template = 'blogs.html'
    return render(request,template)

def blog2View(request):
    template = 'blog2.html'
    return render(request,template)

def covidView(request):
    template = 'covid.html'
    return  render(request,template)

def mapView(request):
    template = 'map.html'
    return  render(request,template)

def sentimentAnalysisView(request):
    template = 'sentimentAnalysis.html'
    return  render(request,template)

def dataView(request):
    template = 'data.html'
    return  render(request,template)

def testView(request):
    template = 'test.html'
    return  render(request,template)
    

# API endpoints

@api_view(['GET'])
def dasboardView(request):
    if request.method == 'GET':
        prev_date = CovidData.objects.first().date
        latestObj =  CovidData.objects.order_by('-date')[:2] 
        latest = {"date":latestObj[0].date, 
                   "cases": latestObj[0].covid_cases, 
                   "recoveries": latestObj[0].recovered,
                   "deaths":latestObj[0].deaths,
                   "deaths_previous_day": latestObj[1].deaths,
                   "recoveries_previous_day": latestObj[1].recovered,
                   "cases_previous_day": latestObj[1].covid_cases
            }
        cases = CovidData.objects.aggregate(Sum('covid_cases'))
        recoveries = CovidData.objects.aggregate(Sum('recovered'))
        deaths = CovidData.objects.aggregate(Sum('deaths'))
        partially_vaccinated_total = CovidData.objects.aggregate(Sum('partially_vaccinated'))
        fully_vaccinated_total = CovidData.objects.aggregate(Sum('fully_vaccinated'))
        total_vaccinated = CovidData.objects.aggregate(Sum('total_vaccinated'))
        data = CovidData.objects.all()
        serializer =CovidModelSerializer(data, many=True)
        vaccinations_daily = CovidData.objects.values('total_vaccinated')
        partially_vaccinated = CovidData.objects.values('partially_vaccinated')
        fully_vaccinated = CovidData.objects.values('fully_vaccinated')

        total_fully_vaccinated = fully_vaccinated_total["fully_vaccinated__sum"]
        total_partially_vaccinated = partially_vaccinated_total["partially_vaccinated__sum"]
        total_vaccines = total_vaccinated["total_vaccinated__sum"]
        if((total_fully_vaccinated + total_partially_vaccinated)!= total_vaccines):
            offset = total_vaccines - (total_fully_vaccinated + total_partially_vaccinated)
        else:
            offset = 0

        return Response({
            "total_cases":cases["covid_cases__sum"],
            "total_recoveries": recoveries["recovered__sum"],
            "deaths": deaths["deaths__sum"],
            "offset":offset,
            "total_vaccinated": total_vaccinated["total_vaccinated__sum"],
            "fully_vaccinated_total": fully_vaccinated_total["fully_vaccinated__sum"],
            "partially_vaccinated_total": partially_vaccinated_total["partially_vaccinated__sum"],
            "latest": latest,
            "all_cases":serializer.data,
            "vaccinations_daily": [x["total_vaccinated"] for x in vaccinations_daily],
            "partially_vaccinated": [x["partially_vaccinated"] for x in partially_vaccinated],
            "fully_vaccinated": [x["fully_vaccinated"] for x in fully_vaccinated]
            })


@api_view(['GET'])
def mapDataView(request):
    if request.method == 'GET':
        map_data = District.objects.exclude(code='None').annotate(total=Sum('casesperdistrict__cases')).order_by('-total')
        prev_date = CasesPerDistrict.objects.order_by('-date').first().date
        print(prev_date)
        # recent =  District.objects.filter(casesperdistrict__date = prev_date).annotate(total=Sum('casesperdistrict__cases')).order_by('-total')
        recent =  CasesPerDistrict.objects.select_related('district').filter(date = prev_date).order_by('-cases')
        top = map_data[0:5]
        top_five = []
        recent_top_five = []
        for item in top:
            top_five.append([item.name,item.total])
        for item in recent[0:5]:
            recent_top_five.append([item.district.name,item.cases])
        serializer =DistrictModelSerializer(map_data, many=True)
        return Response({"top":top_five,"recent":recent_top_five,"map_data":serializer.data,"last_update":prev_date })

@api_view(['GET'])
def mapDataByDate(request):
    if request.method == 'GET':
        start = request.GET.get('start', '')
        end = request.GET.get('end', '')
        prev_date = CasesPerDistrict.objects.order_by('-date')[0].date
        map_data = District.objects.exclude(code='None').filter(casesperdistrict__date__gte = start,casesperdistrict__date__lte = end).annotate(total=Sum('casesperdistrict__cases')).order_by('-total')
        serializer =DistrictModelSerializer(map_data, many=True)
        
    return Response({"start":  request.GET.get('start', ''),"end":request.GET.get('end', ''),"map_data":serializer.data,})

@api_view(['GET'])
def sentimentAnalysis(request):
    data = request.GET.get('sentiment','')
    result = predict(data)
    try:
        model = SentimentAnalysis.objects.create(sentence = result['sentence'],analysis= result['analysis'])
    except:
        pass
    
    return  Response(result)
 
@api_view(['GET'])
def update(request):
    # eee()
    if request.method == 'GET':
        prev_date = CovidData.objects.last().date
        latestObj =  CovidData.objects.order_by('-date')[:2]
        latest = {"date":latestObj[0].date, 
                   "cases": latestObj[0].covid_cases, 
                   "recoveries": latestObj[0].recovered,
                   "deaths":latestObj[0].deaths,
                   "vaccines":latestObj[0].total_vaccinated
            }
        return Response(latest)
