import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default class Map {
    static init () {
        let map = document.querySelector('#map');
        if (map === null) {
            return
        }
        let icon =  L.icon({
            iconUrl: '/images/marker-icon.png',
        })
        let center = [map.dataset.lat, map.dataset.lng];
        map = L.map('map').setView(center, 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            minZoom: 12,
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibmVvc3VrYWlyYWluIiwiYSI6ImNrNXIxeW9mdjA3eWIzbW5sMnU2cDJ2YjYifQ.9LIRsy5_EGHjYf_5CN2X2A'
        }).addTo(map);
        L.marker(center, {icon: icon}).addTo(map)
    }
}