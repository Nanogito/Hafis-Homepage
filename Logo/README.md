#### Allgemein ####

* Unterschied "Logo" vs "Avatar"...
* beide sind wichtig (Avatar nicht ganz so) -> mehr Mühe geben als für andere Bilder!
* deshalb: insbesondere für die Verwendung auf *anderen* Websites, die auf www.lernhilfe-hafis.de verweisen:
  - gefordertes Format genau erfragen
  - fertiges Bild exakt im geforderten Format und bestmöglicher Qualität abliefern - *nicht* darauf vertrauen, dass "die schon was draus machen"...! 


#### Verwendungszwecke / Zielformate ####

* für die eigene Homepage: 880 x 128 px
* für andere Websites, die auf www.lernhilfe-hafis.de verweisen: 220 x 30-40 px
* Avatar für github:
  - winzig: 20 x 20 px
  - klein: 26 x 26 px
  - mittel: 44 x 44 px
  - gross: 229 x 230 px (für Profilseite)
* Profilbild für Youtube ([Kanal Christian Doerr](https://www.youtube.com/channel/UC8E3QP7VHt7u6CBszPK8miA))
  - 80 x 80 px (auf Kanalseite)
  - 48 x 48 px (Avatar bei Video / Kommentaren)
* TODO: weitere, z.B.
  - s/w für Briefkopf
  - Variationen zu speziellen Anlässen, etwa: am 6. Dez. trägt die Eule eine Nikolausmütze
  - evtl. für die Hafis-Hefte (aka "Deutschhefte")


#### Dateiformate ####
Wir unterscheiden zwischen Arbeitsdateien und Ergebnisdateien. Letzere werden aus den Arbeitsdateien *generiert*. Der Prozess der Generierung besteht aus Skalierung (optional), Schärfefilter (optional) sowie Export, und muss genau dokumentiert sein, s.d. - wenigstens prinzipiell - eine Automatisierung möglich ist.

* **Arbeitsdateien** liegen ausschließlich im Gimp-Format (`.xcf`) vor, da dies verlustfreie Kompression garantiert und mehrere Ebenen (Layer), Transparenz, Vektoranteile und editierbaren Text erlaubt.
Außerdem bleibt die Kombination der Ebenen explizit und veränderbar.

* **Ergebnisdateien** haben vorzugsweise das Format `.png`, evtl. auch `.gif`.   `.jpg` komprimiert *verlustbehaftet* und ist eigentlich nur für Fotos sinnvoll. Für das Hafis-Logo ungeeignet.

TODO: Alpha-Layer/Transparenz?


#### Organisation der Dateien ####

* Arbeitsdateien **nur hier** (`Logo/` oder Unterordner davon)
* [/MyWebsite/Bilder/](../MyWebsite/Bilder/) ist ein identisches Abbild von `Eigenschaften | Bilder` im MyWebsite-Editor von 1&1/IONOS und
  - soll nur Ergebnisdateien enthalten
  - ...und von diesen nur jene, die auch tatsächlich auf der Homepage benutzt werden
* [status-quo-2018-12/](status-quo-2018-12/) enthält die bis Dez. 2018 vorliegenden Dateien bzw. eine Bestandsaufnahme im [`README.md`](status-quo-2018-12/README.md).
* Namen der Bilddateien:
  - Dateiname darf keine Leerzeichen und keine Umlaute enthalten (`@` ist erlaubt)
  - TODO: Zusammensetzung des Namens, wie Präfix `Logo_Hafis` / `Avatar_x@y`, Beschreibung zu Inhalt/Zweck, Herkunft, lfd. Nummer/Variante o.ä.




   