import './style.css'
/* import typescriptLogo from './typescript.svg' */
import pages from './pages'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = pages['page']
