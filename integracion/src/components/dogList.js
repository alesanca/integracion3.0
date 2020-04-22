import React from "react";
import "../css/dogList.css";

class DogList extends React.Component {
    constructor(){
        super() //Esto tiene que ir siempre de los constructores
        this.state = {
            answer: "Yes"
        }
    }

    render(){
        return(
            <div className="doglist">
               
                <img src= {this.props.dog.imgUrl}/>
                <h3>Nombre: {this.props.dog.name}</h3>
                <p>Raza: {this.props.dog.raza}</p>
            </div>

        )
    }
}

export default DogList;