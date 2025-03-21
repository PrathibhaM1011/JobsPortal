
let container = document.getElementById("container");
const url = 'https://level-illustrious-azimuth.glitch.me/jobs';
let loader = document.getElementById("loader-container");

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '931904d7abmshd1248ddd5d45fe5p196f73jsn0351504c085d',
		'x-rapidapi-host': 'linkedin-job-search-api.p.rapidapi.com'
	}
};
async function getData() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Invalid or failed to fetch: ${response.status}`);
        }
        const result = await response.json();

        // Using setTimeout to delay execution
        setTimeout(() => {
            displayData(result);
        }, 4000); // 4 seconds delay

    } catch (err) {
        console.error(err.message);
    }
}

getData();

function displayData(obj) {
    console.log(obj);
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous content

    obj.forEach((element, index) => {
        let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <p style="color:red;"> JOB TITLE : <span style="color:black"> ${element.title}</span></p>
            <p style="color:red;"> Organization: <span style="color:black"> ${element.organization}</span></p>
            <img src="${element.organization_logo}" style="height:200px; width:200px; border-radius:50%; padding:5px">
            <p style="color:red;"> Job Seniority : <span style="color:black"> ${element.seniority}</span></p>
            <a href="${element.url}" target="_blank">View Job</a>      
        `;

        // Apply animation delay
        item.style.animationDelay = `${index * 0.1}s`;

        container.appendChild(item);
    });

    loader.remove();
}

window.addEventListener("DOMContentLoaded", function(){
    getData();
})