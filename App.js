import React, { Component } from 'react';
import './App.css';

/////////////////VAR 4 COMPONENT/////////////////////////////

var todos = [
    {
        todoTitle: 'Increase my knowledge',
        todoResponsible: '27.03.2019',
        todoDescription: 'Ensure I read a book a week',
        todoPriority: 'Highest'
    },
    {
        todoTitle: 'Travel more!',
        todoResponsible: '31.12.2019',
        todoDescription: 'Travel to 2 new locations every year',
        todoPriority: 'Medium'
    },
    {
        todoTitle: 'Spend more time with my family',
        todoResponsible: '26.19.2018',
        todoDescription: 'Visit my parents at least once a month',
        todoPriority: 'High'
    }
]

//////////////////////////// COMPONENT-1 ////////////////////////

class App extends Component {

  constructor(props){
      super(props);

      this.state = {
          todos
      };
      this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleRemoveTodo(index){
      this.setState({
         todos:this.state.todos.filter(function(e, i){
             return i !== index;
         })
      })
  }

  handleAddTodo(todo){
      this.setState({
          todos: [...this.state.todos, todo]
      })
  }



  render() {
    return (
      <div className ="container">
       <TodoInput onAddTodo={this.handleAddTodo}/>
       <hr/>
        <h3>Daily Goal Count: <span className="badge">{this.state.todos.length}</span></h3>
        <ul className = "list-group">
         {this.state.todos.map((todo, index)=>
            <li className ="list-group-item" key={index}>
              <h4 className ="list-group-item-heading">{todo.todoTitle}<small><span className ="label label-info">{todo.todoPriority}</span></small></h4>
              <p><span className = "user"><i class ="far fa-calendar-alt"></i>{todo.todoResponsible}</span></p>
              <p>{todo.todoDescription}</p>
              <button className ="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><i class="fas fa-trash-alt"></i>Delete</button>
            </li>
         )}
        </ul>
       </div>
    );
}
}

//////////////////////////// COMPONENT-2 ////////////////////////

  class TodoInput extends Component{
      constructor(props){
          super(props);

          this.state = {
              todoTitle:'',
              todoResponsible:'',
              todoDescription:'',
              todoPriority:'Lowest'
          };
          this.handleInputChange = this.handleInputChange.bind(this); /* These lines BINDS (or adds) the change and submit event methods below to the constructor  */
          this.handleSubmit = this.handleSubmit.bind(this);
      }

 /* this below is the INPUT CHANGE event method */

        handleInputChange(event){
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
                [name]:value /* This sets the new state of the dom. name: value is the target and name of the property that you want to change / rendered below ie. "value" below  */
            })
        }

 /* this is the SUBMIT CHANGE method */
        handleSubmit(event){
            event.preventDefault(); /* prevents default html submit behaviour i.e a page refresh*/
            this.props.onAddTodo(this.state);
            this.setState({
                todoTitle:'',
                todoResponsible:'',
                todoDescription:'',
                todoPriority:'Lowest'
            });
        }


          render(){
             return(
                <div>
                   <div className="heading">
                    <h3>My Goal Tracker</h3>
                    <div className="thumb"><i class ="fa fa-thumbtack"></i></div>
                    <h4>Keep on track of your daily goals</h4>
                    </div>
                    <form className = "form-horizontal" onSubmit={this.handleSubmit}>
                     <div className = "form-group">
                      <label htmlFor = "inputTodoTitle" className="col-sm-5 control-label">Goal:</label>
                       <div className = "col-sm-12">
                        <input name = "todoTitle"
                               type ="text"
                               className = "form-control"
                               id = "inputTodoTitle"
                               value = {this.state.todoTitle}
                               onChange = {this.handleInputChange}
                               placeholder = "Title..."
                               />
                       </div>
                     </div>

                     <div className = "form-group">
                      <label htmlFor = "inputTodoResponsible" className="col-sm-5 control-label">Achieve it by:</label>
                       <div className = "col-sm-12">
                        <input name = "todoResponsible"
                               type ="text"
                               className = "form-control"
                               id = "inputTodoResponsible"
                               value = {this.state.todoResponsible}
                               onChange = {this.handleInputChange}
                               placeholder = "Date..."
                               />
                       </div>
                     </div>

                     <div className = "form-group">
                      <label htmlFor = "inputTodoDescription" className="col-sm-5 control-label">Description:</label>
                       <div className = "col-sm-12">
                        <textarea name = "todoDescription"
                                   type ="text"
                                   className = "form-control"
                                   id = "inputTodoDescription"
                                   value = {this.state.todoDescription}
                                   onChange = {this.handleInputChange}
                                   placeholder = "Add..."
                                   />
                       </div>
                     </div>

                     <div className = "form-group">
                      <label htmlFor = "inputTodoPriority" className="col-sm-5 control-label">Select Priority:</label>
                       <div className = "col-sm-12">
                        <select    name = "todoPriority"
                                   className = "form-control"
                                   id = "inputTodoPriority"
                                   value = {this.state.todoPriority}
                                   onChange = {this.handleInputChange}>
                          <option>Lowest</option>
                          <option>Low</option>
                          <option>Medium</option>
                          <option>High</option>
                          <option>Highest</option>
                        </select>
                       </div>
                     </div>

                     <div className = "form-group">
                      <div className = "col-sm-12">
                        <button type ="submit" className = "btn-add">Add New Goal</button>
                       </div>
                     </div>
                   </form>
                </div>
             )
          }

      }

export default App;
