var objIndex;

function getObjInfo(myvar)
{
	console.log("Name des Objekts: " + myvar);

	/*
	* Within the switch statement I check, which objectname is sent by Unity.
	* I then return the corresponding object index of the json.
	* It could have been solved smarter by validating the name against the json (within a loop, and not single statements), 
	* but that would have ment that I had to initially name the objects exactly like they're called in the json
	* in order to be able to map them right. So now I had to put in an extra couple of lines...
	*/

	switch (myvar)
	{
		case "Cube":
			displayDetails(0);
			break;
		
		case "Cube.012":
			//window.alert(myData.datenbank.object[1].title);
			displayDetails(1);
			break;

		case "Cube.014":
			//window.alert(myData.datenbank.object[2].title);
			displayDetails(2);
			break;

		case "Cube.013":
			//window.alert(myData.datenbank.object[3].title);
			displayDetails(3);
			break;
		
		case "Tomb_Gisela.001":
			//window.alert(myData.datenbank.object[4].title);
			displayDetails(4);
			break;

		case "Cube.009":
			//window.alert(myData.datenbank.object[5].title);
			displayDetails(5);
			break;

		case "Cube.010":
			//window.alert(myData.datenbank.object[6].title);
			displayDetails(6);
			break;

		case "Altar_Base.001":
			//window.alert(myData.datenbank.object[7].title);
			displayDetails(7);
			break;

		case "Altar_Base.000":
			//window.alert(myData.datenbank.object[8].title);
			displayDetails(8);
			break;

		case "Altar_Base.006":
			//window.alert(myData.datenbank.object[9].title);
			displayDetails(9);
			break; 

		case "Cube.016":
			//window.alert(myData.datenbank.object[10].title);
			displayDetails(10);
			break;
		
		case "Taufbecken":
			//window.alert(myData.datenbank.object[11].title);
			displayDetails(11);
			break;

		case "Choir_Altar":
			//window.alert(myData.datenbank.object[12].title);
			displayDetails(12);
			break;

		case "Cube.015":
			//window.alert(myData.datenbank.object[13].title);
			displayDetails(13);
			break;

		case "Cube.011":
			//window.alert(myData.datenbank.object[14].title);
			displayDetails(14);
			break;

		case "Cube.018":
			//window.alert(myData.datenbank.object[15].title);
			displayDetails(15);
			break;

		case "Cube.020":
			//window.alert(myData.datenbank.object[16].title);
			displayDetails(16);
			break;

		case "Cube.019":
			//window.alert(myData.datenbank.object[17].title);
			displayDetails(17);
			break;

		case "Tomb_HeinrichV":
			//window.alert(myData.datenbank.object[18].title);
			displayDetails(18);
			break;

		case "Column.078":
			//window.alert(myData.datenbank.object[19].title);
			displayDetails(19);
			break;

		case "Column.000":
			//window.alert(myData.datenbank.object[20].title);
			displayDetails(20);
			break;

		case "Cube.309":
			//window.alert(myData.datenbank.object[21].title);
			displayDetails(21);
			break;

		case "Cube.317":
			//window.alert(myData.datenbank.object[22].title);
			displayDetails(22);
			break;

		case "Cube.311":
			//window.alert(myData.datenbank.object[23].title);
			displayDetails(23);
			break;

		case "Tomb_Philipp":
			//window.alert(myData.datenbank.object[24].title);
			displayDetails(24);
			break;
		
		case "Tomb_Beatrix":
			//window.alert(myData.datenbank.object[25].title);
			displayDetails(25);
			break;

		case "Tomb_Rudolf":
			//window.alert(myData.datenbank.object[26].title);
			displayDetails(26);
			break;

		case "Kreuz_Albrecht":
			//window.alert(myData.datenbank.object[27].title);
			displayDetails(27);
			break;

		case "Tomb_Adolf":
			//window.alert(myData.datenbank.object[28].title);
			displayDetails(28);
			break;

		case "Tomb_Heinrich_IV":
			//window.alert(myData.datenbank.object[29].title);
			displayDetails(29);
			break;

		case "Tomb_Heinrich_III":
			//window.alert(myData.datenbank.object[30].title);
			displayDetails(30);
			break;

		case "Tomb_Konrad_II":
			//window.alert(myData.datenbank.object[31].title);			
			displayDetails(31);
			break;

		case "Tomb_Gisela":
			//window.alert(myData.datenbank.object[32].title);
			displayDetails(32);
			break;

		default:
			window.alert("Dieses Objekt ist noch nicht in der Datenbank erfasst.");
	}
}

function displayDetails(objIndex)
{
	//window.alert(myData.datenbank.object[objIndex].title);
	//$("#ContentContainer").toggle();

	$("#infoTitle").text(myData.datenbank.object[objIndex].title);
	$("#infoContent").text(myData.datenbank.object[objIndex].content);

	/*
	setTimeout(function()
	{ $("#ContentContainer").hide(); 
	}, 3000);
	*/
	//console.log("via externe Funktion");
}