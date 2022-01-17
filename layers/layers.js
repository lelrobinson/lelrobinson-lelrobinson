var wms_layers = [];


        var lyr_CartoDbPositron_0 = new ol.layer.Tile({
            'title': 'CartoDb Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_CUCEoffices_1 = new ol.format.GeoJSON();
var features_CUCEoffices_1 = format_CUCEoffices_1.readFeatures(json_CUCEoffices_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUCEoffices_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUCEoffices_1.addFeatures(features_CUCEoffices_1);
var lyr_CUCEoffices_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUCEoffices_1, 
                style: style_CUCEoffices_1,
                interactive: true,
                title: '<img src="styles/legend/CUCEoffices_1.png" /> CUCE offices'
            });
var format_CUCESites_2 = new ol.format.GeoJSON();
var features_CUCESites_2 = format_CUCESites_2.readFeatures(json_CUCESites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUCESites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUCESites_2.addFeatures(features_CUCESites_2);
var lyr_CUCESites_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUCESites_2, 
                style: style_CUCESites_2,
                interactive: true,
                title: '<img src="styles/legend/CUCESites_2.png" /> CUCE Sites'
            });
var format_CHNPopups_3 = new ol.format.GeoJSON();
var features_CHNPopups_3 = format_CHNPopups_3.readFeatures(json_CHNPopups_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHNPopups_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHNPopups_3.addFeatures(features_CHNPopups_3);
var lyr_CHNPopups_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHNPopups_3, 
                style: style_CHNPopups_3,
                interactive: true,
                title: '<img src="styles/legend/CHNPopups_3.png" /> CHN Popups'
            });
var format_ChurchPopUpSites_4 = new ol.format.GeoJSON();
var features_ChurchPopUpSites_4 = format_ChurchPopUpSites_4.readFeatures(json_ChurchPopUpSites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChurchPopUpSites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChurchPopUpSites_4.addFeatures(features_ChurchPopUpSites_4);
var lyr_ChurchPopUpSites_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChurchPopUpSites_4, 
                style: style_ChurchPopUpSites_4,
                interactive: true,
                title: '<img src="styles/legend/ChurchPopUpSites_4.png" /> Church Pop Up Sites'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_CUCEoffices_1.setVisible(true);lyr_CUCESites_2.setVisible(true);lyr_CHNPopups_3.setVisible(true);lyr_ChurchPopUpSites_4.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_CUCEoffices_1,lyr_CUCESites_2,lyr_CHNPopups_3,lyr_ChurchPopUpSites_4];
lyr_CUCEoffices_1.set('fieldAliases', {'office': 'office', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CUCESites_2.set('fieldAliases', {'Site name': 'Site name', 'Address': 'Address', 'Zipcode': 'Zipcode', 'programs h': 'programs h', });
lyr_CHNPopups_3.set('fieldAliases', {'date': 'date', 'program': 'program', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'zipcode': 'zipcode', 'Dose': 'Dose', 'Vaccine': 'Vaccine', 'Actual # Vaccines': 'Actual # Vaccines', });
lyr_ChurchPopUpSites_4.set('fieldAliases', {'Church Based Vac. Site': 'Church Based Vac. Site', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CUCEoffices_1.set('fieldImages', {'office': '', 'address': '', 'Latitude': '', 'Longitude': '', });
lyr_CUCESites_2.set('fieldImages', {'Site name': '', 'Address': '', 'Zipcode': '', 'programs h': '', });
lyr_CHNPopups_3.set('fieldImages', {'date': '', 'program': '', 'address': '', 'Latitude': '', 'Longitude': '', 'zipcode': '', 'Dose': '', 'Vaccine': '', 'Actual # Vaccines': '', });
lyr_ChurchPopUpSites_4.set('fieldImages', {'Church Based Vac. Site': '', 'Latitude': '', 'Longitude': '', });
lyr_CUCEoffices_1.set('fieldLabels', {'office': 'inline label', 'address': 'inline label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_CUCESites_2.set('fieldLabels', {'Site name': 'inline label', 'Address': 'inline label', 'Zipcode': 'inline label', 'programs h': 'inline label', });
lyr_CHNPopups_3.set('fieldLabels', {'date': 'inline label', 'program': 'inline label', 'address': 'inline label', 'Latitude': 'no label', 'Longitude': 'no label', 'zipcode': 'no label', 'Dose': 'inline label', 'Vaccine': 'inline label', 'Actual # Vaccines': 'inline label', });
lyr_ChurchPopUpSites_4.set('fieldLabels', {'Church Based Vac. Site': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_ChurchPopUpSites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});