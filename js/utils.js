// Save as: kathmandu-traffic-game/js/utils.js
const utils = {
	randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	distance(x1, y1, x2, y2) {
		return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
	},

	isColliding(rect1, rect2) {
		return !(
			rect1.x + rect1.width < rect2.x ||
			rect2.x + rect2.width < rect1.x ||
			rect1.y + rect1.height < rect2.y ||
			rect2.y + rect2.height < rect1.y
		);
	},
};
