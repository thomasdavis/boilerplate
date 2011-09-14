


var AppView = Backbone.View.extend({
	el: $(".dashboard-overview"),
	initialize: function(){
		var view = this;
		var WidgetRouter = Backbone.Router.extend({
			initialize: function(){
				this.route("", "defaultRoute", function(){console.log("Asd")})
				this.route("/view/:panelName", "changeOverview", view.something);
			}
		});
		new WidgetRouter();
		Backbone.history.start();
	},
	something: function(panelName){
		$(".categories a").removeClass("selected")
		$('a[href="#/view/' + panelName + '"]').addClass("selected")
		$(".summary", this.el).html( _.template( $( "#" + panelName + "_summary_template").html(), {} ) );
	}

});