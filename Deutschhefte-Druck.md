### Druckerei ###

[bis500 die Onlinedruckerei](https://www.bis500druck.de): Parameter wie Format, Bindung, Papier etc. auswählen und "druckbares PDF" hochladen.

#### Preisbeispiele (Stand Nov. 2018): ####
* Bruttopreis bei 19% Mwst. pro Exemplar etwa 2,56 €, ges. 512 € (200x 40 Seiten A4 + Umschlag, alles in Farbe, Rückendrahtheftung, Kartoncover)
* mit Außenkaschierung des Covers käme das obige Bsp. auf ges. 602 € brutto (3,01 € pro Exemplar).

### DIN A Maße in cm, inches und Pixeln ###
Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Papierformat#ISO-_und_DIN-Papierformate)

#### Definition ####
A0 hat
* eine Fläche 1 m²
* ein Seitenverhältnis von 1 zu Wurzel aus 2 (*nicht:* goldener Schnitt), d.h. die längere Seite hat ca. 141% der kürzeren
* um das nächstkleinere Format (A0 -> A1, A1 -> A2, etc.) zu erhalten wird die jeweils längere Seite halbiert - durch die spezielle Wahl des Seitenverhältnisses bleibt es in allen so abgeleiteten Formaten erhalten.

#### Konkret: A4 und A3 ####
Nach der obigen Definition ergeben sich "krumme" Werte in mm.
In der Praxis wird deshalb auf ganze mm gerundet und eine Toleranz vorgegeben.

* DIN A4 (hochkant): 210 x 297 mm bzw. 8,268 x 11,693 inches.
Bei 300 dpi ("dots per inch", ~11,8 Punkte/mm): 2480 x 3508 Pixel.
* DIN A3 (quer): 420 x 297 x 420 mm bzw. 16,535 x 11,693 inches.
Bei 300 dpi: 4960 x 3508 Pixel.

Die offizielle Toleranz beträgt ±1,5 mm bei Maßen bis 150 mm (±2 mm bis 600 mm und darüber ±3 mm).

1,5 mm entsprechen:

* bei 600 dpi: ~35,4 Pixel
* bei 300 dpi: ~17,7 Pixel
* bei 200 dpi: ~11,8 Pixel
* bei 150 dpi: ~8,9 Pixel
* bei 100 dpi: ~5,9 Pixel


#### Beschnittzugabe ####
Für randlosen Druck 
und um bei Heftung die Breitenzunahme von innen nach außen ausgleichen zu können
wird üblicherweise ein Rand von 3 mm auf jeder Seite zugegeben.
Für A4 ergibt das dann 216 x 303 mm (aka A4+).
Das ist auch die Seitengröße in den bisherigen Arbeitsdaten (pdfs, sh. unten).

Mit diesem Rand ergäben sich bei 300 dpi für A4+ 2551,18 x 3578,74 Pixel, um aber auf jeder Seite einen Rand von genau 36 Pixeln zu haben werden 2552 x 3580 Pixel verwendet.



### Bemerkungen zu den bisherigen Arbeitsdateien ###

Von den bislang erschienen Heften sind folgende Arbeitsdateien vorhanden:

* `DEUTSCHHEFT_1_Arbeitsdatei_Druck.pdf`: "Mein fabelhaftes Deutschheft 1", Erstauflage 2016
* `TIERSTABEN_LAYOUT_DINA4_002.pdf`: "Buch der labyrinthischen Tierstaben", Erstauflage 2016

Aufgrund der Diskrepanzen zu den Endprodukten (Details sh. unten) können dies aber nicht die finalen Dateien sein, die bei www.bis500druck.de hochgeladen wurden.

#### `DEUTSCHHEFT_1_Arbeitsdatei_Druck.pdf` (44+4 Seiten, 197 MB) ####
- 300 dpi
- TODO: Die vier Cover-Seiten (hinten/vorn x außen/innen) finden sich im pdf  als diese Seiten:
  * außen hinten (S. 1)
  * außen vorne (S. 2)
  * innen vorne (S. 3)
  * innen hinten - **nicht vorhanden**. Im fertigen Produkt befinden sich dort Vorschaubilder für Deutschheft 2 (alt: Pippi-Langstrumpf-Motiv) und Deutschheft 3 sowie der Text von Petra, "Deutsch leichter lernen..."  
- die Bilder sind (fast) alle 2550 Pixel breit und variieren in der Höhe zwischen 3507 und 3580 Pixeln (Frontcover ist 3507 Pixel hoch mit zwei extra Streifen oben und unten).
  - TODO...

#### `TIERSTABEN_LAYOUT_DINA4_002.pdf` (36+4 Seiten, 69 MB) ####
- 150 dpi
- TODO: Cover-Seiten im pdf als die *letzten* vier, und zwar in dieser Reihenfolge:
  * innen hinten (S. 37)
  * außen hinten (S. 38)
  * außen vorne (S. 39)
  * innen vorne (S. 40)
- es sind Seiten enthalten, die fertigen Produkt nicht auftauchen
- sehr viele Unsauberkeiten in den Scans (Fussel auf dem Scannerglas)
- auf manchen Seiten fehlt die Seitenzahl (z.B. Seite 21, K - die Katze)
- auf manchen Seiten fehlt das "&copy; Petra Cordua" (z.B. Seite 22, M - die Maus)
- eingebettete Bilder bedecken nicht die ganze Seite, sondern sind verschieden groß, und um die Ränder (einigermaßen) gleich zu bekommen sind sie individuell auf der jeweiligen Seite platziert
- einige Seiten sind ungünstig beschnitten:
  * 03: S - der Schwan (schlimm - evtl. auf Seite 2 ausdehnen?)
  * 10: V - der Vogel
  * 18: W - der Wal
  * 25: O - der Ozelot
  * 26: I - der Igel (schlimm)
  * 30: Y - der Yak (schlimm)
- das Bild von Seite 19, Z - das Zebra, ist um 180° gedreht (korrigiert durch Transformation in pdf)
- die Labyrinthe auf Seite 16, A - die Ameise, und 13, X - das Xaun, sind anders als die anderen: das Ziel ist innen anstatt ein Ausgang, und (wohl deshalb) sind Start und Ziel mit "X" markiert anstatt mit Pfeilen
- bei dem "der-die-das"-Rätsel auf Seite 31 fehlt "der Elefant", stattdessen gibt es "die Ente" (5. von oben links; Labyrinth ist mit Elefant)
- Elemente wie Seitenzahl und &copy; sind als einzelne (Mini)-Bilder drübergelegt
- Seite 32, Zuordnung aller Anfangsbuchstaben zu Tieren, ist aus vielen einzelnen Elementen zusammengesetzt:
  * "&copy; Petra Cordua"
  * Seitenzahl
  * die bunten Anfangsbuchstaben mit Linien als ein großes Bild
  * jedes kleine Tierbild einzeln - in Foxit Reader lassen sich aber nur Xaun, Yak und Zebra markieren (und exportieren), die anderen sind leider durch das große Anfangsbuchstaben-Bild überdeckt 
- das hintere Innencover (Vorschau auf andere Titel & Text von Petra) ist aus einzelnen Elementen zusammengesetzt; der Text als richtiger Text im pdf gespeichert


Bei 150 dpi (`TIERSTABEN_LAYOUT_DINA4_002.pdf`) jeweils die Hälfte 

### Bilder aus .pdf extrahieren ###
#### IrfanView ###
Grundsätzlich kann IrfanView .pdf-Dateien lesen und auch schreiben,
das läuft aber über Plugins. Man kann entweder das Postscript-Plugin
oder das sog. PDF-Plugin verwenden. Letzteres ist in der Standardinstallation
enthalten, muss aber erst aktiviert werden: Einstellungen | Plugins | PDF Optionen. Dort Haken setzen bei "Use (new) PDF.DLL Plugin for PDF loading"
und auch bei "Use (new) PDF.DLL Plugin for PDF saving".
Außerdem bei "Set DPI:" 300 eintragen (96 ist voreingestellt).

Nun kann man das .pdf in IrfanView öffnen. Mit den Rauf/Runter-Pfeilen in der Toolbar navigiert man durch die Seiten.

Um einzelne Seiten als Bild zu extrahieren: Optionen | Alle Seiten extrahieren..., dort dann den gewünschten Bereich und das Ausgabeformat auswählen.

**Achtung:** Die tatsächliche Größe der erzeugten Bilder in Pixeln wird schon durch die DPI-Angabe bei den Plugin-Einstellungen festgelegt! Zusammen mit der im pdf festgelegten Seitengröße (in cm) ergibt sich dadurch die Zielgröße in Pixeln.
IrfanView (bzw. das Plugin) skaliert die im pdf enthaltenen Bilddaten dann auf diese Zielgröße, setzt alle Ebenen übereinander - und nur das Endergebnis davon kann man dann speichern.

Das ist praktisch um z.B. kleine jpgs für die Website zu generieren,
um aber die unmodifizierten Bilddaten zu erhalten - so wie sie im pdf eingebettet sind - ist ein anderes Vorgehen nötig:

#### Foxit Reader (eingebettete Daten unmodifiziert extrahieren) ####
- pdf-Datei laden
- Tab "Ansicht":
  * Bereich "Seitenansicht": Haken bei "Lineale"
  * Bereich "Werkzeuge": "Auswählen" | "Text und Bild auswählen"
- Fragliche Seite anzeigen (in Tab "Ansicht" Seitenzahl angeben oder Thumbnail-Preview benutzen)
- Dort auf gewünschtes Bild klicken und per Copy&Paste z.B. in IrfanView, und dort speichern. 


### Vorgehen für zukünftige Produktion ###
Dateiformat Einzelbilder: TIFF (Endung `.tif`), intern zip-komprimiert.

#### Für Neuauflagen ####

TODO

#### Für Elfchen und Deutschheft 3 ####

TODO

