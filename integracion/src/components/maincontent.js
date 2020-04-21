import React from "react";
import DogList from "./dogList";

function MainContent(){
    return(
        <div className="main_content">

            <DogList 
                dog={{name: "Romeo", imgUrl: "https://dam.ngenespanol.com/wp-content/uploads/2019/06/mirada-perros.png", 
                raza:" Orejon"}}
            />

            <DogList 
                dog={{name: "Pepe", imgUrl: "https://live.mrf.io/statics/i/ps/www.ecestaticos.com/imagestatic/clipping/dfd/996/dfd996d0c22dd7e69412274972f5598d/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg?mtime=1579565836", 
                raza:" Labrador"}}
            />

            <DogList 
                dog={{name: "Juan", imgUrl: "https://www.petdarling.com/articulos/wp-content/uploads/2016/07/todas-las-razas-de-perros.jpg", 
                raza:"Peludo"}}
            />

            <DogList 
                dog={{name: "Luis", imgUrl: "https://ep01.epimg.net/elpais/imagenes/2018/06/25/buenavida/1529929537_419627_1529933291_noticia_normal.jpg", 
                raza:"Pequeño"}}
            />
        </div>
    )
}

export default MainContent;