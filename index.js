//Initialize a map instance.
var map = new atlas.Map('map', {   
    view: "Auto",
  
    // Add your Azure Maps subscription client ID to the map SDK.
    authOptions: {
      authType: "anonymous",
      clientId: "04ec075f-3827-4aed-9975-d56301a2d663", // Your Azure Maps account Client ID is required to access your Azure Maps account.
  
      getToken: function (resolve, reject, map) {
        //URL to your authentication service that retrieves an Azure Active Directory Token.
        var tokenServiceUrl = "https://azuremapscodesamples.azurewebsites.net/Common/TokenService.ashx";
  
        fetch(tokenServiceUrl).then(r => r.text()).then(token => resolve(token));
      }
    }
  });
  
  //Wait until the map resources are ready.
  map.events.add('ready', function () {
  
    //Create a HTML marker and add it to the map.
    var marker = new atlas.HtmlMarker({
      color: 'DodgerBlue',
      text: '10',
      position: [10, 0],
      popup: new atlas.Popup({
        content: '<div style="padding:10px">Hello World</div>',
        pixelOffset: [10, -30]
      })
    });
  
    map.markers.add(marker);
  
    //Add a click event to toggle the popup.
    map.events.add('click',marker, () => {
      marker.togglePopup();
    });
  });