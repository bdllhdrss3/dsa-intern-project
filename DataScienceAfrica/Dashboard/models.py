from datetime import datetime
from django.db import models

class CovidData(models.Model):
    date = models.DateField(auto_now=False, auto_now_add=False,unique=True)
    covid_cases = models.PositiveIntegerField(default=0)
    number_of_tests_carried_out = models.PositiveIntegerField(default=0)
    recovered = models.PositiveIntegerField(default=0)
    currently_infected = models.PositiveIntegerField(default=0)
    deaths = models.PositiveIntegerField(default=0)
    fully_vaccinated = models.PositiveIntegerField(default=0)
    partially_vaccinated = models.PositiveIntegerField(default=0)
    total_vaccinated  = models.PositiveIntegerField(default=0)
    events = models.TextField(default="",null=True,blank=True)
    context = models.TextField(default="",null=True,blank=True)

    class Meta:
        ordering = ['date']

    def __str__(self):
        return f' covid data {self.date.strftime("%d/%m/%Y")}'

class District(models.Model):
    code =  models.CharField(max_length=15)
    name = models.CharField(unique=True, max_length=100)

    def __str__(self):
        return self.name
    class Meta:
        ordering = ['name']

class SentimentAnalysis(models.Model):
    date = models.DateField(auto_now=True)
    sentence = models.CharField(unique=True, max_length=500)
    analysis = models.CharField(null=True,max_length=100)
    impact = models.CharField(null=True, max_length=100)
    aspects = models.CharField(null=True, max_length=100)

    def __str__(self):
        return self.sentence
    class Meta:
        ordering = ['date']

class CasesPerDistrict(models.Model):
    district = models.ForeignKey(District, on_delete=models.CASCADE)
    date = models.DateField()
    cases = models.PositiveIntegerField(default=0)
        

    def __str__(self):
        return f'{self.date} ({self.district.name}) cases '

    class Meta:
        ordering = ['-date','cases']
        unique_together = (("district", "date"),)