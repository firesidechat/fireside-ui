//map array results to React component
class RobotItems extends React.Component {
  render() {
    const topics = ["React", "JSX", "JavaScript", "Programming"];
    return (
      <div>
        <h3>Topics I am interested in</h3>
        <ul>
          {topics.map((topic) => <li>{topic}</li>)}
        </ul>
      </div>
    );
  }
}

class CommentBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showComments : false
      comments : [
        {id : 1, author: "Anne Droid", body: "Great picture", avatarUrl:'images/default-avatar.png'},
        {id : 2, author: "Bending Bender", body: "Excellent stuff", avatarUrl:'images/default-avatar.png'}
      ]
    }
    this._toggleComments = this._toggleComments.bind(this);
    //this._getComments = this._getComments.bind(this);
  }

  //Comment maker app example
  _getComments(){
    return this.state.comments.map((comment) => {
      return <Comment author={comment.author} body={comment.body} key={comment.id} avatarUrl={comment.avatarUrl}/> ;
    });
  }

  _deleteComment(comment){
    $.ajax.(){
      type: 'DELETE',
      url: `/api/comments/${comment.id}`,
      success: (response) => {
        let msg = 'successfully deleted!';
        alert(msg);
        return msg;
      }
    }

    //immediately get rid of comment from DOM/UI; if it f's up user don't need ta kno

    const comments = [...this.state.comments]; //get all current comments
    commentId = comments.indexOf(comment); //get id of recent comment
    comments.splice(commentId,1); //strip out that comment immediately, even if not deleted from server yet
    this.setState({ comments }); //set the current comments = to the stripped version
  }

  _toggleComments(e){
    e.preventDefault();
    this.setState((prevState) => {
      showComments = !prevState.showComments;
    });
  }

  //example of arrow function in ajax callback
  _fetchComments() {
    $.ajax({
      method: 'GET',
      url: 'comments.json',
      success: ((comments) => {
        this.setState({
          comments : comments
        });
      })
    });
  }
  componentWillMount(){
    this._fetchComments();
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){
    
  }

  render (){
    const comments = this._getComments();
    let buttonText = "Show comments";
    let commentNodes;
    if(this.state.showComments){
      commentNodes = (
        <div className = "comment-list">
          {/*LIST COMMENT BLOCKS*/comments}
        </div>
      );
      buttonText = "Hide comments";
    }

    _addComment(author,body){
      const comment = {
        id: this.comments.length +1,
        author,
        body,
      }
      this.setState({
        comments: this.comments.concat([comment]) //better than push because new instead of held reference
      });
    }

    return (
      <div className = "comment-box">
        <h3> Comments </h3>
        <h4 className = "comment-count">{/*COUNT*/comments.length} comment{comments.length > 1 ? 's' : ''}</h4>
        <button onClick={this._toggleComments.bind(this)}>
         {buttonText}
        </button>
        <CommentForm addComment={this._addComment.bind(this)} />
        {commentNodes}
      </div>
    );
  }
}

class Comment extends React.Component {
  //get and handle props passed to the component
  render (){
    return (
      <div className = "comment">
        <p className = "comment-header">{/*NAME*/}{this.props.author}</p>
        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`}/>
        <p className = "comment-body">{/*COMMENT*/}{this.props.body}</p>
        <div className = "comment-footer">{/*OPTIONS*/}
          <a href="#" className = "comment-footer-delete">Delete comment</a>
        </div>
      </div>
    );
  }
}

class CommentForm extends React.Component {
  //get and handle props passed to the component

  _handleSubmit(e){
    e.preventDefault();
    let author={this._author} ;
    let body={this._body} ;

    this.props.addComment(author,body);
  }

  render (){
    return (
      <form className = "comment-form" onSubmit="this._handleSubmit.bind(this)">
        <label>Join the discussion!</label>
        <div className = "comment-form-fields">
          <input type="text" name="name" placeholder="Name:" ref={(input) => this._author = input}/>
          <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    );
  }
}