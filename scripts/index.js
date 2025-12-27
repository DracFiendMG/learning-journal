import { about } from '../data/about.js'
import { blogs } from '../data/blogs.js'

document.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        redirectToBlogView(e.target.dataset.id)
    }
})

function redirectToBlogView(blogId) {
    window.location.href = `blog-view.html?id=${blogId}`
}

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
            <div class="blog" data-id="${blog.id}">
                <img src="${blog.image}" alt="Laptop with a program opened on it's IDE">
                <p class="date">${blog.date}</p>
                <h1>${blog.title}</h1>
                <p>${blog.description}</p>
            </div>
        `
    }).join('')
}

renderMain()