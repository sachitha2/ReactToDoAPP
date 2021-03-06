  import React,{Component} from 'react';
  import Todos from './components/Todos'
  import Header from './components/layout/Header'
  import AddTodo from './components/AddTodo'
import './App.css';

class App extends Component {
   state = {
      todos:[
        {
          id : 1,
          title:'Take out the trash',
          completed:false
        },
        {
          id : 2,
          title:'Hi',
          completed:false
        },
        {
          id : 3,
          title:'Take out the trash',
          completed:false
        },
        {
          id : 4,
          title:'Take out the trash',
          completed:false
        },
        {
          id : 5,
          title:'Take out the trash',
          completed:false
        },
      ]
  }

  delTodo = (id) =>{
    console.log(id);
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})
  }
  ////toggle complete
  markComplete = (id) => {
      console.log(id);
      this.setState({todos:this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })});
  }
  render() {
    console.log(this.state.todos);
    return(
        <div className="App">
          <div className="container">
            <Header/>
            <AddTodo />
            <Todos todos={this.state.todos} markComplete={this.markComplete}
             delTodo={this.delTodo}
             />

          </div>
          
        </div>
       
       

    );
  }
}

export default App;
