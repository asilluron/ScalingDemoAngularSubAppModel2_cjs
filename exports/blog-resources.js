!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.blogResources=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = angular.module("blog-resources", [])
	.service("Blogs", _dereq_("./resources/Blogs"));	

},{"./resources/Blogs":2}],2:[function(_dereq_,module,exports){
module.exports = function () {
	return {
		query: function (params) {
			return [{
				title: "Totally Different Blog Entry 1",
				summary: "Scenester art party bicycle rights put a bird on it 8-bit VHS cred. Ennui paleo deep v church-key, try-hard chia stumptown organic art party. Godard selfies craft beer, Portland DIY small batch try-hard twee quinoa hashtag polaroid art party Neutra kale chips Thundercats. Occupy Brooklyn keytar, mustache put a bird on it banjo semiotics. Vinyl keytar cliche McSweeney's jean shorts. Fingerstache locavore master cleanse, slow-carb scenester Banksy chillwave. Keytar mumblecore Williamsburg squid, swag Vice American Apparel selvage.",
				author: "Andrew Silluron",
				date: new Date(),
				content: "Scenester art party bicycle rights put a bird on it 8-bit VHS cred. Ennui paleo deep v church-key, try-hard chia stumptown organic art party. Godard selfies craft beer, Portland DIY small batch try-hard twee quinoa hashtag polaroid art party Neutra kale chips Thundercats. Occupy Brooklyn keytar, mustache put a bird on it banjo semiotics. Vinyl keytar cliche McSweeney's jean shorts. Fingerstache locavore master cleanse, slow-carb scenester Banksy chillwave. Keytar mumblecore Williamsburg squid, swag Vice American Apparel selvage."
			},{
				title: "Much Different Blog Entry 2",
				summary: "Jean shorts Pinterest quinoa kale chips. Vice sustainable kogi distillery swag deep v. Single-origin coffee beard wayfarers McSweeney's, typewriter put a bird on it 90's dreamcatcher. Shabby chic letterpress four loko blog jean shorts, sartorial Portland disrupt typewriter gastropub beard pop-up. Vice irony readymade Williamsburg, Austin Tumblr roof party McSweeney's. Carles yr Tumblr, DIY Tonx PBR Helvetica street art Bushwick quinoa iPhone. Tonx try-hard sartorial, Neutra bitters flannel chillwave mustache fashion axe.",
				author: "Kirk Plow",
				date: new Date(),
				content: "Jean shorts Pinterest quinoa kale chips. Vice sustainable kogi distillery swag deep v. Single-origin coffee beard wayfarers McSweeney's, typewriter put a bird on it 90's dreamcatcher. Shabby chic letterpress four loko blog jean shorts, sartorial Portland disrupt typewriter gastropub beard pop-up. Vice irony readymade Williamsburg, Austin Tumblr roof party McSweeney's. Carles yr Tumblr, DIY Tonx PBR Helvetica street art Bushwick quinoa iPhone. Tonx try-hard sartorial, Neutra bitters flannel chillwave mustache fashion axe."
			},
			{
				title: "Hipster Blog Entry 3",
				summary: "Sapiente fanny pack skateboard crucifix veniam excepteur beard aliquip, Intelligentsia farm-to-table. Voluptate ugh hoodie sartorial semiotics cornhole. Typewriter Schlitz McSweeney's, next level polaroid consectetur distillery farm-to-table reprehenderit crucifix lomo bitters elit semiotics. Cray paleo cred, yr letterpress flexitarian culpa voluptate sunt cillum bespoke. Mixtape reprehenderit ethnic plaid iPhone. Wes Anderson single-origin coffee Godard jean shorts cliche. Williamsburg Banksy laborum laboris, disrupt McSweeney's Austin sriracha vegan freegan.",
				author: "Marlin Tether",
				date: new Date(),
				content: "Sapiente fanny pack skateboard crucifix veniam excepteur beard aliquip, Intelligentsia farm-to-table. Voluptate ugh hoodie sartorial semiotics cornhole. Typewriter Schlitz McSweeney's, next level polaroid consectetur distillery farm-to-table reprehenderit crucifix lomo bitters elit semiotics. Cray paleo cred, yr letterpress flexitarian culpa voluptate sunt cillum bespoke. Mixtape reprehenderit ethnic plaid iPhone. Wes Anderson single-origin coffee Godard jean shorts cliche. Williamsburg Banksy laborum laboris, disrupt McSweeney's Austin sriracha vegan freegan."
			},{
				title: "Nope, not here",
				summary: "Tumblr trust fund roof party photo booth deserunt, slow-carb Godard Intelligentsia craft beer locavore plaid labore jean shorts cornhole. Dolore minim hashtag selfies. Keytar organic swag selvage commodo incididunt. Cliche twee fap Truffaut meh. Quis nulla veniam officia, dolor fanny pack selvage McSweeney's mlkshk. Forage shabby chic XOXO, McSweeney's officia next level artisan. Scenester Wes Anderson retro twee.",
				author: "Major Jamon",
				date: new Date(),
				content: "Tumblr trust fund roof party photo booth deserunt, slow-carb Godard Intelligentsia craft beer locavore plaid labore jean shorts cornhole. Dolore minim hashtag selfies. Keytar organic swag selvage commodo incididunt. Cliche twee fap Truffaut meh. Quis nulla veniam officia, dolor fanny pack selvage McSweeney's mlkshk. Forage shabby chic XOXO, McSweeney's officia next level artisan. Scenester Wes Anderson retro twee."
			}];
		}
	};
};
},{}]},{},[1])
(1)
});