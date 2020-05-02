
# Bachelorprojekt | Web-App

Diese One-Page-Web-Applikation wurde im Rahmen meiner Bachelorarbeit erstellt. 
Es fasst alle Teile dieses Projekts zusammen und stellt das fertige Produkt dar.

 1. Das Modell der Speyerer Domkrypta – erstellt mit [Blender](https://github.com/dsteige1/bachelorarbeit_blender)
 2. Eine virtuelle, interaktive Umgebung – erstellt in [Unity](https://github.com/dsteige1/bachelorarbeit_unity)
 3. Diese Platform
 
![Krypta-Render](https://github.com/dsteige1/bachelorarbeit_webApp/blob/master/img/crypt_render.png)
## Aufbau und Funktionen
### Style
- Diese Seite basiert auf dem [Startup-Template](https://w3cssthemes.com/themes/w3-css-startup/) des W3.css-Frameworks
- Diese CSS-Bibliothek ermöglicht es, möglichst einfache, responsive Webseiten zu erstellen
- Weiteres CSS ist nur zur punktuellen Anpassung einzelner Elemente. Der Großteil wurde über die W3.css-Klassen gestylet
### Skripte
- Die Skripte teilen sich auf in eigene und in von Unity erstellte Build-Skripte
	- ajaxLoader.js
		- Hier wird lediglich die JSON-Datei auf eine Variable geladen, damit später auf die einzelnen Objekte zugegriffen werden kann
		- Dafür habe ich die jQuery-Ajax-Request benutzt
	- anchorCall.js
		- In diesem Skript wird zur Anleitung per Anker verlinkt
		- Diese Funktion wird über Unity-Skripte aufgerufen, sobald man im Start-Menü der App auf _ANLEITUNG_ klickt
	-  download.js
		- Dieses Skript stellt die Download-Funktion der Informationstexte bereit
		- Die Funktion an sich ist beruht auf einer [Bibliothek](http://danml.com/download.html)
		- Ich benutze diese, um bei Klicken des _Download Text_-Buttons den Inhalt des Informationsfensters an eine TXT-Datei zu übergeben und zum Download bereitzustellen
	- getObjInfo.js
		- Die _getObjInfo()_-Funktion wird von der App aufgerufen
		- Diese übergibt den Namen, des geklickten Objekts, welcher dann in einem Switch-Case überprüft wird
		- Stimmt der Name mit einem Case überein, wird die _displayDetails()_-Funktion aufgerufen und der Index des korrekten JSON-Objekts übergeben, damit das richtige Objekt in das Informationsfenster _(#ContentContainer)_ ausgespielt werden kann
		- Im Nachhinein hätte ich die Objekte besser benennen können, um sie direkt in einem Loop gegen die JSON zu validieren, dies hätte ich aber von vornherein implementieren sollen. Als mir dieser Weg eingefallen ist, war es einfacher, einfach den Switch-Case zu schreiben
	-  styler.js
		- Dieses Skript ist ein wenig der 'Leftover-Bucket'
		- Hier wird der Browser gecheckt, um ggfs. eine Warnung rauszugeben, falls ein nicht ünterstützter Browser / mobiles Endgerät benutzt wird
		- Dazu wird die maxHeight des Informationsfensters – je nach Viewport – gesetzt
		- Die restlichen Funktionen stammen aus dem W3.css-Template und standen ursprünglich in einem Inline-Skript standen
	- Da wo externer Code verwendet wurde befinden sich inline-Kommentare
- UnityProgress.js und UnityLoader.js
	- Diese beiden Skripte entstammen dem Unity / WebGl-Build und wurden von mir nicht berührt
## Starten
Am besten funktionert die Web-Applikation in **Chrome** oder **Firefox**, da Browser wie z.B. Safari die transpilierten Scripts teilweise nicht korrekt interpretieren.

Zum lokalen Aufrufen wird ein lokaler Server benötigt.

Der npm live-server reicht vollkommen aus:

    $ npm install live-server
um das Modul zu installieren, dann

    live-server
im root-Verzeichnis des Projekts, um den Server zu starten.
Es öffnet sich automatisch ein Browser-Fenster mit der [index.html](https://github.com/dsteige1/bachelorarbeit_webApp/blob/master/index.html).
