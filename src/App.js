import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = { 
    pizzaArray: [],
    editPizza : {
      id: null,
      topping: '', 
      size : '', 
      vegetarian: false
    }
  }

  componentDidMount(){ 
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({pizzaArray : pizzas}) )
  }

  grabPizzaEdit = (pizza) => { 
    this.setState({editPizza : pizza})
  }
  getEditedPizza = (pizza) => { 
    let id = this.state.editPizza.id 
    
    console.table(pizza)
    console.table(this.state.editPizza)
    fetch(`http://localhost:3000/pizzas/${id}`, { 
      method: "PATCH", 
      headers: {"Content-Type" : 
                "application/json",
      Accept: "application/json"},
      body: JSON.stringify({
        id: id, 
        topping: pizza.topping, 
        size: pizza.size, 
        vegetarian: pizza.vegetarian
      })
    })
    .then(res => res.json())
    .then(pizza => this.addEditedPizza(pizza))
  }
  addEditedPizza(pizza) { 
    this.setState([...this.state.pizzaArray, pizza])
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaEdit={this.state.editPizza} getEditedPizza={this.getEditedPizza}/>
        <PizzaList pizzaArray={this.state.pizzaArray} grabPizzaEdit={this.grabPizzaEdit}/>
      </Fragment>
    );
  }
}

export default App;
