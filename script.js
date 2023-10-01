let links = document.querySelectorAll("a")
for(let link of links){
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let id = link.getAttribute("href")
        let section = document.querySelector(id);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }); 
}


// let traits = document.querySelectorAll(".trait")

// for (let trait of traits) {
//     trait.addEventListener("click",function(){
//         document.querySelector(".affiche span").style.display = "inline"
//         document.querySelector(".affiche").style.margin="0px"
//         document.querySelector(".joueur").style.display = "block"
//     })
// }

var options = {
    root: null,
    rootMargin: "1px",
    threshold: 1,
  };

const observer = new IntersectionObserver(function(entries){
    for(let entry of entries){
        if(entry.isIntersecting == true){
            entry.target.style.padding = "0"
            let id = entry.target.id
            let spans = document.querySelectorAll("#"+id+" span")
            for(let span of spans){
                span.style.display = "inline-block"
                span.style.animationName = "apparition-nomEkip";
                span.style.animationDuration = ".5s";
                span.style.animationFillMode = "forwards";
                // span.style.animationDelay = "1s";
            }
            let infos = document.querySelectorAll("#"+id+" .info span")
            for(let info of infos){
                info.style.display = "inline"
                info.style.animationName = "apparition-infos";
                info.style.animationDuration = "1s";
                info.style.animationFillMode = "forwards";
            }
            let imgsGauche = document.querySelectorAll("#"+id+" .gauche img")
            for(let img of imgsGauche){
                img.style.display = "inline"
                img.style.animationName = "apparition-joueurs-haut";
                img.style.animationDuration = ".5s";
                img.style.animationFillMode = "forwards";
            }
            let imgsDroite = document.querySelectorAll("#"+id+" .droite img")
            for(let img of imgsDroite){
                img.style.display = "inline"
                img.style.animationName = "apparition-joueurs-bas";
                img.style.animationDuration = ".5s";
                img.style.animationFillMode = "forwards";
            }
        }
        else{
            let id = entry.target.id
            let spans = document.querySelectorAll("#"+id+" span")
            for(let span of spans){
                span.style.display = "none"
            }
            let imgs = document.querySelectorAll("#"+id+" .joueur img")
            for(let img of imgs){
                img.style.display = "none"
            }
        }
    }
},options)

let affiches = document.querySelectorAll('.affiche')

for(let affiche of affiches){
    observer.observe(affiche)
}
