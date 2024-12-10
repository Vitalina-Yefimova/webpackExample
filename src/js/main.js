import '../styles/style.scss'
import { greeting } from './script'
import image from '../img/word-hey.jpg'

const imgElement = document.createElement('img')
imgElement.src = image
imgElement.alt = 'Image with word Hey'

const button = document.querySelector('button')
button.addEventListener('click', greeting)