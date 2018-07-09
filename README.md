## [www.lernhilfe-hafis.de](https://www.lernhilfe-hafis.de) ##

* Was hier wann von wem gemacht wurde: https://github.com/meisl/hafis/commits/master
* [WinHTTrack/](WinHTTrack) enthält ein mit [WinHTTrack](http://www.httrack.com/) erstelltes Backup.
* [MyWebsite/](MyWebsite) enthält Resourcen für die Website, wie Bilder, eigenes Javascript etc. (mehr in: [MyWebsite/README.md](MyWebsite/README.md))
* [scratch/](scratch) ("Schmierzettel") enthält Sachen die noch einzuordnen sind
* [i/](i) enthält Icons (![check](i/check.png), ![question](i/question.png), ...) und screenshots, die in der Dokumentation - also den `.md`-Dateien verwedentet werden.

---
#### Eigenes Javascript in MyWebsite ####
Es wird eigenes Javascript verwendet: Details in [MyWebsite/README.md](MyWebsite/README.md) bzw. für Entwickler: [MyWebsite/Code-organization-and-tests.md](MyWebsite/Code-organization-and-tests.md). Ein Hinweis aber gleich hier:

#### Achtung: Probleme mit Umlauten (ä, ö, ü, ß, ...) ####
WinHTTrack (und vmtl. auch git) hat Probleme mit Umlauten in Pfadnamen.
Das betraf die Unterseite "Förderer", die nun (intern) unter [/f-oerderer/](WinHTTrack/Hafis/www.lernhilfe-hafis.de/f-oerderer/index.html) zu finden ist.

Da der MyWebsite Baukasten es nicht erlaubt, Beschriftung und Ziel der Buttons unabhängig zu setzen, hätte man

  - entweder den Ärger mit WinHTTrack
  - oder eine hässliche Beschriftung wie "Foerderer"

Dieses Problem zu beheben ist eine der Funktionen des eigenen Javascript-Codes (aber nicht die einzige!).