### Besprechung Fr, 29.06.2018: CD, MK ###
---
#### Legende: ####

  * ![check](i/check.png) erledigt
  * ![todo](i/exclamation.png)@XY: TODO für XY
  * ![?](i/question.png)@XY: Frage an XY: einverstanden bzw. wie genau?
  * ![later](i/fastforward.png) vertagt

---

- ***@CD: Wie stehst Du zum github repo?***
  * ![check](i/check.png)  Grundsätzlich ok so für dieses Projekt
  >

- Handynummer von CD auf "Datenschutz" ist ok, oder?
  * ![check](i/check.png)@MK: Nein. Auch aus meta-Tags raus!
  * ![check](i/check.png)@MK: Klären, ob in Datenschutzerkl. Tel.-Nr. überhaupt notwendig
  * Nein: https://datenschutz-generator.de/
  * auch dort: wann braucht's einen Datenschutzbeauftragter? - hafis braucht keinen.
  >

- 1&1-Vertrag enthält auch die Domain [lernhilfe-hausaufgaben.de](http://www.lernhilfe-hausaufgaben.de) bei 1&1,
  kann man die evtl. zum Rumprobieren benutzen?
  * ![check](i/check.png) Weiterleitung an lernhilfe-hafis.de; für Test nutzen wir Sub-Domain.
  >

- oder eine Sub-Domain, z.B. [test.lernhife-hafis.de](http://test.lernhilfe-hafis.de);
  man muss doch nicht mehrfach für MyWebsite zahlen?
  * Jawoll, einfach ausprobieren. Auch wenn's nochmal kostet.
  * ![?](i/question.png)@CD: "Firmen-Website": 0.99€/Monat im ersten Jahr, danach 9.99€; kündbar nach 12 Monaten.
  * ![?](i/question.png)@CD: Wie soll die Subdomain heißen? (vielleicht besser "vorschau" als "test")
  >

- was man bzgl. Umlauten in MyWebsite beachten muss
  * ![check](i/check.png)  Button-Beschriftung soll keine Umlaute enthalten. Falls doch gewünscht: in MyWebsite mit ae, oe, ue umschreiben und script im `<head>` anpassen. Siehe [commit 55ef29...](https://github.com/meisl/hafis/commit/55ef29f2b02b06c44ca04b6a3b367bb67319d85a)
  >
  
- Hyperlinks:
  * ![check](i/check.png)@CD: Wunschliste mit Links die einzufügen sind per mail (auch Bilder).
  * ![check](i/check.png)@MK: rausfinden, wie man in MyWebsite Bilder verlinkt
  * ![check](i/check.png)@MK: Links setzen
  >

- Email-Adresse für CD wie z.B. Christian.Doerr@lernhilfe-hafis.de
  mit Weiterleitung an jetzige?
  * ![check](i/check.png) braucht's nicht
  >

- Hat der Anwalt die Erklärung explizit auf eine Präsenz **bei 1&1** geschrieben?
  D.h. kennt er evtl. die Gegebenheiten auf 1&1?
  * ![check](i/check.png)@MK: eher nicht - egal (checken wir selber, um evtl. Mehrkosten durch Anwalt zu vermeiden)
  * siehe [DSGVO.md](DSGVO.md)
  >

- ![check](i/check.png) statt Stick o.ä. kann man sich die Arbeitskopie (das "repository", kurz "repo")
  auch einfach als [.zip runterladen](https://github.com/meisl/hafis/archive/master.zip) (2018-07-01: ~20MB)

- ![later](i/fastforward.png) Schrift auf Datenschutz vs Rest
  * ![?](i/question.png) @CD: ist die besser als die ursprüngliche?
  * ![?](i/question.png) @CD: Schrift überall verbessern? Wie?

- ![later](i/fastforward.png) Sog. "favicon" gewünscht, z.B. die Eule? Das ist das kleine Bildchen, das im Browser-Tab angezeigt wird.
  * ![todo](i/exclamation.png)@CD: Erstmal nicht. Wäre aber nett wenn das Logo in besserer Quali vorliegt.
  >

- ![later](i/fastforward.png) Im Vertrag ist auch ein "Online-Speicher" von 250GB bei 1&1. Kenn' mich damit (noch) nicht aus,
  aber evtl. das für Backup nutzen? (github kann anscheinend irgendwie verknüpft werden)

- ![later](i/fastforward.png) @CD: Datenschutzeinleitung formulieren
    
- ![later](i/fastforward.png) @MK: Notfallplan machen: wie kriegt man die 
    statische Kopie schnell wieder online?

- ![later](i/fastforward.png) @MK: meta-tags fixen: sind bisschen durcheinander; meta-tags werden von Suchmaschinen durchforstet

---

- Nächste Schritte, nach Priorität:
  1. Youtube Videos checken (www.projekt29.de/youtube-videos-datenschutzkonform-einbinden)
    * ![check](i/check.png)@MK: insbes.: was ist mit eigenem opt-out anbieten
    * kein Youtube ohne das fragwürdige Google Doubleclick - mit Vimeo spart man sich das alles
    * sh. [DSGVO.md](DSGVO.md)
    >
  
  2. Tipps von 1&1 zu DSGVO und Generatoren checken
    -> z.B. was wenn wir gar kein Kontaktformular haben?
    * ![check](i/check.png)@MK: checken, aber kann man auch einfach drinlassen
    * Generator: https://datenschutz-generator.de
    * Details in [DSGVO.md](DSGVO.md)
    >
    
  3. Google-Analytics vs 1&1-Analytics?
    * ![check](i/check.png)@MK: checken
    * ist **nicht** dasselbe, wir haben nur 1&1 WebAnalytics, das **keine** Cookies verwendet
    * aber ein Cookie durch MyWebsite
    * und derzeit: jede Menge mehr durch das Video - selbst wenn man's nicht anschaut!
    * sh. [DSGVO.md](DSGVO.md)
    >
  
  4. Cookie-Hinweis implementieren wie z.B. auf [http://www.httrack.com/](http://www.httrack.com/)
    * ist nervig, lieber nicht.
    * ![?](i/question.png)@CD,@MK: Hilft das überhaupt juristisch?
    >

  5. haben wir überhaupt Google-Doubleclick?
    * ![check](i/check.png)@MK: sollte uns eigtl. nicht betreffen, da keine Werbung. Erstmal in Erklärung drin lassen, später checken.
    * Leider doch, siehe oben bei "Youtube Videos"; Einzelheiten wieder in  [DSGVO.md](DSGVO.md)
    >

___
  
### nächste Besprechung: Mo, 02.06.2018, 19:30 ###
  
