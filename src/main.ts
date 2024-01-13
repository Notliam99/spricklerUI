import './style.css'
import html from './html'


function html_document(html: { [key: string]: any }) {
  let header: string = ''
  for (let index = 0; index < Object.keys(html["header"]).length; index++) {
    header += html['header'][Object.keys(html['header'])[index]]
  }
  let main: string = ''
  try {
    if (typeof (html['main'][location.pathname]) == 'undefined') {
      throw ("path not found")
    }
    main = html["main"][location.pathname]
  } catch (error) {
    console.warn(error)
    location.pathname = '/'
  }
  let footer: string = ''

  const doc: { [key: string]: any } = {
    header: header,
    main: main,
    footer: footer
  }
  return doc
}

document.addEventListener("DOMContentLoaded", () => {
  let htmlDoc = html_document(html);
  console.log(Object.keys(htmlDoc))
  for (let index = 0; index < Object.keys(htmlDoc).length; index++) {
    const temp = <HTMLDivElement>(document.createElement(Object.keys(htmlDoc)[index]))
    temp!.innerHTML = htmlDoc[Object.keys(htmlDoc)[index]]
    document.querySelector<HTMLDivElement>('#app')!.append(temp)
  }
})
