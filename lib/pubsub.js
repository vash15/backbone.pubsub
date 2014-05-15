;(function(){

var _ = require('underscore');
var Backbone = require('backbone');

var PubSub = module.exports = _.extend({}, Backbone.Events);

PubSub.middleware = function () {
	var self = this;
	return function (shared, next) {
		shared.pubsub = self;
		next();
	}
}

PubSub.trigger = function trigger( eventName ){
	var args = [].slice.call(arguments, 1);
	var self = this;
	var compositEventName = [];

	_(eventName.split(":")).forEach(function( anEventName ){
		
		compositEventName.push( anEventName );

		(function( triggerEventName ){
			var triggerArgs = [ triggerEventName ];
			Backbone.Events.trigger.apply( self, triggerArgs.concat(args) );
		})(compositEventName.join(":") );

	});

}

})();