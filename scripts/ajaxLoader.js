var myData = (function () 
{
    $.ajax({
        'async': false,         //throws error:
        'global': false,
        'url': '../Data/myData.json',
        'dataType': "json",
        'success': function (jsondata) {
            myData = jsondata;
        }
    });
    console.log("Data loaded");
    return myData;
})();