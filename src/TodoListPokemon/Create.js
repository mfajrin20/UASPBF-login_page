import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('articles');
    this.state = {
      title: '',
      body: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body, author } = this.state;

    this.ref.add({
      title,
      body,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        body: '',
        author: ''
      });
      this.props.history.push("/App")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
  
    const { title, body, author } = this.state;
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
 
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Tambah Pokemon
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/App" class="btn btn-primary">List Pengalaman</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">ID Pokemon:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="body">Pengalaman:</label>
                <textArea class="form-control" name="body" onChange={this.onChange} placeholder="Body" cols="80" rows="3">{body}</textArea>
              </div>
              <div class="form-group">
                <label for="author">Pengguna:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
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
        </div>
      </div>
      </header>
    
    );
  }
}

export default Create;

