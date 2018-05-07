var mymap = L.map('shelter').setView([25.7617, -80.1918], 9);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; CartoDB',
    maxZoom: 20,
    // id: 'mapbox.streets',
    // accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var pawIconBlue = L.icon({
    iconUrl: 'js/paw_blue.png',
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

var pawIconGreen = L.icon({
    iconUrl: 'js/paw_green.png',
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

var shelterData = [
  {
    lat: 25.805682,
    lng: -80.325176,
    desc: "<strong>MDC Animal Services</strong><br>(305) 884-1101<br>3599 NW 79th Ave<br>Doral, FL 33122"
  },




// Non-Profits
{
  lat: 25.6459786,
  lng: -80.3367941,
  desc: "<strong>Paws 4 You</strong><br>(786) 242-7377<br>8717 SW 134th St<br>Miami, FL 33176"
},
];

for(i = 0; i < shelterData.length; i++) {
  L.marker([shelterData[i].lat, shelterData[i].lng], { icon: pawIconBlue }).addTo(mymap).bindPopup(shelterData[i].desc)
}

var shelterNonProfit = [
{
  lat: 25.6459786,
  lng: -80.3367941,
  desc: "<strong>Paws 4 You</strong><br>(786) 242-7377<br>8717 SW 134th St<br>Miami, FL 33176"
},
{
  lat: 25.6554545,
  lng: -80.4083607,
  desc: "<strong>Big Hearts For Big Dogs Rescue</strong><br>(786) 242-7377<br>12051 SW 131st Ave<br>Miami, FL 33186"
},
{
  lat: 25.5049419,
  lng: -80.456722,
  desc: "<strong>Dogs In Crisis</strong><br>(786) 479-7861<br>16241 SW 282nd St<br>Homestead, FL 33033"
},
{
lat: 25.9226595,
lng: -80.1577571,
desc: "<strong>Humane Society of Greater Miami</strong><br>(305) 696-0800<br>16101 W Dixie Hwy<br>North Miami Beach, FL 33160"
},
{
  lat: 25.5714906,
  lng: -80.3647487,
  desc: "<strong>Humane Society of Greater Miami</strong><br>(305) 749-1854<br>10700 SW 211th St<br>Miami, FL 33189"
},
{
  lat: 25.7431232,
  lng: -80.2399183,
  desc: "<strong>Animal Welfare Society of South Florida</strong><br>(305) 858-3501<br>2601 SW 27th Ave<br>Miami, FL 33133"
},

];

for(i = 0; i < shelterNonProfit.length; i++) {
  L.marker([shelterNonProfit[i].lat, shelterNonProfit[i].lng], { icon: pawIconGreen }).addTo(mymap).bindPopup(shelterNonProfit[i].desc)
}
