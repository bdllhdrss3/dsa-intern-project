from channels.layers import get_channel_layer
def getCovidFields(obj):
    # obj1 = serializers.serialize("json", obj)
    
    context = {
        # "date":[],
        "deaths": [],
        "cases": [],
        "recoveries":[],
    }
    for x in obj:
        # date = str(x.date.strftime("%d/%m/%Y"))
        # print(date.split('/'))
        context["deaths"].append(x.deaths)
        # context["date"].append(date)
        context["cases"].append(x.covid_cases)
        context["recoveries"].append(x.recovered)
    return context


        # channel_layer = get_channel_layer()
        # print(channel_layer)
        # await channel_layer.send("Users", {
        #     "type": "relay",
        #     "text": "Hello there!",
        # })
async def eee():
    channel_layer = get_channel_layer()
    print(channel_layer)
    await channel_layer.send("Users", {
        "type": "receive",
        "text_data": "Hello there!",
    })