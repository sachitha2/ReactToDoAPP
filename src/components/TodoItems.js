import React, { Component } from 'react'
import PropTypes from 'prop-types'; 


export class TodoItems extends Component {
    getStyle = () => {
       
            return {
                background : '#f4f4f4',
                padding:'10px',
                borderBottom:'1px #ccc dotted',
                
                textDecoration: this.props.todo.completed ? 
                'line-through' : 'none'
            }
        
    }
    // markComplete = (e) =>{
    //     console.log(this.props)
    // }
  render() {
      const { id , title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type='checkbox' onChange={this.props.markComplete.bind(this,id)} />{''}
            {title }
            <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}


const btnStyle = {
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding :'5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    float:'right'
}

TodoItems.propTypes = {
    todo : PropTypes.object.isRequired

}

export default TodoItems
