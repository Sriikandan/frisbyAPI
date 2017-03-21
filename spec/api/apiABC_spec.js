var frisby = require('frisby');
var envProd="http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json";
var envTest="http://test-program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json";
var envStaging="http://staging-program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json";

var fs = require("fs");
console.log("\n *START* \n");
var content = fs.readFileSync("ppJj0E8g2R.json");
console.log("Output Content : \n"+ content);
console.log("\n *EXIT* \n");
var jsonContent = JSON.parse(content);
console.log("entity:", jsonContent.entity);
console.log("air:", jsonContent.arid);
console.log("name:", jsonContent.title);


frisby.create('GET JSON data from an abc endpoint')
    .get(envProd)
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .afterJSON(function(json) {
        // use Jasmine matcher to test response body
        expect(json).not.toBe(null);
    })
    .expectJSON({
        entity : jsonContent.entity
    })
    .expectJSON({
        arid : jsonContent.arid
    })
    .expectJSON({
        title : jsonContent.title
    })
    .expectJSON({
        mini_synopsis : jsonContent.mini_synopsis
    })
    .expectJSON({
        short_synopsis : jsonContent.short_synopsis
    })
    .expectJSON({
        medium_synopsis : jsonContent.medium_synopsis
    })
    .expectJSON({
        created_utc : jsonContent.created_utc
    })
    .expectJSON({
        last_updated_utc : jsonContent.last_updated_utc
    })
    .expectJSON({
        service_airport_code: jsonContent.service_airport_code
    })
    .toss();
