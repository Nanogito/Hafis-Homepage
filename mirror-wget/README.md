## Site-backup mit wget ##
* [mirror/](mirror/): das eigentliche Backup. Alle Links umgeschrieben, s.d. es komplett lokal funktioniert. Original-(`.html`/`.css`) Dateien gespeichert als `*.orig`
* [.wgetrc](.wgetrc): Konfiguration für die Spiegelung mit [wget v1.19.4](https://eternallybored.org/misc/wget) (evtl. Alternative mit GUI: [VisualWget](https://sites.google.com/site/visualwget))
* [wget.log](wget.log): Log der Spiegelung
* [wget.urls](wget.urls): URLs, die gespiegelt werden sollen. Das ist zum einen natürlich `https://www.lernhilfe-hafis.de`, aber insbesondere *versteckte* Seiten müssen hier explizit aufgeführt werden. Beispiel:
	
		https://www.lernhilfe-hafis.de
		https://www.lernhilfe-hafis.de/home-alt
		https://www.lernhilfe-hafis.de/test
	

* [mirror.sh](mirror.sh): Shell-Skript das die Spiegelung durchführt. In [git bash](https://gitforwindows.org/index.html): `time ./mirror.sh`