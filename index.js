module.exports = {
	// Gets every cookie in the browser
	getAll: function(){
		// Splits cookie string into individual cookie strings in an array
		let cookies = document.cookie.split(';');
		// Takes the cookies array and creates an object for each cookie.
		cookies.forEach((cookie, i) => {
			let cookieArray = cookie.split('=')
			cookies[i] = {
				name: cookieArray[0],
				value: cookieArray[1],
			}
		})
		// Check if cookies array has any valid elements
		if (cookies.length == 1 && cookies[0].name == "" && cookies[0].value == undefined) {
			return [];
		}

		return cookies;
	},
	// Gets the cookie with the name specified
	get: function(cookieName){
		// Splits cookie string into individual cookie strings in an array
		cookies = this.getAll();
		// Finds the "AuthToken" cookie and returns it
		let result;
		cookies.forEach(cookie => {
			if (cookie.name === cookieName){
				result = cookie;
			}
		})
		if (result)
			return result.value;
		else
			return undefined;
	},
	// Sets a cookie with the desired information. Life is in minutes.
	set: function(name, value, lifetime){
		lifetime = lifetime * 60 * 1000;
		var date = new Date();
		date.setTime(date.getTime() + lifetime);
		var cookie = `${name}=${value}; `;
		if (lifetime) {
			console.log("lifetime", lifetime)
			cookie += `expires=${date.toGMTString()}`;
		}

		document.cookie = cookie
	},

	remove: function(cookieName) {
		document.cookie = cookieName + '=;expires=Fri, 19 Mar 1993 00:00:00 GMT';
	},

	removeAll: function() {
		this.getAll().forEach(cookie => {
			document.cookie = cookie.name + '=;expires=Fri, 19 Mar 1993 00:00:00 GMT';
		})
	}
}
