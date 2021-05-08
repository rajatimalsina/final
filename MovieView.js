class MovieView {

    constructor(movieName, parentDiv) {
        this.movieName = movieName;
        this.parentDiv = $(parentDiv);
        this.parentDiv.append(this.createdisplay());
    }

    createdisplay() {
        let disp = $(`
        <div class="movieCard">Movie : ${this.movieName.name} (${this.movieName.year})</div>
        <p> IMDB Rating: ${this.movieName.rating}</p>
        <p> Language: ${this.movieName.language}</p>
        <p> Genre: ${this.movieName.genre}</p>
        <p> Cast: ${this.movieName.actors}</p>
        <br> `);
        return disp;
    }
}