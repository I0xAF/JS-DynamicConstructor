import { model } from './model'
import { Site } from './site'
import '../styles/index.css'

const site = new Site('#el')

site.render(model)

