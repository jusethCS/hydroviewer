const pauteHTML = `<div class="control control-group">
                            <div class="alert-panel-checkbox">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="cpaute">
                                    <label class="form-check-label" for="cpaute">Cuenca del río Paute</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="scpaute">
                                    <label class="form-check-label" for="scpaute">Subcuencas del río Paute</label>
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="embalses">
                                    <label class="form-check-label" for="embalses">Embalses</label>
                                </div>
                            </div>
                            <br>`;

// Add HTML into the control panel
$("#paute")[0].innerHTML = pauteHTML;


fetch(`${server}/static/hydroviewer_ecuador/geojson/cuenca_paute.geojson`)
    .then((response) => (layer = response.json()))
    .then((layer) => {
        cuenca_paute = L.geoJSON(layer, { style: {color: "#000000", weight: 2.5, fillOpacity: 0.1} })
    });

fetch(`${server}/static/hydroviewer_ecuador/geojson/subcuencas_paute.geojson`)
    .then((response) => (layer = response.json()))
    .then((layer) => {
        subcuencas_paute = L.geoJSON(layer, { style: {color: "#000000", weight: 1.5, fillOpacity: 0.1} })
    });

fetch(`${server}/static/hydroviewer_ecuador/geojson/embalses.geojson`)
    .then((response) => (layer = response.json()))
    .then((layer) => {
        embalses = L.geoJSON(layer)
    });

$('#cpaute').on('change', function () {
    if($('#cpaute').is(':checked')){
        cuenca_paute.addTo(map);
        map.fitBounds(cuenca_paute.getBounds());
    } else {
        map.removeLayer(cuenca_paute); 
    };
});

$('#scpaute').on('change', function () {
    if($('#scpaute').is(':checked')){
        subcuencas_paute.addTo(map);
        map.fitBounds(subcuencas_paute.getBounds());
    } else {
        map.removeLayer(subcuencas_paute); 
    };
});

$('#embalses').on('change', function () {
    if($('#embalses').is(':checked')){
        embalses.addTo(map);
        map.fitBounds(embalses.getBounds());
    } else {
        map.removeLayer(embalses); 
    };
});




