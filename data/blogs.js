import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const blogs = [
    {
        id: getOrCreateId("blog_1"),
        date: "November 14, 2025",
        image: "../images/HTML_and_CSS.jpg",
        title: "HTML & CSS Fundamentals",
        description: "Completed the HTML & CSS Fundamentals module in the Scrimba Full-Stack Developer Career Path. It was an exciting experience that reinforced my understanding of web development basics.",
        content: [
            "In this module, I learned the foundational building blocks of web development. Starting with HTML, I explored semantic elements like header, nav, main, section, and footer to create well-structured, accessible web pages. I practiced using headings, paragraphs, lists, links, and images to build meaningful content.",
            "On the CSS side, I discovered how to style elements using selectors, properties, and values. I learned about the box model (margin, border, padding, content), how to use flexbox for layout, and the importance of responsive design principles. Working with colors, fonts, and spacing helped me understand how to create visually appealing designs.",
            "The hands-on projects were incredibly valuable. Building a Business Card taught me about centering elements and working with borders. The Birthday Site project helped me practice background images and text styling. Finally, the Hometown Site brought everything together, allowing me to create a multi-section webpage with navigation.",
            "<b>Key takeaways:</b>",
            "<ul><li>Semantic HTML improves accessibility and SEO",
            "<li>CSS Flexbox makes layout much easier",
            "<li>The cascade and specificity determine which styles apply",
            "<li>Practice through building real projects is essential for learning<ul>"
        ],
        gitHubProjects: [
            {
                title: "Business Card",
                url: "https://github.com/DracFiendMG/business-card"
            },
            {
                title: "Birthday Site",
                url: "https://github.com/DracFiendMG/birthday-site"
            },
            {
                title: "Hometown Site",
                url: "https://github.com/DracFiendMG/hometown-site"
            }
        ]
    },
    {
        id: getOrCreateId("blog_2"),
        date: "November 20, 2025",
        image: "../images/JS_Fundamentals.jpg",
        title: "JavaScript Fundamentals",
        description: "Completed the JavaScript Fundamentals module in the Scrimba Full-Stack Developer Career Path. This module provided a solid foundation in JavaScript programming concepts and syntax.",
        content: [
            "In this module, I delved into the core concepts of JavaScript programming. I started with understanding variables, data types (strings, numbers, booleans), and basic operators. Learning about functions was particularly exciting, as they are fundamental to writing reusable code.",
            "I explored control flow using conditionals (if, else if, else) and loops (for, while) to create dynamic behavior in my programs. Arrays and objects were introduced as essential data structures for organizing and managing collections of data.",
            "The module also covered important concepts like scope, hoisting, and the difference between var, let, and const. Understanding these concepts helped me write cleaner and more efficient code.",
            "<b>The hands-on projects brought these concepts to life:</b>",
            "<ul><li>Basketball Scoreboard - Built an interactive scoreboard using DOM manipulation and event listeners. I practiced updating the UI dynamically by incrementing scores with button clicks and learned how to reset state.",
            "<li>Password Generator - Created a random password generator that reinforced my understanding of arrays, loops, and Math.random(). I learned to work with character sets and string concatenation to build secure passwords.",
            "<li>Unit Converter - Developed a utility that converts between different units of measurement. This project helped me practice working with user input, performing calculations, and displaying formatted output.</li></ul>"
        ],
        gitHubProjects: [
            {
                title: "Basketball Scoreboard",
                url: "https://github.com/DracFiendMG/basketball-scoreboard"
            },
            {
                title: "Password Generator",
                url: "https://github.com/DracFiendMG/password-generator"
            },
            {
                title: "Unit Converter",
                url: "https://github.com/DracFiendMG/unit-converter"
            }
        ]
    },
    {
        id: getOrCreateId("blog_3"),
        date: "November 21, 2025",
        image: "../images/Tools_of_the_Trade.jpg",
        title: "Tools of the Trade",
        description: "Completed the Tools of the Trade module in the Scrimba Full-Stack Developer Career Path. This module introduced essential tools and workflows used in modern web development. It also covered the command line fundamentals, version control with Git and GitHub, and code editors.",
        content: [
            "In this module, I learned about the various tools that are crucial for efficient web development. I started with version control using Git and GitHub, which allowed me to track changes in my code and collaborate with others effectively.",
            "I also explored the command line interface (CLI), which is a powerful way to interact with my computer and manage files and directories. Learning basic commands like cd, ls, mkdir, and rm helped me navigate and manipulate my project files more efficiently.",
            "The module also covered code editors, specifically Visual Studio Code (VS Code). I learned about useful extensions, themes, and settings that enhance productivity and make coding more enjoyable.",
            "Git and GitHub were particularly exciting to learn. I practiced creating repositories, committing changes, branching, and merging. Understanding how to use pull requests and resolve merge conflicts was invaluable for collaborative projects.",
            "Overall, this module provided me with a solid foundation in the essential tools and workflows used in modern web development. It has equipped me with the skills needed to work efficiently and effectively as a developer."
        ],
        gitHubProjects: []
    },
    {
        id: getOrCreateId("blog_4"),
        date: "November 23, 2025",
        image: "../images/Accessible_Development.jpg",
        title: "Accessible Development",
        description: "In the Accessible Development module of the Scrimba Full-Stack Developer Career Path, I learned about the importance of creating inclusive web experiences for all users, including those with disabilities.",
        content: [
            "This module emphasized the significance of web accessibility and how it impacts user experience. I explored various techniques and best practices to ensure that websites are usable by individuals with diverse abilities.",
            "I learned about semantic HTML and how using proper elements enhances accessibility. For example, using <button> for clickable actions instead of <div> improves keyboard navigation and screen reader compatibility.",
            "The module also covered ARIA (Accessible Rich Internet Applications) attributes, which provide additional context to assistive technologies. I practiced implementing ARIA roles, states, and properties to enhance the accessibility of dynamic content.",
            "Color contrast and typography were also discussed, highlighting the importance of choosing accessible color schemes and readable fonts. I learned to use tools like the WebAIM Contrast Checker to evaluate color combinations.",
        ],
        gitHubProjects: []
    },
    {
        id: getOrCreateId("blog_5"),
        date: "November 27, 2025",
        image: "../images/Essential_CSS.jpg",
        title: "Essential CSS",
        description: "Completed the Essential CSS module in the Scrimba Full-Stack Developer Career Path. This module deepened my understanding of CSS and its capabilities for styling web pages effectively.",
        content: [
            "In this module, I explored advanced CSS concepts and techniques that allow for more sophisticated designs. I learned about the box model in greater detail, including margin collapsing and how to manipulate box dimensions using properties like width, height, padding, and border.",
            "Flexbox was a major focus of this module. I practiced using flex containers and flex items to create responsive layouts that adapt to different screen sizes. Understanding properties like justify-content, align-items, and flex-wrap enabled me to build flexible and dynamic designs.",
            "Alongside Flexbox, I also delved into the other varieties of display properties, such as absolute, relative, and fixed positioning. This knowledge allowed me to control the placement of elements on the page more precisely.",
            "The module also covered CSS specificity and the cascade, helping me understand how styles are applied and overridden. I learned to write more efficient and maintainable CSS by organizing styles and using classes effectively.",
            "Overall, this module enhanced my CSS skills significantly, enabling me to create visually appealing and responsive web designs."
        ],
        gitHubProjects: [
            {
                title: "Oldagram - An Instagram Clone",
                url: "https://github.com/username/oldagram"
            }
        ]
    },
    {
        id: getOrCreateId("blog_6"),
        date: "December 18, 2025",
        image: "../images/Essential_JS.png",
        title: "Essential JavaScript",
        description: "Completed the Essential JavaScript module in the Scrimba Full-Stack Developer Career Path. This module expanded my JavaScript knowledge and introduced me to more complex programming concepts.",
        content: [
            "In this module, I delved deeper into JavaScript programming, exploring advanced topics that are essential for building dynamic web applications. I learned about higher-order functions, which allow functions to accept other functions as arguments or return them as results. This concept is fundamental for functional programming and enables more abstract and reusable code.",
            "I also explored array methods such as map, filter, and reduce, which provide powerful ways to manipulate and transform data collections. These methods helped me write cleaner and more efficient code when working with arrays.",
            "The module covered object-oriented programming (OOP) principles, including the use of classes and prototypes. I learned how to create objects with properties and methods, encapsulating related functionality and promoting code organization.",
            "I practiced using the for...of loop to iterate over arrays and strings, which provides a cleaner syntax compared to traditional for loops. Working with forms and handling user input was another key topic, teaching me how to capture and validate data from form elements.",
            "The setTimeout() function was introduced for scheduling code execution after a delay, which is useful for creating timed behaviors in applications. I also learned about various array methods including forEach for iteration, map for transforming elements, filter for selecting elements based on conditions, includes for checking existence, and join for converting arrays to strings.",
            "Short-circuit evaluation with && and || operators was covered, showing how to write concise conditional logic. The ternary operator (condition ? valueIfTrue : valueIfFalse) provided a compact way to write simple if-else statements inline, making my code more readable and efficient."
        ],
        gitHubProjects: [
            {
                title: "Meme Generator - Spiderman Edition (Pick your favorite Spiderman)",
                url: "https://github.com/DracFiendMG/mememaker"
            },
            {
                title: "Restaurant Ordering App",
                url: "https://github.com/DracFiendMG/restaurant-ordering-app"
            }
        ]
    },
    {
        id: getOrCreateId("blog_7"),
        date: "December 27, 2025",
        image: "../images/Responsive_Design.jpg",
        title: "Responsive Design",
        description: "Completed the Responsive Design module in the Scrimba Full-Stack Developer Career Path. This module focused on creating web pages that adapt seamlessly to different screen sizes and devices.",
        content: [
            "In this module, I learned the principles and techniques of responsive web design. I explored the use of media queries to apply different styles based on the viewport size, allowing for tailored layouts on mobile, tablet, and desktop devices.",
            "I practiced using flexible grid systems and relative units (like percentages and ems) to create fluid layouts that adjust to the screen size. This approach ensures that content remains accessible and visually appealing across various devices.",
            "The module also covered responsive images, teaching me how to use the srcset attribute and the picture element to serve appropriately sized images based on the device's resolution and viewport size. This optimization improves performance and user experience.",
            "I learned about mobile-first design, which involves designing for smaller screens first and progressively enhancing the layout for larger screens. This strategy helps prioritize essential content and functionality for mobile users.",
            "It also introduced me to the concept of breakpoints, which are specific viewport widths where the layout changes to accommodate different screen sizes. I practiced setting breakpoints in my CSS to create distinct layouts for various devices.",
            "Grid layout was another key topic, providing a powerful way to create complex, two-dimensional layouts with rows and columns. I learned how to define grid containers and grid items, and how to control their placement using grid-template-areas, grid-template-rows, and grid-template-columns.",
            "Overall, this module equipped me with the skills to build responsive web pages that provide an optimal viewing experience across a wide range of devices."
        ],
        gitHubProjects: [
            {
                title: "Learning Journal - Responsive Redesign",
                url: "https://github.com/DracFiendMG/learning-journal"
            }
        ]
    }
]

function getOrCreateId(key) {
    const id = localStorage.getItem(`id_${key}`)

    if (id) {
        return id
    } else {
        const newId = uuidv4()
        localStorage.setItem(`id_${key}`, newId)
        return newId
    }
}

export { blogs }