# delightful-cookies
A standalone module for dealing with cookies client side.

##Example
```javascript
var dc = require('delightful-cookies');

dc.set('Token', 'j981hf8h1duhsad', 120000);

var cookie = dc.get('Token');

dc.remove('Token');
```

##Methods

####get(cookieName)
returns a string of the cookie's value
```javascript
dc.set('cookie', 'h348fh39fskjh3')

var cookie = dc.get('cookie')
// cookie => 'h348fh39fskjh3'
```

####getAll()
Retrieves all cookies in the browser as an array of cookie objects.
```javascript
var cookies = dc.getAll()
// cookies => [{name: 'cookie', value: 'j9812h9ufbwad79'}, {name: 'cookie2', value: '8932hiuhasfdu'}]
```

####set(name, value[, lifetime])
creates a cookie with name and value that will last until lifetime in minutes.
if lifetime is not set, the cookie will last forever.
```javascript
dc.set('Token', 'oisudfjaf89h12fds'[, 15]);
```

####remove(name)
Removes the cookie that matches the name provided.
```javascript
dc.remove('Token');
```

####removeAll()
Removes all cookies from browser.
```javascript
dc.removeAll()
```
