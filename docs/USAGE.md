# Usage
The preferred way to actually use these resources is to use the REST API: *TBD*

Alternatively you can install this package via
````bash
npm install @bixelpitch/cah-cards
````
and access the static files in the ````dist```` directory:
````
+ node_modules
|_
  + cah-cards
  |_
    + dist
    |_
    | + en
    | |_ base.json
    | |_ base.yml
    |_
    | + de
    | |_ base.json
    | |_ base.yml
    |_ ...
    |_ index.json
````
If you want to use the cards programmatically, import the cards like:
````js
const packs = require('cah-cards');
````