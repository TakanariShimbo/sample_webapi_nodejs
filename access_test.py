import json
import requests


def access_test(webapi_url):
    data_dict = {
        "value1": "test_value1",
        "value2": 999
    }
    data_json = json.dumps(data_dict)
    headers = {
        'Content-Type': 'application/json',
    }
    response = requests.post(webapi_url, data=data_json, headers=headers)
    print(response.content.decode('UTF-8'))
   
    
if __name__ == '__main__':
    webapi_url = "https://obvious-far-cashew.glitch.me/api"
    # webapi_url = "http://localhost:3000/api"
    access_test(webapi_url)
