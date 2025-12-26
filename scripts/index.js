import { about } from '../data/about.js'
import { blogs } from '../data/blogs.js'

function renderMain() {
    document.querySelector(".hero-post").innerHTML = `
        <p class="date">${about.date}</p>
        <h1>
            ${about.title}
        </h1>
        <p>${about.description}</p>
    `

    document.querySelector(".blogs").innerHTML = blogs.map((blog) => {
        return `
            <div class="blog">
                <img src="${blog.image}" alt="Laptop with a program opened on it's IDE">
                <p class="date">${blog.date}</p>
                <h1>${blog.title}</h1>
                <p>${blog.description}</p>
            </div>
        `
    }).join('')
}

renderMain()