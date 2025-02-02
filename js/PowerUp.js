// Save as: kathmandu-traffic-game/js/PowerUp.js
class PowerUp {
	constructor(x, y, type) {
		this.x = x;
		this.y = y;
		this.type = type;
		this.width = 30;
		this.height = 30;
		this.active = true;
	}

	draw(ctx) {
		if (!this.active) return;

		ctx.fillStyle = this.type === "speed" ? "#00ff00" : "#ff00ff";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	collect() {
		this.active = false;
	}
}
