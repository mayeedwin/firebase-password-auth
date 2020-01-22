Firebase Authentication Email Sign-in Boilerplate
=================




Setting up
------------

### ← README.md

That's this file, where you can tell people what your cool website does and how you built it.

### ← index.html

HTNL5 Boilerplate Markup

### ← Auth.css

CSS files add styling rules.

### ← Auth.js

Authentication script.

Firebase initialization
------------------------

Make sure to add Firebase values to `_/config/Firebase.js` as shown below;

```js

  // Initialize Firebase
  let config = {
    apiKey: "#VALUE",
    authDomain: "#VALUE",
    databaseURL: "#VALUE",
    projectId: "#VALUE",
    storageBucket: "#VALUE",
    messagingSenderId: "#VALUE",
    appId: "#VALUE"
  };

  firebase.initializeApp(config);

```