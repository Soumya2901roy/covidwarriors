let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let i;
    for (i = 0; i < data.length; i++) {
      let name = data[i]["gsx$fullname"]["$t"];
      let bloodGroup = data[i]["gsx$bloodtype"]["$t"];
      let phnNum = data[i]["gsx$phonenumber"]["$t"];
      let city = data[i]["gsx$city"]["$t"];
    //   console.log(city)
      let state = data[i]["gsx$state"]["$t"];

      document.getElementById("demo").innerHTML +=
        "<tr>" +
        "<td>" +
        name +
        "</td>" +
        "<td>" +
        bloodGroup +
        "</td>" +
        "<td>" +
        city +
        "</td>" +
        "<td>"+
        state +
        "</td>" +
        "<td>"+
        phnNum +
        "</td>" +
        "</tr>";
    }
  }
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1DHriJ1GNtfdtbVR191v8YAJq83-Nyw6asDxLEO5jacs/od6/public/values?alt=json",
  true
);
xmlhttp.send();