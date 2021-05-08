class FactView {

    constructor(dateFact, parentDiv) {
        this.dateFact = dateFact;
        this.parentDiv = $(parentDiv);
        this.parentDiv.append(this.createdisplay());
    }

    createdisplay() {
        let disp = $(`
        <div class="factCard">Fact: ${this.dateFact.fact} </div>
        <p> Year: ${this.dateFact.year}</p>
        <br> `);
        return disp;
    }
}