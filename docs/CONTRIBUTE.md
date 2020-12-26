# How to contribute
You found a typo? A bad translation? Want another file type to be supported? No problem, we got you covered.
Starting point is creating an issue on GitHub, because except blatant typos, every change on the cards content
is arguable. If things were clarified in a discussion and you want to check in your correction or submission,
fork this repository, do you work on the development branch and create a pull request.

## Submitting a new card pack
Create a new yml file at ````src/cards/xx/your-new-pack.yml````, where ````xx```` should match the language 
code of the language you chose to write the content. The file name must be the name of the pack and should 
be written in kebab-case (lower case, minus as word separation).

Example pack:
````yml
# The name of your card pack. Should match the file name whilst not being against the naming convention.
name: 'Example Pack'
# The authors, that's at least you! Enter your nick name or your github user name.
authors:
  - 'BixelPitch'
# There are three types of card packs:
# - "original": It was created by your own or someone else, but it is not part of
#   official extent
# - "official": I think we all know which type that is.
# - "translation": If you translated a original or official pack here in this repository,
#   it should have this type.
type: 'original'
# If the pack is a translation of an existing pack, mention the pack you translated
# in the following manner: <language code>/<pack name>. Example:
# 'en/Example Pack'
# Important to say, that not the file name is meant here!
translation:
# The language of this pack.
language: 'en'
# Now the fun part: The cards!
# For the black cards there are some things to be known:
# - Gaps are marked with three underscores "___".
# - If no gap is given, the cards are interpreted as having one at the end of
#   the sentence
# - Take care of correct spacing before and after the gap symbols. Just imagine
#   replacing a gap with a word of your choice and ask yourself the question:
#   "Does this sentence looks well formatted now?" 
# - Take care of trailing spaces of each string.
# - Black cards are allowed to have punctuations.
# - If a card needs line breaks, use "\n"
# And for the white cards:
# - No punctuation is allowed. This makes things easier when it comes to an real
#   implementation based on this repository when inserting white cards into black ones.
# - Again, take care of trailing spaces!
black_cards:
  - 'This is a gap ___.'
  - "If it's an open question, don't insert a gap symbol. See?"
  ...
white_cards:
  - 'GitHub Contributors'
  - 'BEES'  
  ...
````

# Creating a translation
This process is not much different than creating a new pack. Simply copy the yml
you want to translate and edit the content, but check out the following first:
* Don't forget to set the value ````type: "translated"```` and set the correct value
for the property ````translation````!
* Empty the list of the authors and write down your own name.
* Change the ````language```` field to the new language code.

A last general thing to mention: The aim of this repository is to deliver quality,
so make sure your translation is a good one. Because it's hard to define "good" in
this context, don't hestitate to open up an issue for discussion if you are not sure.

Another thing: Translate the meaning, not the words. For example the official packs
has a lot of cards in dedication to the U.S., like topics, debates and persons, which
may not be present or known in your country. And what happens if you pick up a card 
with a name of an politician you don't know? Right, you don't play it. When working
on an translation, replace things which are known in your country - this makes stuff
way more funny. For example there is a white card "Mike Pence" in the official base
pack. This guy was getting popular outside of the U.S. in the presidential election,
but so popular that you will laugh at every context this card is played? Try find an
equivalent pick of your country - every country has some conservative old white men
in high political positions, right? :)
