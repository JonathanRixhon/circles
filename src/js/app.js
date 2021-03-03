import Circle from './Circle'
const animation = {
	canvas: document.querySelector('canvas'),
	ctx: null,
	circles: [],
	circlesCount: 100,
	mouse: { x: undefined, y: undefined, zoneSize: 100 },
	init() {
		this.ctx = this.canvas.getContext('2d')
		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight
		/* On peuple le l'array */
		for (let i = 0; i < this.circlesCount; i++) {
			this.circles.push(new Circle(animation))
		}
		/* Ecouteurs d'evenements */
		window.addEventListener('resize', () => {
			this.canvas.width = window.innerWidth
			this.canvas.height = window.innerHeight
		})
		window.addEventListener('mousemove', e => {
			this.mouse.x = e.clientX
			this.mouse.y = e.clientY
		})
		this.animate()
	},
	animate() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.circles.forEach(circle => {
			circle.update()
		})
		window.requestAnimationFrame(() => {
			this.animate()
		})
	},
}

animation.init()
