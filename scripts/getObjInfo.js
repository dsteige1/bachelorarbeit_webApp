var objIndex;

function getObjInfo(myvar)
{
	console.log("Name des Objekts: " + myvar);

	/*
	* 	Within the switch statement I check, which objectname is sent by Unity.
	* 	I then return the corresponding object index of the json.
	* 	It could have been solved smarter by validating the name against the json (within a loop, and not single statements), 
	* 	but that would have ment that I had to initially name the objects exactly like they're called in the json
	* 	in order to be able to map them right. So now I had to put in an extra couple of lines...
	*/

	switch (myvar)
	{
		case "Cube":
			displayDetails(0);
			break;
		
		case "Cube.012":
			displayDetails(1);
			break;

		case "Cube.014":
			displayDetails(2);
			break;

		case "Cube.013":
			displayDetails(3);
			break;
		
		case "Tomb_Gisela.001":
			displayDetails(4);
			break;

		case "Cube.009":
			displayDetails(5);
			break;

		case "Cube.010":
			displayDetails(6);
			break;

		case "Altar_Base.001":
			displayDetails(7);
			break;

		case "Altar_Base.000":
			displayDetails(8);
			break;

		case "Altar_Base.006":
			displayDetails(9);
			break; 

		case "Cube.016":
			displayDetails(10);
			break;
		
		case "Taufbecken":
			displayDetails(11);
			break;

		case "Choir_Altar":
			displayDetails(12);
			break;

		case "Cube.015":
			displayDetails(13);
			break;

		case "Cube.011":
			displayDetails(14);
			break;

		case "Cube.018":
			displayDetails(15);
			break;

		case "Cube.020":
			displayDetails(16);
			break;

		case "Cube.019":
			displayDetails(17);
			break;

		case "Tomb_HeinrichV":
			displayDetails(18);
			break;

		case "Column.078":
			displayDetails(19);
			break;

		case "Column.000":
			displayDetails(20);
			break;

		case "Cube.309":
			displayDetails(21);
			break;

		case "Cube.317":
			displayDetails(22);
			break;

		case "Cube.311":
			displayDetails(23);
			break;

		case "Tomb_Philipp":
			displayDetails(24);
			break;
		
		case "Tomb_Beatrix":
			displayDetails(25);
			break;

		case "Tomb_Rudolf":
			displayDetails(26);
			break;

		case "Kreuz_Albrecht":
			displayDetails(27);
			break;

		case "Tomb_Adolf":
			displayDetails(28);
			break;

		case "Tomb_Heinrich_IV":
			displayDetails(29);
			break;

		case "Tomb_Heinrich_III":
			displayDetails(30);
			break;

		case "Tomb_Konrad_II":		
			displayDetails(31);
			break;

		case "Tomb_Gisela":
			displayDetails(32);
			break;

		default:
			window.alert("Dieses Objekt ist noch nicht in der Datenbank erfasst.");
	}
}

function displayDetails(objIndex)
{
	// toggle the Download-Button
	$("#dwldButton").show();

	// Get the correct data from json.
	$("#infoTitle").text(myData.datenbank.object[objIndex].title);
	$("#infoContent").text(myData.datenbank.object[objIndex].content);
}