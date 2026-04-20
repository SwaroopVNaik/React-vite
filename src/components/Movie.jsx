let Movie = () => {
    let Movie_Name = "Dhurandar_2";
    let actor = "Ranveer Singh";
    let actoress = "Sara_Arjun"
    let movie_image = 'https://opensource.fb.com/img/projects/react.jpg'

    return <div>
        <h1>Movie Component</h1>
        <h2>Movie_Name : {Movie_Name}</h2>
        <h2>Actor : {actor}</h2>
        <h2>Actoress : {actoress}</h2>
        <img src= {movie_image}/>
        <h2>Movie Ticket Pice : {500*3}</h2>
    </div>
}

export default Movie;