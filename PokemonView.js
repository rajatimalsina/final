class PokemonView {

    constructor(poke, parentDiv, numb) {
        this.poke = poke;
        this.numb = numb;
        this.parentDiv = $(parentDiv);
        this.parentDiv.append(this.createdisplay());
    }

    createdisplay() {
        let disp = $(`<div class="card">Pokemon index ${this.numb}: ${this.poke.name} </div> `);
        return disp;
    }
}