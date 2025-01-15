import { Application } from "@hotwired/stimulus";
const application = Application.start()
window.Stimulus = application

//front need add:
//  <body data-controller="scroll-animation"
//  <main class="relative" data-scroll-animation-target="container">
import scroll_animation_controller from "./scroll_animation_controller";
application.register('scroll-animation', scroll_animation_controller)

