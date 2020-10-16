Firebase Password Authentication
=================

You can use [Firebase Authentication](https://firebase.google.com/products/auth) to let your users authenticate with Firebase using their email addresses and passwords, and to manage your app's password-based accounts. This Boillerplate is a Signin one, where your App users can easily login to your App.

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

## Before you begin

  1. [Add Firebase](https://firebase.google.com/docs/web/setup) to your JavaScript project.
  
  2. If you haven't yet connected your app to your Firebase project, do so from the Firebase console.
  
  3. Enable Email/Password sign-in:
  
   a) In the [Firebase console](https://console.firebase.google.com/), open the Auth section.
    
   b) On the Sign in method tab, enable the **Email/password** sign-in method and click Save.
   You can manually add users in the Authentication tab, set their passwords!
   
Make sure to add Firebase values to `_/config/Firebase.js` as shown below or as in **step 1.**

```js

  // Initialize Firebase
  const config = {
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
