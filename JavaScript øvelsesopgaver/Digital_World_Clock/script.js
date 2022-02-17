const url = "http://worldtimeapi.org/api/timezone/";

const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", () => {
  console.log(dropdown.value);
  worldtimeapiFetch(url + dropdown.value);
});

const worldtimeapiFetch = function (url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      /*{
  "abbreviation": "CET", 
  "client_ip": "87.59.14.119",
  "datetime": "2022-02-17T21:01:50.952225+01:00", <----
  "day_of_week": 4,
  "day_of_year": 48,
  "dst": false,
  "dst_from": null,
  "dst_offset": 0,
  "dst_until": null,
  "raw_offset": 3600,
  "timezone": "Europe/Copenhagen", <----
  "unixtime": 1645128110,
  "utc_datetime": "2022-02-17T20:01:50.952225+00:00",
  "utc_offset": "+01:00", <----
  "week_number": 7
        }*/
    });
};
