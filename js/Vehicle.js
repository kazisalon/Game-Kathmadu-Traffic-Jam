// Save as: kathmandu-traffic-game/js/Vehicle.js
class Vehicle {
	constructor(game, type, x, y) {
		this.game = game;
		this.type = type;
		this.x = x;
		this.y = y;
		this.setVehicleProperties();
		this.speed = this.baseSpeed;
		this.direction = 0;
		this.targetPoint = null;
	}

	setVehicleProperties() {
		switch (this.type) {
			case "car":
				this.width = 30;
				this.height = 50;
				this.baseSpeed = 2;
				this.color = "#ff0000";
				break;
			case "bus":
				this.width = 40;
				this.height = 70;
				this.baseSpeed = 1.5;
				this.color = "#0000ff";
				break;
			case "bike":
				this.width = 20;
				this.height = 40;
				this.baseSpeed = 2.5;
				this.color = "#ffff00";
				break;
		}
	}

	update() {
		const nearbyLight = this.checkNearbyTrafficLight();
		if (nearbyLight && nearbyLight.state === "red") {
			this.speed = 0;
		} else {
			this.speed = this.baseSpeed;
		}

		this.x += Math.cos(this.direction) * this.speed;
		this.y += Math.sin(this.direction) * this.speed;

		if (this.x > this.game.canvas.width) this.x = 0;
		if (this.x < 0) this.x = this.game.canvas.width;
		if (this.y > this.game.canvas.height) this.y = 0;
		if (this.y < 0) this.y = this.game.canvas.height;
	}

	draw(ctx) {
		ctx.save();
		ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
		ctx.rotate(this.direction);
		ctx.fillStyle = this.color;
		ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
		ctx.restore();
	}

	checkNearbyTrafficLight() {
		return this.game.trafficLights.find(
			(light) => utils.distance(this.x, this.y, light.x, light.y) < 50
		);
	}

	slow() {
		this.speed = Math.max(0.5, this.speed - 0.5);
		setTimeout(() => (this.speed = this.baseSpeed), 2000);
	}
}
