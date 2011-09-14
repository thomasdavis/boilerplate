require(
	{
		paths: {
			"cdn-backbone": "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.3/backbone-min",
			"cdn-underscore": "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.1.7/underscore-min"
		}
		
	},
    [
        "require",
		"order!cdn-underscore",
		"order!cdn-backbone",
		"text!2.tpl"


    ], 
    function (require, Backbone, templates ) {
	console.log(templates)
		$("body").append(templates);
        // require(["app"], function (app) {
        //         var appview = new AppView();
        //     });
    }
);