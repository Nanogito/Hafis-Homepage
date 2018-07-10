### Besprechung Mo, 02.07.2018: CD, MK ###
*(Legende: siehe [Besprechung_2018-06-29](Besprechung_2018-06-29.md))*

---

- Test-Bereich auf Sub-Domain [vorschau.lernhife-hafis.de](http://vorschau.lernhilfe-hafis.de)
  * ist ein anderer Editor (vmtl. wg. Professional-Paket), daher nicht wirklich zum Testen geeignet
  * man kann einfach bessere Layouts machen
  * ~führte zu einem neuen (dritten) Vertrag~
  * ~...der eingebaute Backups hat~ (egal)
  * kam vmtl. durch SSL-Missverständnis heute morgen zustande
  * ![check](i/check.png) ist schon wieder gekündigt, wirksam mit heute.
  * ![?](i/question.png) komisch: nun, da die Kündigung wirksam wurde ist die SubDomain und auch die Website weg...
  >

- Was ist mit dem zweiten Vertrag ("Dual-Basic", deutlich teurer)
  * wie sind welche Domains zu welchem Vertrag zugeordnet?
  * der hat wieder andere Vorteile: Webspace, ftp
  * aber keinen Editor wie MyWebsite?
  * ![check](i/check.png) alles egal - gekündigt zum 12.12.2018
  >

- eingebettete Videos
  * Youtube-Video im erw. Datenschutzmodus eingebettet: (mit besserem Design): /ytb
    - ~altes Layout, nur mit erw. Datenschutzmodus~
    - ![check](/i/check.png) Bildergallerie
    - ~zwei gleich große Spalten, eingeb. Video links, Text rechts~
    - ![check](/i/check.png) Video links mit fester Größe, Text umlaufend rechts
  * dasselbe für Vimeo-Video: /vmo
    - ![check](/i/check.png) bleiben bei Youtube
  * siehe "Nächste Schritte" unten, und für Details [DSGVO.md](DSGVO.md)
  >

- Datenschutzerklärung
  * ![?](i/question.png) Abschnitt 4 im Impressum ist: "4. Datenschutz" - Braucht's das noch?
    - ![todo](i/exclamation.png)@CD: Anwalt fragen
  * ![?](i/question.png) Abschnitt Google Doubleclick raus?
    - ![todo](i/exclamation.png)@CD: Anwalt fragen ("wir haben jetzt YT im erw. Modus - also...")
    - ja (sh. unten)
  * ![?](i/question.png) Abschnitt Snowplow Analytics rein?
    - ![todo](i/exclamation.png)@CD: 
    - ja, sh. unten
  * ![?](i/question.png)@CD: Einleitungstext von Dir?
    - ![later](i/fastforward.png)@MK: Textvorschlag
  * ![?](i/question.png)@CD: Schrift dort ist anders als im Rest. Besser?
    - ![later](i/fastforward.png) vllt.
  * mehr: siehe [DSGVO.md](DSGVO.md)
  >

- Gedichte
  * wann und (vmtl.) wie es dazu kam
  * sh. Tag `Gedicht_kaputt` im repo
  * Layout besser machen: sh unten
  >
  
- ![?](i/question.png) Notfallplan machen: wie kriegt man die 
    statische Kopie schnell wieder online?
    * ![later](i/fastforward.png) erstmal nicht
  >


---

#### Nächste Schritte, nach Priorität: ####

- 1 Puppentheater (Youtube-Video)
  * ![check](i/check.png)@MK: "YouTube" statt "You-Tube" im Text
  * ![check](i/check.png)@MK: Youtube Video mit Umlauftext (versteckt: puppentheater_alt)
  * Da das so nicht einfach in MyWebsite geht (weder erw. Modus noch das "Umlauf-Layout")
    - ![check](i/check.png)@MK: javascript-Code verallgemeinern, s.d. man nur ein Bild einfügen muss, das auf ein Youtube Video verweist (wird dann ersetzt durch das Video)
    - ![check](i/check.png)@MK: Das eingebette Video soll so groß sein wie das Platzhalter-Bild
    - ![todo](i/exclamation.png)@MK: soll genauso auch für Vimeo funktionieren
    - ![todo](i/exclamation.png)@MK: Anleitung dafür schreiben
  >

- 2 Datenschutz: Abschnitt Snowplow Analytics rein
    * ![check](i/check.png)@MK: Neue, versteckte Seite datenschutz2. Dort dann:
    * ![todo](i/exclamation.png)@MK: Abschnitt von 1&1 über Snowplow Analytics rein
      - ![?](i/question.png) bei 1&! hieß es: "in ihrer Vorlage zur Datenschutzseite finden Sie einen entspr. Abschnitt" -finde die "Vorlage zur Datenschutzseite" nicht... [TODO: Link]
    * ![check](i/check.png)@MK: Abschnitt über Google Doubleclick raus
    * ![check](i/check.png)@MK: Formulierung über log-Löschung nach 21 Tagen rein
  >

- 3 Anwalt fragen (geplant: Mittwoch, 11.07.2018)
    * <strike>@CD: ihm den Link schicken: [www.lernhilfe-hafis.de/datenschutz2](www.lernhilfe-hafis.de/datenschutz2)</strike>
    * <strike>@CD: MK vorher per email Bescheid geben</strike>
    * ![todo](i/exclamation.png)@MK: am Di, 10.07.2018 abends: "Datenschutz2" i.d. Navigation sichtbar machen
    * ![todo](i/exclamation.png)@CD: "Abschnitt 4 im Impressum ist: "4. Datenschutz" - Braucht's das noch?"
    * ![todo](i/exclamation.png)@CD: Abschnitt "Automatisch gespeicherte Daten"/"Server-Log-Dateien": *"Lediglich im Rahmen unserer Serverstatistik, die wir alle zwei Jahre in unserem Tätigkeitsbericht veröffentlichen, findet eine Darstellung der Anzahl der Seitenaufrufe statt."*
      - <strike>@CD: Ist das so? - @Anwalt: ...?</strike>
      - **"Das tun wir nicht, also *behaupten* wir es auch nicht. Ok?"**
    * <strike>@CD: Du hast mit 1&1 einen sog. ["Vertrag zur Auftragsverarbeitung"](https://hosting.1und1.de/hilfe/datenschutz/allgemeineinformationen/auftragsverarbeitung/?utm_campaign=1788&utm_content=direct&utm_medium=landinghub&utm_source=helpcenter&utm_term=1849) nach [Art. 28 DSGVO](https://dsgvo-gesetz.de/art-28-dsgvo/). 1&1 empfiehlt diesen auch zu erwähnen.</strike>
      - Muss man nicht erwähnen, also lieber die kostbare Zeit mit Anwalt sparen.
    * ![todo](i/exclamation.png)@CD: "Formulierung über Log-Löschung nach 21 Tagen schadet ja wohl nicht..."
      - -> [1&1 Doku dazu](https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-11-produktes/11-webhosting/?utm_campaign=1788&utm_content=direct&utm_medium=landinghub&utm_source=helpcenter&utm_term=2176)
    * ![todo](i/exclamation.png)@CD: "**Videos:** werden erst dann eingebunden wenn man darauf klickt, **vorher garantiert keinerlei Kontakt zu Youtube/Google** - ok das zu erwähnen?"
    * ![todo](i/exclamation.png)@CD: "*wenn* geklickt, dann wird **Youtube-Video im erweiterten Datenschutzmodus** eingebunden"
    * ![todo](i/exclamation.png)@CD: "Sie hatten geschrieben, dass dann der Abschn. Google Doubleclick raus kann"
    * ![todo](i/exclamation.png)@CD: "Demnach brauchen wir auch kein eigenes Opt-out zu implementieren, richtig?"
    * ![todo](i/exclamation.png)@CD: "Falls doch (?!): bitte Quelle(n) im Netz für den 'einfachen javascript-Code"
    * ![todo](i/exclamation.png)<strike>@CD: "1&1 WebAnalytics (=Snowplow Analytics) erwähnen?"</strike>
      - -> <strike>[1&1 Doku dazu](https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-11-produktes/11-webanalytics/?utm_campaign=2176&utm_content=direct&utm_medium=default&utm_source=helpcenter&utm_term=2103)</strike>
      - -> <strike>zu Google-Analytics - **das wir aber nicht benutzen** - sagt 1&1 [dies](https://hosting.1und1.de/hilfe/datenschutz/allgemeineinformationen/checkliste/?utm_term=1845&utm_campaign=1795&utm_medium=knowledge#c10013)</strike>

- 4 Gedicht
    * ![todo](i/exclamation.png)@MK: in 5-Spalten-Layout

___
  
### [nächste Besprechung: Do, 05.07.2018 19:30](Besprechung_2018-07-05.md) ###
#### diese Besprechung: Mo, 02.07.2018, 20:30 ####
##### [vorherige Besprechung: Do, 29.06.2018, 19:30](Besprechung_2018-06-29.md) #####

