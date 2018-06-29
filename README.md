## [www.lernhilfe-hafis.de](https://www.lernhilfe-hafis.de) ##

Ordner [WinHTTrack/](WinHTTrack) enthält ein mit [WinHTTrack](http://www.httrack.com/) erstelltes Backup.

#### Achtung: ####
WinHTTrack (und vmtl. auch git) hat Probleme mit Umlauten in Pfadnamen.
Das betraft die Unterseite "Förderer", die nun (intern) unter [/foerderer/](WinHTTrack/Hafis/www.lernhilfe-hafis.de/foerderer/index.html) zu finden ist.

Da aber der MyWebsite Baukasten es nicht erlaubt, Beschriftung und Ziel der Buttons unabhängig zu setzen, hätte man

  - entweder den Ärger mit WinHTTrack
  - oder die häßliche Beschriftung "Foerderer"

Daher wurde ein kleines script im `<head>` eingefügt, das die Beschriftung korrigiert noch bevor der Besucher sie angezeigt bekommt:

	<script type="text/javascript">
	//<![CDATA[
		if (window.jQuery_1and1) {
			window.jQuery = window.jQuery_1and1;
		}
		jQuery().ready(_ => {
			jQuery('body .webnavigation #mainNav1 [href$="foerderer/"] span')
					.html("F&ouml;rderer");
		});
	//]]>
	</script>

(in MyWebsite: `Einstellungen | Erweiterte Einstellungen anpassen | Head bearbeiten`)
