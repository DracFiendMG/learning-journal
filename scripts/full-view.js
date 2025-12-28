import { about } from '../data/about.js'
import { blogs } from '../data/blogs.js'

const navLinks = document.querySelector('#nav-links')
const recentPosts = blogs.filter((_, index) => index < 3)

document.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        redirectToBlogView(e.target.dataset.id)
    } else if (e.target.id === 'hamburger') {
        navLinks.style.width = '40%'
    } else if (e.target.id === 'xmark') {
        navLinks.style.width = '0%'
    }
})

function redirectToBlogView(blogId) {
    window.location.href = `blog-view.html?id=${blogId}`
}

function renderMain() {
    const aboutMe = about.aboutMe.map((item) => {
        const description = item.description.map((desc) => {
            return `
                <p>${desc}</p>
            `
        }).join('')
        return `
            <h2>${item.title}</h2>
            ${description}
        `
    }).join('')

    document.querySelector(".hero-post").innerHTML = `
        <div class="hero-post-intro">
            <p class="date">${about.date}</p>
            <h1>
                ${about.title}
            </h1>
            <p>${about.description}</p>
        </div>
        <img class="hero-post-img" src="./images/hero-post-bg.png">
        <div class="hero-post-content">
            ${aboutMe}
        </div>
    `

    document.querySelector(".blogs").innerHTML = recentPosts.map((blog) => {
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