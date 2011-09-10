var regc = {
  "Northland":"01",
  "Auckland":"02",
  "Waikato":"03",
  "Bay of Plenty":"04",
  "Gisborne":"05",
  "Hawkes Bay":"06",
  "Taranaki":"07",
  "Manawatu-Wanganui":"08",
  "Wellington":"09",
  "West Coast":"10",
  "Canterbury":"11",
  "Otago":"12",
  "Southland":"13",
  "Tasman":"14",
  "Nelson":"15",
  "Marlborough": "16"
};


var statehood = {
  "Northland": "December 7, 1787",
  "Auckland": "December 12, 1787",
  "Waikato": "January 2, 1788",
  "Bay of Plenty": "January 9, 1788",
  "Gisborne": "February 6, 1788",
  "Hawkes Bay": "April 28, 1788",
  "Taranaki": "June 25, 1788",
  "Manawatu-Wanganui": "July 26, 1788",
  "Wellington": "March 4, 1791",
  "West Coast": "June 1, 1792",
  "Canterbury": "June 1, 1796",
  "Otago": "March 1, 1803",
  "Southland": "April 30, 1812",
  "Tasman": "December 11, 1816",
  "Nelson": "December 10, 1817",
  "Marlborough": "December 3, 1818",
};

// Parse dates and convert to regc codes.
var states = {};
for (var state in statehood) {
  states[regc[state]] = new Date(statehood[state]);
}

var tonnage = {"Southland":19207,"Manawatu-Wanganui":370380,"Hawkes Bay":246089,"Gisborne":14000,"Wellington":747604,"Canterbury":868958,"Taranaki":100000,"Otago":322717,"Bay of Plenty":126000,"Auckland":2169877,"Waikato":597700,"Marlborough":30760,"Chatham Islands":1014,"Northland":247233,"Tasman":87300,"Nelson":46500,"West Coast":25900}

var tonnes = {}
for (var t in tonnage) {
  tonnes[regc[t]] = tonnage[t];
}
