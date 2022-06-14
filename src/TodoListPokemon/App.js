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
      const { title, body, author } = doc.data();
      articles.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        body,
        author,
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
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              HISTORY PENGGUNAAN POKEMON
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-primary">Tambah Pengalaman</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ID Pokemon</th>
                  <th>Pengalaman</th>
                  <th>Pengguna</th>
                </tr>
              </thead>
              <tbody>
                {this.state.articles.map(article =>
                  <tr>
                    <td><Link to={`/show/${article.key}`}>{article.title}</Link></td>
                    <td>{article.body}</td>
                    <td>{article.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
