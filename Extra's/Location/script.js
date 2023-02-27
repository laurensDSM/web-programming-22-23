if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(postion) {
        let lat = postion.coords.latitude
        let lon = postion.coords.longitude
        console.log("Latitude: "+ lat + "\nLongitude: " + lon)
    })
}else
{
    console.log("Geoloaction is not supported by this browser")
}


