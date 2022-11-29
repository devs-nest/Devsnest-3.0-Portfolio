const projects = [{
    title: "Netflix Clone",
    description: "Netflix clone built using React, tailwind and Headless UI",
    coverUrl: "https://screenshot-proxy.netlify.app/f_avif,w_400/https://d33wubrfki0l68.cloudfront.net/6384cf1727e2837c8bf48bd3/screenshot_2022-11-28-15-09-17-0000.png",
    demoLink: "https://netflix-clone-dn3.netlify.app/",
    sourceLink: ""
},
{
    title: "Ecommerce App",
    description: "Ecommece app built using React, Material UI, Redux Toolkit",
    coverUrl: "https://screenshot-proxy.netlify.app/f_avif,w_400/https://d33wubrfki0l68.cloudfront.net/6384cf1727e2837c8bf48bd3/screenshot_2022-11-28-15-09-17-0000.png",
    demoLink: "https://netflix-clone-dn3.netlify.app/",
    sourceLink: "https://github.com/devs-nest/dn3-ecommerce-app"
},
{
    title: "Spotify Clone",
    description: "Spotify Clone created using Vanilla JS, Tailwind CSS, Vite",
    coverUrl: "https://screenshot-proxy.netlify.app/f_jpg,w_400/https://d33wubrfki0l68.cloudfront.net/6364b8ef2b514000096450a7/screenshot_2022-11-04-07-02-55-0000.png",
    demoLink: "https://spotify-clone-gs.netlify.app/",
    sourceLink: "https://github.com/devs-nest/DN3-SpotifyClone"
},
{
    title: "Weather App",
    description: "Uses geolocaiton and open weather api. Created using JS, HTML, CSS",
    coverUrl: "https://screenshot-proxy.netlify.app/f_jpg,w_400/https://d33wubrfki0l68.cloudfront.net/6364b8ef2b514000096450a7/screenshot_2022-11-04-07-02-55-0000.png",
    demoLink: "https://netflix-clone-dn3.netlify.app/",
    sourceLink: "https://github.com/devs-nest/DN3-Frontend-Streams/tree/main/Day%2013%20%26%2014%20-%20Weather%20app"
},
];


function loadProjects() {
    const projectsList = document.querySelector("#projects .projects-list");

    let innerHTML = "";
    for (const { title, description, coverUrl, demoLink, sourceLink } of projects) {
        innerHTML += `
        <section class="project shadow move-y">
            <section class="image-container">
              <img loading="lazy" src="${coverUrl}" alt="">
            </section>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul class="links">
              <li><a href="${demoLink}" target="_blank">Demo</a></li>
              <li><a href="${sourceLink}" target="_blank"><img width="30" height="30" src="github.svg" alt="octocat iamge"> Source Code</a></li>
            </ul>
          </section >

        `
    }
    projectsList.innerHTML = innerHTML;


    // </section >
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
})