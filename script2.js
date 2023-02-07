var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all');
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    result.forEach(element => {
      console.log(`Name: ${element.name}`);
            console.log(`Region: ${element.region}`);
            console.log(`Sub-region: ${element.subregion}`);
            console.log(`Population: ${element.population}`);
            console.log("\n");
    });
}


