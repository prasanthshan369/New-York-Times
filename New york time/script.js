let date = new Date();
let datetrans = date.toDateString();

document.getElementById("date").innerHTML = datetrans;


const world="https://api.nytimes.com/svc/topstories/v2/world.json?api-key=UrvFQUHxUFtAPWQk2yadh5Zvswk5SlZY";
let con=document.createElement("div");  
async function fet(i) {
let date=await fetch(`https://api.nytimes.com/svc/topstories/v2/${i}.json?api-key=UrvFQUHxUFtAPWQk2yadh5Zvswk5SlZY`);
let res=await date.json();
console.log(res);
res.results.forEach(element => {
let div=document.querySelector('body'); 
let cart=document.createElement("div");
let cart2=document.createElement("div");
let image = document.createElement("img");
    con.className = "container";
   
    cart.className = "card";

  let h3=document.createElement("h3").innerHTML=element.title;
   cart.append(h3);
   let h5 = document.createElement("h5");
   h5.innerHTML = element.abstract;
   cart.append(h5);
 
   let date = document.createElement("h6");
   date.innerHTML = `published_date: ${element.published_date}`;
   cart.append(date);


  let link = document.createElement("a");
  link.className = "card-link text-text-secondary";
  link.href = element.url;
  link.innerHTML = "Read More";
  cart.append(link);


image.setAttribute("class","col-md-3")
  image.setAttribute("src",element.multimedia[1].url);
  cart2.append(image);

 
  con.append(cart);
  con.append(cart2); 
  div.append(con); 
  });
}
  fet("home");
function remove() {
  con.innerHTML="";


}

