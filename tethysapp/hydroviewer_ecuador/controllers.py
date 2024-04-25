from django.shortcuts import render
from tethys_sdk.routing import controller


# App settings
#from .app import HydroviewerEcuador as app



####################################################################################################
##                                       STATUS VARIABLES                                         ##
####################################################################################################

# Import enviromental variables 
#DB_USER = app.get_custom_setting('DB_USER')
#DB_PASS = app.get_custom_setting('DB_PASS')
#DB_NAME = app.get_custom_setting('DB_NAME')

#APP_URL = APP_NAME.replace("_", "-")

# Generate the conection token
#tokencon = "postgresql+psycopg2://{0}:{1}@localhost:5432/{2}".format(DB_USER, DB_PASS, DB_NAME)


APP_NAME = "hydroviewer_ecuador"
SERVER = "https://inamhi.geoglows.org/"

####################################################################################################
##                                   CONTROLLERS AND REST APIs                                    ##
####################################################################################################
@controller #(name='home', url=APP_URL)
def home(request):
    context = {
        "server": SERVER,
        "app_name": APP_NAME
    }
    return render(request, '{0}/home.html'.format(APP_NAME), context)

