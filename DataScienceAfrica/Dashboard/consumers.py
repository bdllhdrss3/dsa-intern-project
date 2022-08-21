import json
from channels.generic.websocket import WebsocketConsumer
  
class NotificationSystem(WebsocketConsumer):
    def connect(self):
        # self.groups.append("Notifier")
        print(self.channel_name)
        self.accept()
  
    def disconnect(self, close_code):
        self.close()   
  
    def receive(self, text_data=None,  bytes_data=None):
        self.send({
            'result': text_data + "was recieved"
        })
    def relay(self, event):
        # Handles the "chat.message" event when it's sent to us.
        self.send(text_data=event)