import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      body: '',
      author: '',
      perasaan:'',
      tahap: '',
      skill: '',
      reward: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('articles').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const article = doc.data();
        this.setState({
          key: doc.id,
          title: article.title,
          body: article.body,
          author: article.author,
          perasaan: article.perasaan,
          tahap: article.tahap,
          skill: article.skill,
          reward: article.reward
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({article:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body, author, perasaan, tahap, skill, reward } = this.state;

    const updateRef = firebase.firestore().collection('articles').doc(this.state.key);
    updateRef.set({
      title,
      body,
      author,
      perasaan,
      tahap,
      skill,
      reward
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        body: '',
        author: '',
        perasaan: '',
        tahap: '',
        skill: '',
        reward:''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
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
            <h3 class="panel-title">
            <div class="text-center">
              Edit Pengalaman
              </div>
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">List Pengalaman</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">ID Pokemon:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="body">Pengalaman:</label>
                <input type="text" class="form-control" name="body" value={this.state.body} onChange={this.onChange} placeholder="Body" />
              </div>
              <div class="form-group">
                <label for="author">Pengguna:</label>
                <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="perasaan">Perasaan:</label>
                <input type="text" class="form-control" name="perasaaan" value={this.state.perasaan} onChange={this.onChange} placeholder="Perasaaan" />
              </div>
              <div class="form-group">
                <label for="tahap">Tahap:</label>
                <input type="text" class="form-control" name="tahap" value={this.state.tahap} onChange={this.onChange} placeholder="Tahap" />
              </div>
              <div class="form-group">
                <label for="skill">Skill:</label>
                <input type="skill" class="form-control" name="skill" value={this.state.skill} onChange={this.onChange} placeholder="skill" />
              </div>
              <div class="form-group">
                <label for="reward">Reward:</label>
                <input type="reward" class="form-control" name="reward" value={this.state.reward} onChange={this.onChange} placeholder="reward" />
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
       </header>
    );
  }
}

export default Edit;
