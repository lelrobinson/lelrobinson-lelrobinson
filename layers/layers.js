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
var format_CHNPopupSites_3 = new ol.format.GeoJSON();
var features_CHNPopupSites_3 = format_CHNPopupSites_3.readFeatures(json_CHNPopupSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHNPopupSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHNPopupSites_3.addFeatures(features_CHNPopupSites_3);
var lyr_CHNPopupSites_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHNPopupSites_3, 
                style: style_CHNPopupSites_3,
                interactive: true,
                title: '<img src="styles/legend/CHNPopupSites_3.png" /> CHN Popup Sites'
            });
var format_CHNPopupsChurches_4 = new ol.format.GeoJSON();
var features_CHNPopupsChurches_4 = format_CHNPopupsChurches_4.readFeatures(json_CHNPopupsChurches_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHNPopupsChurches_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHNPopupsChurches_4.addFeatures(features_CHNPopupsChurches_4);
var lyr_CHNPopupsChurches_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHNPopupsChurches_4, 
                style: style_CHNPopupsChurches_4,
                interactive: true,
                title: '<img src="styles/legend/CHNPopupsChurches_4.png" /> CHN Popups Churches'
            });

lyr_CartoDbPositron_0.setVisible(true);lyr_CUCEoffices_1.setVisible(true);lyr_CUCESites_2.setVisible(true);lyr_CHNPopupSites_3.setVisible(true);lyr_CHNPopupsChurches_4.setVisible(true);
var layersList = [lyr_CartoDbPositron_0,lyr_CUCEoffices_1,lyr_CUCESites_2,lyr_CHNPopupSites_3,lyr_CHNPopupsChurches_4];
lyr_CUCEoffices_1.set('fieldAliases', {'office': 'office', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CUCESites_2.set('fieldAliases', {'Site name': 'Site name', 'Address': 'Address', 'Zipcode': 'Zipcode', 'programs h': 'programs h', });
lyr_CHNPopupSites_3.set('fieldAliases', {'date': 'date', 'program': 'program', 'address': 'address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'zipcode': 'zipcode', 'Dose': 'Dose', 'Vaccine': 'Vaccine', 'Actual # V': 'Actual # V', });
lyr_CHNPopupsChurches_4.set('fieldAliases', {'Church Bas': 'Church Bas', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CUCEoffices_1.set('fieldImages', {'office': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_CUCESites_2.set('fieldImages', {'Site name': '', 'Address': '', 'Zipcode': '', 'programs h': '', });
lyr_CHNPopupSites_3.set('fieldImages', {'date': 'TextEdit', 'program': 'TextEdit', 'address': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'zipcode': 'TextEdit', 'Dose': 'TextEdit', 'Vaccine': 'TextEdit', 'Actual # V': 'TextEdit', });
lyr_CHNPopupsChurches_4.set('fieldImages', {'Church Bas': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_CUCEoffices_1.set('fieldLabels', {'office': 'inline label', 'address': 'inline label', });
lyr_CUCESites_2.set('fieldLabels', {'Site name': 'inline label', 'Address': 'inline label', 'Zipcode': 'inline label', 'programs h': 'inline label', });
lyr_CHNPopupSites_3.set('fieldLabels', {'date': 'inline label', 'program': 'inline label', 'address': 'inline label', 'zipcode': 'inline label', 'Dose': 'inline label', 'Vaccine': 'inline label', 'Actual # V': 'inline label', });
lyr_CHNPopupsChurches_4.set('fieldLabels', {'Church Bas': 'inline label', });
lyr_CHNPopupsChurches_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});