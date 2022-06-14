import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('articles').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          article: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('articles').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/App")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <header className="container-header mb-0">
       
       
      <p className="text-light" style={{ textAlign: "center" }}>
      <div align="center">
<img src="https://freepngimg.com/thumb/pokemon/2-2-pokemon-png-pic.png" height="100" width="300"
      />
</div>
        </p>
             
<div className="d-flex justify-content-center align-items-center" >
  {/* <h1>M FAJRIN </h1> */}
    
  </div>
      <div class="container">
        
        <div class="panel panel-default">
          <div class="panel-heading">
            
          <h4><Link to="/TodoListPokemon">List Pengguna</Link></h4>
            <h3 class="panel-title">
              {this.state.article.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>ID Pokemon:</dt>
              <dd>{this.state.article.body}</dd>
              <dt>Pengguna:</dt>
              <dd>{this.state.article.author}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
          <a href = "/App">
            <p className="text-light" style={{ textAlign: "center" }}>
            <div className="d-flex justify-content-center align-items-center">
      <img src="https://icon-library.com/images/undo-512_4779.png" height="80" width="80"
            />
      </div>
              </p>
                     </a>
        </div>
        </div>
     </header>
    );
  }
}

export default Show;
