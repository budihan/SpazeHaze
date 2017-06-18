Criteria inleveropdracht uit de modulewijzer
- De code van het project staat op github. Er is een Readme bestand met een installatiehandleiding.
- De game is online speelbaar via een deelbare url.
- Er zijn geen bugs.
- De game heeft een startscherm, spelscherm en eindscherm
- Er is een klassendiagram gemaakt van de game. Deze is als afbeelding toegevoegd aan het Readme bestand.
- Het project maakt gebruik van de OOP principes uit de lessen. In het readme bestand wordt toegelicht hoe deze principes gebruikt zijn. 
- De principes zijn: Classes en instances, Encapsulation, Composition, Inheritance

----------------------------------------------------------------------------------------------------------------------------------

Installatiehandleiding:
Om het spel te spelen moet u al de bestanden kloonen, vervolgens start je de game door in de docs map de index.html in de browser te starten. Ook kunt op www.spazehaze.budihan.nl het spel spelen.

------------------------------------------------------------------------------------------------------------------------------------

UML Diagram:

 ![uml](https://user-images.githubusercontent.com/15815389/27265102-b903c790-548f-11e7-8c3c-3945c3123516.PNG)
 
-------------------------------------------------------------------------------------------------------------------------------------

OOP Principes(Zie UML Diagram):
- Classes en instances
  - Als voorbeeld neem ik de player class. In de level.ts is te zien dat er een player instance wordt aangemaakt met het woord 'new'
- Encapsulation
  - Als voorbeeld neem ik de ship class. De ship klass heeft properties die zijn kinderen ook heeft. Daarom zijn deze properties PROTECTED, zodat zijn kinderen nog wel bij de properties kunnen komen. Ook wil je ervoor zorgen dat de properties PRIVATE zijn zodat propertie waardes niet van buitenaf worden bewerkt. Om toch bij deze private properties te komen gebruik je PUBLIC getters.
- Composition
  - De game HEEFT een view (zijn start, level en stop). De level heeft schepen (zijn enemy en player), score, EnemyWave(heeft enemy) en een bullet-array. Verder HEEFT elk ship ook een gun
- Inheritance
  - Als voorbeeld neem ik de ship class. Dit is de parent van de player en enemy klass, want een enemy IS een ship en een player IS ook een ship




