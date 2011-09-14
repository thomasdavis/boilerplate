require(
    [
        "require",
        "order!backbone",
		"text!home.tpl"


    ], 
    function (require, Backbone, templates ) {
	console.log(require);
		$("body").append(templates);
        require(["app"], function (app) {
            var appview = new AppView();
        });
    }
);