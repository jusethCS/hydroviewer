# Instalacion de aplicaciones - PRODUCCION
tethys install -d
sudo chown -R ubuntu /home/ubuntu/static && sudo chown -R ubuntu /home/ubuntu/workspaces && tethys manage collectall
sudo chown -R www-data: /home/ubuntu/static && sudo chown -R www-data: /home/ubuntu/workspaces && sudo supervisorctl restart all




# Crear el ambiente
mamba create -n tethys -c conda-forge -c tethysplatform tethys-platform=4.* geoglows=0.27.0 pandas=1.5.2 geopandas=0.14.0 python=3.9.*
pip install pandas-geojson==1.2.0
