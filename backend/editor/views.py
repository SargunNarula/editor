from django.shortcuts import render

from django.http import HttpResponse, JsonResponse

from rest_framework          import status
from rest_framework.views    import APIView
from rest_framework.parsers  import JSONParser, MultiPartParser, FormParser
from rest_framework.response import Response

from django.views.decorators.csrf import csrf_exempt

import requests


# Create your views here.
class submit(APIView):

    parser_classes = (JSONParser,)


    def get(self, request, *arg, **kwargs):
        
        return HttpResponse('output')
        #return None

    @csrf_exempt
    def post(self, request, *arg, **kwargs):

        #print('\n\n',request.data)
        url = 'https://api.jdoodle.com/v1/execute'

        #print(request.data["lang"])
        #print(request.data["code"])
       
        #print("\n\n")
        
        myobj = { "script" : request.data['code'],
                  "language": request.data['lang'],
                  "versionIndex": "0",
                  "clientId": "4ecbe1de83c55b2ed7dd221760779ef3",
                  "clientSecret":"89da25df05d144bb14817b939889f8577732bb3cd90da121b32fdce5e8dedc09"
                }

        
        head = {  "Content-Type": "application/json" }

        x = requests.post(url, headers=head , json=myobj)

        x = x.json()
       
        if "error" in x.keys():
            #print(x['error'])
            #print(x['statusCode'])
            result = x['error'] + x['statusCode']
            return Response(result)
        else:
            #print(x['output'])
            result = x['output'] 
            #print(result)


            """original_stdout = sys.stdout
            sys.stdout      = open('/home/sargun/Desktop/Data/_Custom5/editor/src/components/file.txt', 'w') 
              #change the standard output to the file we created

            #execute code
            exec(request.data["code"])  #example =>   print("hello world")

            sys.stdout.close()

            sys.stdout = original_stdout  #reset the standard output to its original value

            # finally read output from file and save in output variable

            output = open('/home/sargun/Desktop/Data/_Custom5/editor/src/components/file.txt', 'r').read()
            """

        return Response(result)


