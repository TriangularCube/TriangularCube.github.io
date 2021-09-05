import './src/global.css'
import ReactDOM from 'react-dom'
import { CustomLayout } from './util/customLayout'
import { Prism } from 'prism-react-renderer'

(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-java')
require('prismjs/components/prism-kotlin')
require('prismjs/components/prism-csharp')

export const wrapPageElement = CustomLayout

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
