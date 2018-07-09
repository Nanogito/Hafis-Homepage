### Ordner MyWebsite ###

#### Was ist hier drin? Und warum? ####

TODO: warum: MyWebsite bietet kein Backup, HTTrack ist "suboptimal"...

TODO: definiere ![Benutzer](../i/MyWebsiteBenutzer.png)"MyWebsite-Benutzer" und "Entwickler"

___

Alles hier ist bitte **unbedingt synchron zu halten mit dem was man in MyWebsite hochgeladen, geändert oder gelöscht hat!**
___
  * [`Bilder/`](Bilder/)
    - ![Benutzer](../i/MyWebsiteBenutzer.png) entspricht in MyWebsite: `Einstellungen` | `(Website personalisieren und anpassen)` | `Bilder`
    - ![Benutzer](../i/MyWebsiteBenutzer.png) hier müssen alle Bilder hochgeladen werden, die auf der Website verwendet werden
    - ![Benutzer](../i/MyWebsiteBenutzer.png) **Nochmal: unbedingt synchron halten mit MyWebsite!** Konkret bedeutet das:
      - jedes neu in MyWebsite hochgeladene Bild **muss auch hier hinzugefügt** werden
      - jedes neu in MyWebsite gelöschte Bild **muss auch hier gelöscht** werden
      - wenn ein Bild in MyWebsite umbenannt wird, **muss es auch hier umbenannt** werden
      - wenn ein Bild in MyWebsite in einen anderen Ordner verschoben wird, **muss es auch hier verschoben** (= umbenannt) werden.
      - ein in MyWebsite neu angelegter Ordner  **muss auch hier angelegt** werden
      - Bilder zu ***ersetzen***, z.B. durch eins mit höherer Auflösung wird durch MyWebsite so nicht unterstützt. Man muss das alte löschen und das neue unter gleichem Namen hochladen. Dann überall ersetzen? **Hier (im repo) allerdings muss dann das Bild tatsächlich einfach nur ersetzt** werden.
      - **...oder sag' einfach dem Entwickler, was Du in MyWebsite gemacht hast :)**
    - hier gespeicherte Bilder dienen als Grundlage für die evtl. skalierten und/oder verzierten Versionen, die in die Website eingefügt wurden
    - letztere werden über `http://<domain>/s/cc_images/cache_12345abcdef.jpg` o.ä. (dynamisch?) ausgeliefert
    - weitere Bilder können auch noch unter `Design/Dateien/` abgelegt sein (siehe unten)
  >

  * [`build.html`](build.html) (für MyWebsite-Benutzer)
    - ![Benutzer](../i/MyWebsiteBenutzer.png) erzeugt den Code, der
      - das Umlaut-Problem löst, bzw. bei "falsch" benannten Seiten warnt
      - bei falsch (= nicht datenschutzkonform) eingebundenen Videos warnt & hilft
      - richtig referenzierte (= mit Platzhalterbild + Link) Videos datenschutzkonform einbindet
    - ![Benutzer](../i/MyWebsiteBenutzer.png) die obigen Funktionen - **und wie man damit umgeht** - findest Du ausführlich erklärt & bebildert in [TODO](TODO.md)
  >  

  * [`Design/`](Design/), [`app/`](app/), [`lib/`](lib/), [`test/`](test/),  (<strike>für MyWebsite-Benutzer</strike>)
    - ![Benutzer](../i/MyWebsiteBenutzer.png) **Bitte nicht anfassen!**
  >

---
Ab hier nur für Entwickler:
 
  * [`build.html`](build.html)
    - der erzeugte Code gehört in MyWebsite: `Einstellungen` | `(Erweiterte Einstellungen anpassen)` | `Head bearbeiten`
  >

  * [`run-tests.html`](run-tests.html)
    - na, was wohl :)
  >

  * [`Design/`](Design/)
    - **Achtung**: hier kann man richtig was kaputtmachen - *und zwar GANZ LEICHT bzw. unabsichtlich*!
    - [`HTML.txt`](Design/HTML.txt) - MyWebsite: Design | HTML/CSS | HTML
      - TODO
    - [`CSS.txt`](Design/CSS.txt) - MyWebsite: Design | HTML/CSS | CSS
      - TODO
    - [`Dateien/`](Design/Dateien/) - MyWebsite: Design | HTML/CSS | Dateien
      - hier kann man Dateien hochladen, die dann direkt über `http://<domain>/s/...` ausgeliefert werden.
      - Bilder wie Hintergründe oder ein Logo werden über `http://<domain>/s/img/` ausgeliefert
      - `xyz.js` wird automatisch im `<head>` via `<script src=".."></script>` geladen von `http://<domain>/s/js/xyz.js`. Neben dem Weg über `head.html` ist dies eine weitere Möglichkeit für eigenes javascript. Auf eine bestimmte Reihenfolge im `<head>` *sollte man sich NICHT* verlassen!
  >

