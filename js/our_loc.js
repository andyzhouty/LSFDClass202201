window.onload = showMap
function showMap() {
    var map = new BMap.Map("map");
    map.disableBizAuthLogo();
    var point = new BMap.Point(121.532988, 31.32133);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(true);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
}
