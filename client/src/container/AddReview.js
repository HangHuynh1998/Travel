import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { storage } from '../firebase';
import { addComment, addCommentStart } from '../store/actions/comment';

class AddReview extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.submit = this.submit.bind(this)
    this.validation = this.validation.bind(this)
    this.state = {
      image:"",
     name:"",
     title:"",
     avatar:"",
     comment:"",
     validation: false,
     valiname: "",
     valititle: "",
     valiavatar: "",
     valicomment: "",

    }
  }
  componentDidMount(){
    this.props.addCommentStart()
    
  }
  componentWillReceiveProps(nextProps){
    this.props.addCommentStart()
    if(nextProps.status === "success"){
      this.props.history.push(`/review`)
    }
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  handleChangeImage = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] }, () => {
        this.handleUpload();
      });
    }
  };
  handleUpload() {
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ avatar: url });
          });
      }
    );
  }
  validation() {
    this.setState(
      {
        validation: false,
        valiname: "",
        valititle: "",
        valiavatar: "",
        valicomment: "",
      },
      () => {
        if (this.state.name === "") {
          this.setState({
            valiname: "Tên chưa được nhập",
            validation: true,
          });
        }
        if (this.state.title === "") {
          this.setState({
            valititle: "Tiêu đề chưa được nhập",
            validation: true,
          });
        }
        if (this.state.avatar === "") {
          this.setState({
            valiavatar: "Hình ảnh chưa có",
            validation: true,
          });
        }
        if (this.state.comment === "") {
          this.setState({
            valicomment: "Đánh giá chưa được nhập",
            validation: true,
          });
        }
      }
    )
  }
  submit = async() => {
    await this.validation();
    if (this.state.validation === true) {
      return;
    } else {
    this.props.addReview(
      this.state.name,
      this.state.title,
      this.state.avatar,
      this.state.comment)
      this.props.history.push(`/review`)}
  }
    render() {
      console.log("sshss",this.props.status);
        return (
            <div>
                <NavBar />
                <div
          className="limiter"
          style={{ backgroundImage: `url('assets/images/travel5.jpg')` }}
        >
          <div className="container-login100">
            <div className="wrap-login100">
              <form
                className="login-form validate-form"
                style={{ background: "white" }}
              >
                    <span className="login100-form-title p-b-43">
                     Thêm đánh giá
                    </span>
                    <div className="form-group">
                  <label>Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Nhập tên"
                    onChange={(e) => this.handleChange(e)}
                  />
                   <span class="text-danger">{this.state.valiname}</span>
                </div>
                <div className="form-group">
                  <label>Tiêu đề</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="title"
                    placeholder="Nhập tên"
                    onChange={(e) => this.handleChange(e)}
                  />
                   <span class="text-danger">{this.state.valititle}</span>
                </div>
                <div className="form-group">
                      <label  style = {{marginBottom:"5px"}}>
                        Chọn hình ảnh
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="image"
                        onChange={(e) => this.handleChangeImage(e)}
                      />
                       <span class="text-danger">{this.state.valiavatar}</span>
                    </div>
                    <div className="form-group">
                      <process value={process} max="100"></process>
                      <img src={this.state.avatar} alt="" />
                    </div>
                    <div className="form-group">
                      <label >Đánh giá</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="comment"
                        aria-describedby="comment"
                        placeholder="Thêm đánh giá"
                        onChange={(e) => this.handleChange(e)}
                      />
                       <span class="text-danger">{this.state.valicomment}</span>
                    </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn" onClick = {this.submit}>
                    Thêm đánh giá
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
            </div>
        );
    }
}
function mapStateProps(state) {
  return {
    status: state.comment.loadingcomment,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addCommentStart:()=>dispatch(addCommentStart()),
    addReview:(name,title,image,comment) => dispatch(addComment(name,title,image,comment))
  };
}


export default withRouter(connect(mapStateProps, mapDispatchToProps)(AddReview));