import { about } from '../data/about.js'
import { blogs } from '../data/blogs.js'

const viewMore = document.querySelector("#view-more")
const mediaQueryString = '(min-width: 768px)'
const mediaQueryList = window.matchMedia(mediaQueryString)
let blogsList = []
getBlogsBasedOnWindowSize(mediaQueryList)

document.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        redirectToBlogView(e.target.dataset.id)
    } else if (e.target.id === 'view-more') {
        viewMore.classList.add("hidden")
        blogsList = blogs
        renderMain()
    }
})

mediaQueryList.addEventListener('change', getBlogsBasedOnWindowSize)

function getBlogsBasedOnWindowSize(e) {
    if (e.matches) {
        blogsList = blogs.filter((_, index) => index < 6)
    } else {
        blogsList = blogs.filter((_, index) => index < 3)
    }
    renderMain()
    viewMore.classList.remove("hidden")
}

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

    document.querySelector(".blogs").innerHTML = blogsList.map((blog) => {
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