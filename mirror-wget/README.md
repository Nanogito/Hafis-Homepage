## Site-backup mit wget ##

* [mirror.sh](mirror.sh): Shell-Skript das die Spiegelung durchführt. In [git bash](https://gitforwindows.org/index.html): `time ./mirror.sh`. Es wird noch [wget v1.19.4](https://eternallybored.org/misc/wget) benötigt (`wget.exe` z.B. nach `%ProgramFiles%\Git\usr\bin\` kopieren).
* [mirror/](mirror/): das eigentliche Backup. Alle Links umgeschrieben, s.d. es komplett lokal funktioniert. Original-(`.html`/`.css`) Dateien gespeichert als `*.orig`
* [.wgetrc](.wgetrc): Konfiguration für die Spiegelung mit [wget v1.19.4](https://eternallybored.org/misc/wget) (evtl. Alternative mit GUI: [VisualWget](https://sites.google.com/site/visualwget))
* [wget.log](wget.log): Log der Spiegelung
* [wget.urls](wget.urls): URLs, die gespiegelt werden sollen. Das ist zum einen natürlich `https://www.lernhilfe-hafis.de`, aber insbesondere *versteckte* Seiten müssen hier explizit aufgeführt werden. Beispiel:
	
		https://www.lernhilfe-hafis.de
		https://www.lernhilfe-hafis.de/home-alt
		https://www.lernhilfe-hafis.de/test
	
 * [index.html](index.html): wird von `mirror.sh` erzeugt, um das Backup bequem im Browser inspizieren zu können.
   - Sieht etwa so aus:
   - ![screenshot-mirror-index.png](/i/screenshot-mirror-index.png)
