import Sketch from "./app";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/all";


let animation = new Sketch({
	dom: document.getElementById('container')
})


gsap.to(animation.settings, {
	duration: 3,
	progress: 1,
	ease: 'expo.inOut'
})

let container = document.getElementById('wrapper')

gsap.to('.wrapper', {
	x: '-1000px',
	scrollTrigger: {
		trigger: '#container',
		pin: true,
		scrub: 1,
		onUpdate: (self) => {
			animation.time = self.progress * 100.
		}
	}
})