import "./config";

import FeatureLayer from "esri/layers/FeatureLayer";
import ArcGISMap from "esri/Map";
import MapView from "esri/views/MapView";
import Legend from "esri/widgets/Legend";






  var template = {
    // autocasts as new PopupTemplate()
    title: "{NAME} in {COUNTY}",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "B12001_calc_pctMarriedE",
            label: "Married %"
          },
          {
            fieldName: "B12001_calc_numMarriedE",
            label: "People Married"
          },
          {
            fieldName: "B12001_calc_numNeverE",
            label: "People that Never Married"
          },
          {
            fieldName: "B12001_calc_numDivorcedE",
            label: "People Divorced"
          }
        ]
      }
    ]
  };

  var featureLayer = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/ACS_Marital_Status_Boundaries/FeatureServer/2",
    popupTemplate: template
  });
 // Create a FeatureLayer


  // Create the Map and add the featureLayer defined above
  var map = new ArcGISMap({
    basemap: "gray",
    layers: [featureLayer]
  });
 // Create the MapView
 const view = new MapView({
  map,
  container: "app",
  extent: {
    spatialReference: {
      wkid: 102100
    },
    xmax: -13581772,
    xmin: -13584170,
    ymax: 4436367,
    ymin: 4435053
  }
});

view.ui.add(new Legend({ view: view }), "bottom-left");