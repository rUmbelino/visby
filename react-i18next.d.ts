import 'react-i18next'
import { Resources as MyResources } from './@types/i18n.types'

declare module 'react-i18next' {
  // and extend them!
  interface Resources extends MyResources {}
}