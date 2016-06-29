function compterPleinDeTrucs(arr) {
    var range = 1,
    	i = 0;
    
    function compterMoinsDeTrucs() {
        var count = range;
        while (count-- && i < arr.length) i++;
        if (i < arr.length) setTimeout(compterMoinsDeTrucs, .001);
        console.log(arr[i]);
    }
    
    compterMoinsDeTrucs();    
}
compterPleinDeTrucs(document.trucEnorme);