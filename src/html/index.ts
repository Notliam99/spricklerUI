import navBar from "./nav.html?raw"
import home from "./home.html?raw"

const html: { [key: string]: any } = {
  'header': {
    'navBar': navBar
  },
  'main': {
    '/': home
  }
};

export default html
