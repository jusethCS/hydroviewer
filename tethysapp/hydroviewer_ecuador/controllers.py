####################################################################################################
##                                   LIBRARIES AND DEPENDENCIES                                   ##
####################################################################################################

# Tethys platform
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from tethys_sdk.routing import controller
from tethys_sdk.gizmos import PlotlyView

# Postgresql
import io
import psycopg2
import pandas as pd
import geopandas as gpd
from sqlalchemy import create_engine
from pandas_geojson import to_geojson

# App settings
from .app import HydroviewerEcuador as app

# App models
from .models.data import *
from .models.plots import *

import requests

####################################################################################################
##                                       STATUS VARIABLES                                         ##
####################################################################################################

# Import enviromental variables 
DB_USER = app.get_custom_setting('DB_USER')
DB_PASS = app.get_custom_setting('DB_PASS')
DB_NAME = app.get_custom_setting('DB_NAME')
SERVER = app.get_custom_setting('SERVER')
APP_NAME = "hydroviewer_ecuador"
APP_URL = APP_NAME.replace("_", "-")


# Generate the conection token
tokencon = "postgresql+psycopg2://{0}:{1}@localhost:5432/{2}".format(DB_USER, DB_PASS, DB_NAME)





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

