// Save as: kathmandu-traffic-game/js/TrafficLight.js
class TrafficLight {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.state = "red";
		this.timer = 0;
		this.switchInterval = 100;
	}

	update() {
		this.timer++;
		if (this.timer >= this.switchInterval) {
			this.timer = 0;
		}
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
		ctx.fillStyle = this.state;
		ctx.fill();
		ctx.strokeStyle = "#000";
		ctx.lineWidth = 2;
		ctx.stroke();
	}

	toggle() {
		switch (this.state) {
			case "red":
				this.state = "green";
				break;
			case "yellow":
				this.state = "red";
				break;
			case "green":
				this.state = "yellow";
				break;
		}
	}
}
