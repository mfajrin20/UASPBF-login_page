import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('articles');
    this.unsubscribe = null;
    this.state = {
      articles: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const articles = [];
    querySnapshot.forEach((doc) => {
      const { title, body, author, perasaan, tahap , skill, reward} = doc.data();
      articles.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        body,
        author,
        perasaan,
        tahap,
        skill,
        reward
      });
    });
    this.setState({
      articles
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
  
    return (
      
      <header className="container-header">
     
     
            <p className="text-light" style={{ textAlign: "center" }}>
            <div align="center">
      <img src="https://freepngimg.com/thumb/pokemon/2-2-pokemon-png-pic.png" height="300" width="700"
            />
      </div>
              </p>
                   
      <div className="d-flex justify-content-center align-items-center" >
        {/* <h1>M FAJRIN </h1> */}
          
        </div>
     
   
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
           
            <div class="text-center">
              HISTORY PENGGUNAAN POKEMON
              </div>
            </h3>
          </div>
          <div class="panel-body">
            
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID Pokemon</th>
                  <th>Nama Pokemon</th>
                  <th>Generasi Pokemn</th>
                  <th>Jenis Pokemon</th>
                  <th>Pengalaman</th>
                  <th>Skill Pokemon</th>
                  <th>Reward</th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map(article =>
                  <tr>
                    <td>{article.title}</td>
                    <td>{article.body}</td>
                    <td>{article.author}</td>
                    <td>{article.perasaan}</td>
                    <td>{article.tahap}</td>
                    <td>{article.skill}</td>
                    <td>{article.reward}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        <a href = "/dashboard">
            <p className="text-light" style={{ textAlign: "center" }}>
            <div className="d-flex justify-content-center align-items-center">
      <img src="https://icon-library.com/images/undo-512_4779.png" height="80" width="80"
            />
      </div>
              </p>
                     </a>
                    
                    
      </div>
       </header>
    );
  }
}

export default App;
