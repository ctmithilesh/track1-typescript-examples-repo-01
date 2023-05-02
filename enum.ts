// create an Enum
enum Movie{
    Genre="Comedy",
    ReleaseDate="27th April 2023",
    Name="Murder Mystery",
}
// assign variable from an Enum
let comedy: Movie = Movie.Genre
// print properties of the Enum 
console.log(Movie.Genre)
console.log(Movie.Name)
console.log(Movie.ReleaseDate)
console.log(comedy)

enum Countries{
    India="India",
    Australia="Australia",
    China="China",
    Germany="Germany",
    France="France",
    Denmark="Denmark"
}
console.log(Countries)
console.log(Countries.France)

enum ApplicationData{
    API_KEY="436643636",
    ENCRYPTION_KEY="secretkey",
    APP_Language="English",
    ADMIN="Admin"
}