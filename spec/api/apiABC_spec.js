var frisby = require('frisby');
var envProd="http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json";
var envTest="http://test-program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json";
var envStaging="http://staging-program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json";
frisby.create('GET JSON data from an abc endpoint')
    .get(envTe)
    .expectStatus(200)
    .expectHeader('Content-Type', 'application/json')
    .afterJSON(function(json) {
        // use Jasmine matcher to test response body
        expect(json).not.toBe(null);
    })
    .expectJSON({
        entity : "Program"
    })
    .expectJSON({
        arid : "ppJj0E8g2R"
    })
    .expectJSON({
        title : "Mornings"
    })
    .expectJSON({
        mini_synopsis : "Mornings presents local news and issues, talking with everyday folk about current issues"
    })
    .expectJSON({
        short_synopsis : "Mornings presents local news and issues, talking with everyday folk about current issues"
    })
    .expectJSON({
        medium_synopsis : "Mornings presents local news and issues, talking with everyday folk about current issues. Local stories and issues are at the heart of the Mornings program, bringing you fresh local and regional information - including your opportunity to ask direct questions to the ACT Chief Minster each Friday"
    })
    .expectJSON({
        created_utc : "2014-10-09T05:01:49+0000"
    })
    .expectJSON({
        last_updated_utc : "2016-09-05T06:49:46+0000"
    })
    .expectJSON({
        service_airport_code: null
    })
    .toss();