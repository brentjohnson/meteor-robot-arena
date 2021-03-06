this.Robot = function(num, cell) {
	var self = this;
	self.num = num;
	self.cell = cell;
	self.cell.robot = self;
	self.life = 3;
	self.score = 0;
};

_.extend(Robot.prototype, {
	name: function() {
		return 'PLAYER ' + this.num;
	},
	radius: function() {
		return ROBOT_RADIUS;
	},
	x: function() {
		return this.cell.x() + this.cell.width()/2;
	},
	
	y: function() {
		return this.cell.y() + this.cell.height()/2;
	},
	class_name: function() {
		return this.isDead == true ? 'dead' : 'robot-' + this.num;
	},
	die: function() {
		this.isDead = true;
		this.life = 0;
	}
});