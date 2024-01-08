import './style.css'
/* import typescriptLogo from './typescript.svg' */
import htmlPages from './pages'

var document_inserted = false

function html_document(pages: Object) {
  let header: string = pages["header"]
  let main: string = pages["main"]
  let footer: string = ''

  return {
    'header': header,
    'main': main,
    'footer': footer
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let html = html_document(htmlPages);
  let header = <HTMLDivElement>(document.createElement('header'));
  header!.innerHTML = html['header'];
  let main = <HTMLDivElement>(document.createElement('main'));
  main!.innerHTML = html['main']
  document.querySelector<HTMLDivElement>('#app')!.append(header, main)
  document_inserted = true
})
