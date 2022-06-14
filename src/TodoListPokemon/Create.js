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
      author: '',
      perasaan:'',
      tahap:'',
      skill:'',
      reward:''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body, author, perasaan, tahap, skill, reward } = this.state;

    this.ref.add({
      title,
      body,
      author,
      perasaan,
      tahap,
      skill,
      reward
    }).then((docRef) => {
      this.setState({
        title: '',
        body: '',
        author: '',
        perasaan:'',
        tahap:'',
        skill:'',
        reward:''
      });
      this.props.history.push("/App")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
  
    const { title, body, author, perasaan, tahap, skill, reward } = this.state;
    return (
      <header className="container-header">
       
       
      <p className="text-light" style={{ textAlign: "center" }}>
      <div align="center">
<img src="https://freepngimg.com/thumb/pokemon/2-2-pokemon-png-pic.png" height="100" width="300"
      />
</div>
        </p>
             
<div className="d-flex justify-content-center align-items-center" >

 
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
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Judul" />
              </div>
              <div class="form-group">
                <label for="body">Nama:</label>
                <input class="form-control" name="body" value={body} onChange={this.onChange} placeholder="Nama" />
              </div>
              <div class="form-group">
                <label for="author">Pengalaman:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Pengguna" />
              </div>
              <div class="form-group">
                <label for="perasaan">Generasi:</label>
                <input type="text" class="form-control" name="perasaan" value={perasaan} onChange={this.onChange} placeholder="Generasi" />
              </div>
              <div class="form-group">
                <label for="tahap">Jenis:</label>
                <input type="tahap" class="form-control" name="tahap" value={tahap} onChange={this.onChange} placeholder="Jenis" />
              </div>
              <div class="form-group">
                <label for="skill">Skill:</label>
                <input type="skill" class="form-control" name="skill" value={skill} onChange={this.onChange} placeholder="skill" />
              </div>
              <div class="form-group">
                <label for="reward">Reward:</label>
                <input type="reward" class="form-control" name="reward" value={reward} onChange={this.onChange} placeholder="reward" />
              </div>
              <br/>
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

