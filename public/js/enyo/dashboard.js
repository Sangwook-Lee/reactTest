/*var
	kind = require('enyo/kind'),
	Model = require('enyo/Model');

var DashboardItem = new kind({
	name: "enyo.DashboardItem",
	kind: Model,
	attributes: {
		color: null,
		val: null
	},
	rendered: function () {
		this.inherited();
		this.set('color', this.color);
		this.set('label', this.val+"%");
	}
});


var Dashboard = new kind({
	name: 'enyo.Dashboard',
	published: {
		elapsed: 0,
		factory: null
	},
	rendered: function () {
		this.inherited(arguments);
		this.addItems();
	},
	update: function () {
		this.factory.update();
		this.set('elapsed', this.elapsed + 1);
	},
	addItems: function () {
		var data = this.factory.data;
		for (var i = 0; i < data.length; i++) {
			this.createComponent({kind: "enyo.DashboardItem", color: d.color, val: d.val},{owner: this});
		}
	}
});
*/