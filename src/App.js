import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const URL = "http://localhost:3000/pizzas"


class App extends Component {
  constructor(){
    super()
    this.state ={
      pizzas: [],
      editPizza: {
        id: 0,
        topping: "",
        size: "",
        vegetarian: false
      }
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(pizza => this.setState({pizzas: pizza}))
  }

  editPizza = (pizza) => {
    // console.log(pizza)
    this.setState({editPizza: pizza})
  }

  updatePizza = (info, event) => {
    let allPizza = [...this.state.pizzas]
    let currentPizza = {...this.state.editPizza}
    if (event.target.type === "radio"){
      info = (event.target.value === "Not Vegetarian" && event.target.checked === true) ? false : true
    }
    currentPizza[event.target.name] = info
    allPizza.splice(allPizza.findIndex(pizza => currentPizza.id === pizza.id), 1, currentPizza)
    // debugger
    this.setState({pizzas: allPizza, editPizza: currentPizza})
    console.log("checking assumptions ", currentPizza)
    console.log(this.state.editPizza)
  }

  submitHandler = (event) => {
    let updatedPizza = this.state.editPizza
    let updatedBody = {topping: updatedPizza.topping,
      size: updatedPizza.size,
      vegetarian: updatedPizza.vegetarian}
    fetch(URL + "/" + updatedPizza.id, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
        "Accepted" : "application/json"
      },
      body: JSON.stringify(updatedBody)
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editThisPizza={this.state.editPizza} updatePizza={this.updatePizza} submitHandler={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzas} editingPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
