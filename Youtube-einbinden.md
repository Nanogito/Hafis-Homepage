## Youtube Videos richtig einbinden ##

#### Problem ####
Mit der bislang verw. Funktion "Video einfügen" in MyWebsite hat man keine Möglichkeit, das Video im erw. Datenschutzmodus einzubinden, denn man hat keinerlei Einfluss auf den Code, der das Video von Youtube holt.

#### Lösungsansätze ####
Man kann den spez. Code für den erw. Modus innerhalb von MyWebsite auf verschiedene Arten einbringen:

  * a) händisch (mit "Element einfügen" | "Widget/HTML")
  * b) weiteren Code schreiben, der dann den spez. Code für erw. Modus in die Seite "injiziert"

Ansatz a) bedeutet *zwangsläufig*:

  * man muss es für jedes neue Video wiederholen
  * man muss wissen was man tut
  * ist später kaum nachzuvollziehen
  * man ist eingeschränkt, was das Layout betrifft
  * es wird in jedem Fall Kontakt zu Youtube/Google aufgenommen, egal ob man das Video schaut oder nicht

**Ansatz b) ist was wir jetzt (2018-07-02) haben**, da nötig für das "Layout mit Umlauftext".

##### Ansatz b) eröffnet weitere Möglichkeiten ######
Allerdings: die aktuelle Implementierung ist eher primitiv, denn ich habe nur soviel gemacht, wie für die Lösung des Layout-Problems nötig war.

Daher bestehen folgende Probleme nach wie vor - sie sind aber jetzt lösbar:

  1. man muss ganz genau wissen was man tut
  2. man muss es für jedes neue Video wiederholen
  3. jemand anderes wird nicht ohne weiteres nachvollziehen können, wie die Sache im Detail funktioniert - und wird mit Sicherheit erstmal was falsch machen. Übrigens: zu "jemand anderes" zähle ich ausdrücklich auch mein eigenes Zukunfts-Ich, sagen wir in drei Wochen (sic!)
  4. der Zeitpunkt, wann die Daten von Youtube/Google geholt werden ist fix: kurz bevor der Besucher die Seite zu sehen bekommt.
  5. Erweiterung für andere Dienste wie vimeo oder MyVideo etc.?

Etwa ein Tag Programmieraufwand **elimiert Defizite 1. und 2., ist Voraussetzung für die Lösung von 3. (fehlte noch Doku/Tutorial), und macht uns flexibel bzgl. 4. und 5.**
(Das allein soll jetzt aber bitte noch *keine* realistische und komplette Aufwandsabschätzung darstellen! Dazu später.)

##### In Bezug auf die Rücksprache mit dem Anwalt ist v.A. 4. wichtig: #####

  - wir könnten garantieren, dass absolut kein Kontakt mit Youtube/Google aufgenommen wird, solange der Besucher nicht aktiv auf das Video klickt
  - wenn der Besucher das doch tut, könnten wir sogar noch einen Dialog mit Hinweis und Abbruchmöglichkeit davorschalten. **Das wird "beispielhaft" genannt** in dem Artikel vom Anwalt: ["DIE AUFSICHTSBEHÖRDE MACHT’S VOR"](https://www.projekt29.de/youtube-videos-datenschutzkonform-einbinden/) (der "Aber"-Hinweis auf Typo3 ist für uns nicht relevant - wir können das).
  - von allen Videos, die der Besucher *nicht* ansieht, bekommt Youtube/Google garantiert nicht einmal mit, dass sie dem Besucher auf Deiner Site überhaupt angeboten wurden.

#### Aufwandsabschätzung ####
TODO