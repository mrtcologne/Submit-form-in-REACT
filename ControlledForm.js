import React from 'react';

class MyForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
      input:'',
      submit: ''
  }
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({
        input:event.target.value
    })
}

handleSubmit(event) {
    this.setState({
        submit:this.state.input
    })
}


render(){

return (
    <div>
  <form onSubmit ={this.handleSubmit}>
  <input value ={this.state.submit} onChange ={this.handleChange}/>
  <button type='submit'>Submit</button>
  </form>
  <h1>{this.state.submit}</h1>

    </div>
)


}

}