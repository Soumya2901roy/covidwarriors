const filterTable = document.getElementById('demo');
const searchBar = document.getElementById('searchBar');
let displayData = [];

console.log(searchBar);
searchBar.addEventListener('keyup',(e) => {
    const searchString = e.target.value.toLowerCase();
    
    const filteredData = displayData.filter((dataEntry) => {
        return (
            dataEntry[3].toLowerCase().includes(searchString) ||
            dataEntry[4].toLowerCase().includes(searchString)
        );
    });
    console.log(filteredData);
    displayCharacters(filteredData); 
});
const loadCharacters = async () => {
    try {
        const res = await fetch('https://spreadsheets.google.com/feeds/list/1DHriJ1GNtfdtbVR191v8YAJq83-Nyw6asDxLEO5jacs/od6/public/values?alt=json');
        allJson = await res.json();
        let data = allJson.feed.entry;
        for (i = 0; i < data.length; i++){
            displayData[i] = [data[i].gsx$fullname.$t,data[i].gsx$bloodtype.$t,data[i].gsx$phonenumber.$t,data[i].gsx$city.$t,data[i].gsx$state.$t] ;
        }
        console.log(displayData);
        displayCharacters(displayData);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (displayData) => {
    const htmlString = displayData
        .map((dataEntry) => {
            return `
            <tr>
            <td>${dataEntry[0]}</td>
            <td>${dataEntry[1]}</td>
            <td>${dataEntry[3]}</td>
            <td>${dataEntry[4]}</td>
            <td>${dataEntry[2]}</td></tr>
   
        `;
        })
        .join('');
    demo.innerHTML = htmlString;
};

loadCharacters();
