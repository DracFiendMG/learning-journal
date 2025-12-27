import { blogs } from '../data/blogs.js'

function renderBlogView() {
    const param = new URLSearchParams(window.location.search)
    const id = param.get("id")

    const blogObj = blogs.filter((blog) => id === blog.id)[0]
    console.log(blogObj)

    const content = blogObj.content.map((point) => {
        console.log(point)
        return `<p>${point}</p>`
    }).join('')

    document.querySelector(".blog-section").innerHTML = `
        <div class="headings">
            <p class="date">${blogObj.date}</p>
            <h2>${blogObj.title}</h2>
            <h3>${blogObj.description}</h3>
        </div>
        <img class="blog-image" src="${blogObj.image}">
        <div class="content">
            ${content}
        </div>
    `

    document.querySelector(".projects-section").innerHTML = `
        <img src="">
    `
}

renderBlogView()