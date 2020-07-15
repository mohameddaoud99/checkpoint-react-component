import React, { Component } from 'react';
import './App.css';
import ProfilPhoto from "./profile/ProfilPhoto" ;
import FullName from "./profile/FullName" ;
import Adress from "./profile/Adress" ;


class Main extends Component {
  render(){
  return (
    <div className="App">
   

    <div class="container">
  
  <div class="row">
   
    
    <div class="col">
      Welcome
    </div>
  </div>
</div>
    

<div class="jumbotron jumbotron-fluid">
  <div class="container">
  <ProfilPhoto className="im1"/>

  </div>
</div>

<div class="jumbotron jumbotron-fluid jjf">
  <div class="container">
  <div className="name"><FullName/></div>
      <div className="adresse"><Adress/></div>

  </div>
</div>

      
     
    </div>
    
  );
}
}

export default Main;
