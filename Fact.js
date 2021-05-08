class Fact {

    constructor(obj_json) {
        this.fact = obj_json["text"];
        this.year = obj_json["year"];       
        console.log(this.fact);
    }
}

Fact.find = async (month, day) => {
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://numbersapi.p.rapidapi.com/" + month + "/" + day + "/date?json=true&fragment=true",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4559cb3c6cmsh0d87bf81ce28bdfp1d6a0bjsnc56aa28dc99d",
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
            }
        };
        
        let response = await $.ajax(settings);
        console.log("Fact:" + response);
        return new Fact(response);
};
