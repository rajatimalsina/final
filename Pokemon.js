class Pokemon {

    constructor(obj_json) {
        this.name = obj_json["name"];
    }
}

Pokemon.find = async (id) => {
        let response = await $.ajax("https://pokeapi.co/api/v2/pokemon/"+id,
        {
            type: "GET",
            dataType: "json"
        });
        return new Pokemon(response);
        
};
