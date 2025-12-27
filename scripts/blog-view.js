import { blogs } from '../data/blogs.js'

function renderBlogView() {
    const param = new URLSearchParams(window.location.search)
    const id = param.get("id")

    const blogObj = blogs.filter((blog) => id === blog.id)[0]

    const content = blogObj.content.map((point) => {
        return `${point}`
    }).join('')

    console.log(content)

    let projects = ''
    if (blogObj.gitHubProjects.length > 0) {
        projects = blogObj.gitHubProjects.map((project) => {
            return `<li>${project.title} - <a href="${project.url}" target="_blank">View Project</a>`
        }).join('')
        
        projects = `
            <div class="projects">
                <p><b>Project(s) Links:</b></p>
                <ul>
                    ${projects}
                </ul>
            </div>
        `
    }

    document.querySelector(".blog-view").innerHTML = `
        <div class="headings">
            <p class="date">${blogObj.date}</p>
            <h2>${blogObj.title}</h2>
            <h3>${blogObj.description}</h3>
        </div>
        <img class="blog-image" src="${blogObj.image}">
        <div class="content">
            ${content}
        </div>
        ${projects}
    `
}

renderBlogView()