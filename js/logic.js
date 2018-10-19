/* var app = new Vue({
	el: '#hero-selector',
	data: {
		its: [
			{name:"nam1", gj:100, fy: 110, sd: 70, gc: 8, ml: 90, gjcz: 1.3, fycz: 1.4, sdcz: 0.6, gccz: 0.3, mlcz: 0.8},
			{name:"nam2", gj:100, fy: 110, sd: 70, gc: 8, ml: 90, gjcz: 1.3, fycz: 1.4, sdcz: 0.6, gccz: 0.3, mlcz: 0.8}
			
		]
		
	}
	
}) */
var app = new Vue({
	el: '#app',
	data: {
		gfsx: {
			bl: 10000,
			gj: 100,
			fy: 100,
			ml: 100,
			sd: 50
		},
		sfsx: {
			bl: 10000,
			gj: 100,
			fy: 100,
			ml: 100,
			sd: 50
		},
		zdjg: {
			sh: 0,
			
		}
	},
	methods: {
		calc: function(evt) {
			console.log(this.gfsx);
			console.log(this.sfsx);
			// 4.8*根号bl*
			var sh = 4.8 * Math.sqrt(this.gfsx.bl) * ((200+this.gfsx.gj)/(200+this.sfsx.fy));
			console.log(sh);
			this.zdjg.sh = sh;
		}
		
	}
	
})