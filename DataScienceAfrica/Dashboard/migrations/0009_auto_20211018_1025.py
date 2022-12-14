# Generated by Django 3.2.5 on 2021-10-18 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dashboard', '0008_alter_coviddata_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='coviddata',
            options={'ordering': ['date']},
        ),
        migrations.AddField(
            model_name='coviddata',
            name='fully_vaccinated',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='coviddata',
            name='partially_vaccinated',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='coviddata',
            name='total_vaccinated',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
