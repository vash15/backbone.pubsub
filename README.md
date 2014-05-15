Pubsub
======

PubSub for the browser


## Install

```
	bower install backbone.pubsub --save
```

## Usage

```js
	var PubSub = require("backbone.pubsub");

	var pubSub = new PubSub();

	pubSub.on("custom:trigger", function(data){
		console.log("Custom trigger fire!!", data);
	});


	setTimeout(function(){
		pubSub.trigger("custom:trigger", {custom: data});
	}, 5000);

```

## License

**MIT**