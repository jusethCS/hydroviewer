 // ------------------------------------------------------------------------------------------------------------ //
//                                             HTML FOR FLOOD ALERT                                             //
// ------------------------------------------------------------------------------------------------------------ //
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
                            </div>
                            <br>`;

// Add HTML into the control panel
$("#paute")[0].innerHTML = pauteHTML;