class Circle {
	constructor(animation) {
		this.mouse = animation.mouse
		this.ctx = animation.ctx
		this.canvas = animation.canvas
		this.radius = 5 + Math.floor(Math.random() * 10)
		this.maxRadius = Circle.maxRadius * 3
		this.minRadius = this.radius
		this.speed = {
			x: -2 + Math.random() * 4,
			y: -2 + Math.random() * 4,
		}
		this.position = {
			x:
				this.radius +
				Math.floor(Math.random() * (this.canvas.width - 2 * this.radius)),
			y:
				this.radius +
				Math.floor(Math.random() * (this.canvas.height - 2 * this.radius)),
		}
		this.color = Circle.colors.sort(() => 0.5 - Math.random())[0]
		this.update()
	}
	static get maxRadius() {
		return 40
	}
	static get colors() {
		let palette = {
			blue: ['#1A191F', '#6D8B91', '#8EB4C1', '#DACDAC', '#A97D22'],
			red: ['#9D354D', '#E86C5B', '#F5E1A7', '#BEBD81', '#3F7686'],
			vif: ['#C84E50', '#5D7A8D', '#E5D974', '#66D0B4'],
		}
		return palette.red
	}
	update() {
		//checking edges
		this.position.y += this.speed.y
		this.position.x += this.speed.x

		if (
			this.position.y + this.radius > this.canvas.height ||
			this.position.y - this.radius < 0
		) {
			this.speed.y *= -1
		}
		if (
			this.position.x + this.radius > this.canvas.width ||
			this.position.x - this.radius < 0
		) {
			this.speed.x *= -1
		}
		//mouse interaction

		if (
			this.position.x <= this.mouse.x + this.mouse.zoneSize / 2 &&
			this.position.x >= this.mouse.x - this.mouse.zoneSize / 2 &&
			this.position.y <= this.mouse.y + this.mouse.zoneSize / 2 &&
			this.position.y >= this.mouse.y - this.mouse.zoneSize / 2
		) {
			if (this.radius <= this.maxRadius) {
				this.radius += 2
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 0.5
		}

		//

		this.draw()
	}
	draw() {
		this.ctx.fillStyle = this.color
		this.ctx.beginPath()
		this.ctx.arc(
			this.position.x,
			this.position.y,
			this.radius,
			0,
			2 * Math.PI,
			true
		)
		this.ctx.fill()
		this.ctx.closePath()
	}
}
export default Circle
