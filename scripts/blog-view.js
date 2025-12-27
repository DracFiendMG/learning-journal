import { blogs } from '../data/blogs.js'

function renderBlogView() {
    const param = new URLSearchParams(window.location.search)
    console.log(param.get("id"))

    document.querySelector("main").innerHTML = `
        <h2>Title</h2>
        <h3>Subtitle</h3>
        <img>
        <p>Content</p>
    `
}

renderBlogView()