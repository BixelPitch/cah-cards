# Usage
````text
________________    ________________
| What is this |    | A bunch of   |
| repository   |    | text files.  |
| about?       |    |              |
|              |    |              |
|              |    |              |
|              |    |              |
|______________|    |______________|
````
On this note, it is clear what to expect (see [../dist](../dist)).
In the root directory you will always have a ````index.json```` and a ````all.json````. The index file contains some statistics about the collection of card packs and the links to the resource, the ````all.json```` contains (as the name implies) all cards as an array. Beneath these jsons, you have several directories containing the card files for each language.
But there are several methods to access these files.

## Method 1 (preferred)
The preferred way is to use the website https://cah-cards.vercel.app/cards. You can access all above mentioned files under this url, so these links will also work:

https://cah-cards.vercel.app/cards/index.json

https://cah-cards.vercel.app/cards/en/base-game.yml

If you want to use the cards of this project in your own implementation of the game, you don't have to maintain another dependency version and have to make sure to not miss a new version with new cards. Bonus: If you add a periodically job, which crawls the files, your game experience get enhanced automatically without redeploying your app.

## Method 2

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
    |_ all.json
````
If you want to use the cards programmatically, import the cards like:
````js
import * as packs from '@BixelPitch/cah-cards/dist/all.json';
````
while ````packs```` is just a simple array with the following form:
````json
[
  {
    "name": "",           // string
    "authors": [ "" ],    // array of strings, at least one element
    "type": "",           // string
    "translation": null,  // null or string
    "language": "",       // string
    "black_cards": [],    // array of strings
    "white_cards": []     // array of strings
  },
  {
    // ...
  }
]
````