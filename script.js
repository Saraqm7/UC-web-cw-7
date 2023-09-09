const movie1 = {
name:" toy story",
img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmovies.disney.com%2Ftoy-story&psig=AOvVaw0tn7tiMIvWXUqOYZJzqrYi&ust=1694362619186000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCJDynuX2nYEDFQAAAAAdAAAAABAE",

}
const movie2 ={
name:"barbi",
img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0b%2FBarbie_Logo.svg%2F1200px-Barbie_Logo.svg.png&tbnid=GeRk4W5iBqsUzM&vet=12ahUKEwieq4Ol-J2BAxXvvicCHWz8DU8QMygBegQIARBr..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBarbie&docid=BE-UBxExaTrpQM&w=1200&h=594&q=barbie&ved=2ahUKEwieq4Ol-J2BAxXvvicCHWz8DU8QMygBegQIARBr",
}
const movie3 = {
name:"harry potter",
img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F6e%2FHarry_Potter_wordmark.svg&tbnid=1iJrKV1m9aAUzM&vet=12ahUKEwiSpdj0-J2BAxW5pycCHQe6BvkQMygBegQIARBr..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHarry_Potter&docid=cKB67ZfE3y9DpM&w=2180&h=743&q=harry%20potter&ved=2ahUKEwiSpdj0-J2BAxW5pycCHQe6BvkQMygBegQIARBr",

}

const movies =[]
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);

document.getElementById("container")
movies.forEach(function(movie){

    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${movie.img}" alt="movie picture" />
 <h2>${movie.name}</h2>
 </div>
`;
}


)
