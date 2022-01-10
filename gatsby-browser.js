import './src/global.css'
import { CustomLayout } from './util/customLayout'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

export const wrapPageElement = CustomLayout

export const onInitialClientRender = () => {
  deckDeckGoHighlightElement()
}
