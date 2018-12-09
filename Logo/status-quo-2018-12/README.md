## Status quo Dez. 2018 ##

### `Logo_Hafis-2016_HP-Titel.jpg` ###
Derzeit auf der [Homepage verwendet](https://www.lernhilfe-hafis.de/s/img/logo-2016-j.jpg), also in [`/MyWebsite/Bilder/Logo/`](../../MyWebsite/Bilder/Logo/).
![](./Logo_Hafis-2016_HP-Titel.jpg)

* Herkunft: `logo-2016-j.jpg`, bzw. *identisch* `logo-2016-capital-J.jpg` in [`/MyWebsite/Bilder/`](../../MyWebsite/Bilder/)
* Dateiformat `.jpg` ungeeignet - Artefakte. Insbesondere in der Eule. Aber auch alle anderen Flächen (Farbkästchen, Schriftfüllung und Hintergrund) sind nicht homogen -> Freistellen erschwert.
* Format 880 x 129 px @ 300 x 300 dpi, tatsächlicher Inhalt 878 x 89 px
  - horizontal nicht exakt zentriert: weißer Rand links von 2 px
  - weisser Rand oben 31 px und unten 9 px, vmtl. zur Positionierung auf HP (sollte man anders lösen)
  - Eule: 53 x 67 px
  - "Hafis e.V.": 469 x 49 px
* Gestaltung:
  - Schrift ist ungefähr zentriert, dann die Eule links danebengesetzt. Dadurch mehr weisser Platz rechts.
  - der Farbverlauf unter der Schrift (aber nur bis Mitte "V") ist durch eine Strecke einheitlich hellblau unterbrochen - warum?
  - der Farbverlauf enthält scheinbar 11 (tatsächlich 10, s.u) Farben aus dem gesamten Farbkreis, allerdings *nicht* in gleichen Abständen von 360° / 12 = 30°. Das Hellblau der Schrift liegt bei 200° Hue (Saturation = Value = 100%), das Orange der Umrandung ist mit 20° (S = 75%, V = 80%) die Komplementärfarbe vom hellblau. In der linken Wiederholung vom Verlauf fehlt das helle türkis 150° / 40% / 100% (unter "V" und "."), sie beginnt mit 150° / 80% / 100%...? 
  - Schrift ist extrem fett und zusätzlich in die Breite gezogen, dadurch - selbst in dieser Größe (!) -
    * bilden "f" und "i" fast eine Ligatur
    * wäre das "e.V." vmtl. zu prominent gekommen, deshalb kleinere Schriftgröße, s.d. das große "V" so hoch wie ein Kleinbuchstabe vom Rest ist. Dies wiederum bewirkt, dass beim "e" praktisch kein Hohlraum mehr zu sehen ist. 

---

### `Logo_Hafis-2016_klein-Weissensee.jpeg` ###
von https://gsweiss.musin.de/wp-content/uploads/2018/12/Hafis-e.V.-logo-2016-j-e1544036687234.jpeg

![](Logo_Hafis-2016_klein-Weissensee.jpeg)

* Herkunft: https://gsweiss.musin.de/wp-content/uploads/2018/12/Hafis-e.V.-logo-2016-j-e1544036687234.jpeg
  Offensichtlich einfach eine schlecht skalierte Version von obigem `Logo_Hafis-2016_HP-Titel.jpg`, erstellt kürzlich (Nov. 2018) von jemand bei der Weissensee-GS.
* Format: 222 x 33 px @ 96 dpi, tatsächlicher Inhalt 222 x 23 px
* Insbesondere das Ziel neben anderen Logos auf der Weissensee-HP wenigstens nicht negativ aufzufallen ist *eindeutig verfehlt*. TODO: screenshot
* Anordnung der Elemente für dieses kleine Format ungeeignet:
  - Farbbalken unnötig lang (-> lange Strecke Hellblau...)
  - dadurch (und die vorgegebene max. Breite) ist die Eule so klein, dass man sie ohne Vorwissen nicht mehr als solche erkennen kann.
  - Details des Schriftzugs, insbesondere Hohlräume in "a" und "e" sowie der Punkt über dem "i" nur noch wage zu erahnen.

---

### `Logo_Hafis-2016_mail-2018-11-22.gif` ###

![](./Logo_Hafis-2016_mail-2018-11-22.gif)

* Herkunft: mail "besseres Logo" von @chdoerr an @meisl vom 22. Nov. 2018; Name dort schlicht `logo.gif`
* Format: 726 x 95 px @ 300 x 300 dpi, tatsächlicher Inhalt: 709 x 78 px
* durch Dateiformat `.gif` keine Artefakte, homogene Flächen
* Gestaltung im Vergleich zu `Logo_Hafis-2016_HP-Titel`:
  - statt Farbbalken das Akronym "Hafis" ausgeschrieben: "Hausaufgabenbetreuung für internationale Schüler"
  - Eule exakt gleich gross: 53 x 67 px hoch
  - Schrift praktisch gleich groß: 470 x 48 statt 468 x 49 (+/- Artefakte im jpg)
  - Eule auf der Grundlinie (mit recht wenig Platz zu "Hausaufgabenbetreuung..."
  - "Hafis e.V." ragt um 10 px (13% der Gesamtbreite) über Oberkante Eule hinaus
  - recht grosser Zeichenabstand in "Hausaufgabenbetreuung...", dadurch noch länger als ohnehin schon -> viel weiße Fläche zwischen Eule und "Hafis e.V." (188 px / 27%)
  - Farben:
    * Hellblau: 200° / 60% / 100% (bis auf 1,1 °/% genau), dort: 200° / 100% / 100% (also satter)
    * Orange/Braun: 20° / 75% / 80% (exakt), dort: genau gleich


---

### `Eule-2016_anim.gif` ###

![](./Eule-2016_anim.gif)

* Herkunft: `MyWebsite/Bilder/ggEule.gif`
* Format: 53 x 67 px @ 300 x 300 dpi, ohne Ränder
  - Palette: 16 Farben (4 bit) mit Transparenz
  - 8 Animationsframes mit jew. 100ms Dauer (10 fps); irgendwie ein Loop: Frames 6/5, 7/3 sowie 8/2 jeweils identisch 


---

### `Eule-2016_192x128.png` ###

![](./Eule-2016_192x128.png)

* Herkunft: `MyWebsite/Bilder/Eule192x128.png` @ aaca62f8ef18b8870395881a517cafa2bb4d83c2. Vermutlich von @meisl aus Frame 1 von obigem `.gif` erstellt, bei dem (gescheiterten) Versuch, die Eule mit ordentlichem Alphakanal freizustellen... 
* Format: 192 x 128 px @ 300 x 300 dpi, tatsächlicher Inhalt: 51 x 65 px (sic! *nicht* 53 x 65 px wie obiges `.gif`)
  - Palette: 125 Farben (7 bit) mit 1 bit Alpha


---

### `Avatar_chdoerr@github-(Eule-2016)_70x70.png` ###

![](./Avatar_chdoerr@github-(Eule-2016)_70x70.png)

* Herkunft: `https://avatars0.githubusercontent.com/u/40777919?s=460&v=4`, erstellt von @meisl beim Einrichten des Profils von @chdoerr
* Format (`.png`): 70 x 70 px @ -/- dpi, tatsächlicher Inhalt: 53 x 67 px
  - Farbtiefe: 24-bit RGB, ohne Transparenz/Alpha
* offenbar einfach aus `Logo_Hafis-2016_HP-Titel.jpg` ausgeschnitten, daher mit Artefakten



---

### `Avatar_Christian-Doerr@Youtube-(Selfie)_288x288.jpg` ###

![](./Avatar_Christian-Doerr@Youtube-(Selfie)_288x288.jpg)

* Herkunft: [Youtube-Kanal "Christian Doerr"](https://www.youtube.com/channel/UC8E3QP7VHt7u6CBszPK8miA) (dort ist das Video vom Puppentheater)
* Format: 288 x 288 px @ -/- dpi
* Wird von Youtube skaliert auf 80x80 bzw. 48x48, und (im Browser) auf einen Kreis beschnitten. Das sieht dann so aus:
  
  - ![](screenshot_YT-Avatar-Kanalseite.png)
  - ![](screenshot_YT-Avatar-beim-Video.png)
* Motiv
  - ein Selfie halt, aber für den Zweck ok
  - Bildkomposition: ziemlich gut!
  - aber warum nachts?
* Qualität
  - sehr mau. Fällt aber durch die Skalierung nicht großartig auf.
  - Das Glanzlicht auf der Stirn ist nicht so günstig
* könnte man auch als Avatar für chdoerr@github nehmen (die Eule dann für Org. Hafis@github)



