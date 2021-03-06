var tutorList = document.getElementById('tutor-list');
var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", Links)

function myTutor() {
    fetch(`https://randomuser.me/api/?results=10`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.results) {
            data.results.forEach(result => {
                console.log(result.picture.large)
                html += `
                <section>
                    <img class="teacher-img" src="${result.picture.large}" alt="teacher">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod voluptates ex voluptatem pariatur illum dolores non eos impedit unde magnam?</p>
                    <p>${result.email}</p>
                    <button> <a href="https://codeasylums.com/" target="_blank">View Course</a></button>
                </section>
                `
            })
        }    
        tutorList.innerHTML= html;
        console.log(data.results)
    })
}

function Links() {
    let links = document.getElementById("nav-links")
    if( links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block"
    }
   
    console.log('clicked')
}
myTutor()

