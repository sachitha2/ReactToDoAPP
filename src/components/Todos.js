import React,{Component} from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types'; 

class Todos extends Component {
    markComplete = () =>{
     console.log("helloo");
 }



render() {
    console.log(this.props.todos);
  return this.props.todos.map((todo) => (
      <TodoItems  key={todo.id} todo={todo} markComplete={this.props.markComplete}
      delTodo={this.props.delTodo}
      />
  ));
}
}
Todos.propTypes = {
    todos : PropTypes.array.isRequired

}


export default Todos;

