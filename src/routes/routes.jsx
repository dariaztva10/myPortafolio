import { Contact } from "../pages/contact"
import { Home } from "../pages/home"
import { Skills } from "../pages/skills"
import { Projects } from "../pages/projects"


const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/skills",
        element: <Skills />
    },
    {
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/contact",
        element: <Contact />
    } 
]

export default routes