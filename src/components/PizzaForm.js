import React, { Component } from "react"

class PizzaForm extends Component  {
  constructor(props){
    
    super()
  this.state = { 
    topping : '',
    size : '',
    vegetarian: false
  }
}
  componentDidUpdate(prevProps){ 
    
    if(prevProps.pizzaEdit !== this.props.pizzaEdit){
     if(this.props.pizzaEdit){
    let pizza = this.props.pizzaEdit
    this.setState({topping: pizza.topping, size: pizza.size, vegetarian: pizza.vegetarian})
    
  
     }
    }
  }
    
  
  render(){
    let newPizza = {
      topping : this.state.topping, 
      size : this.state.size, 
      vegetarian: this.state.vegetarian
      
    }
    
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                this.state.topping
                

              } onChange={(event) => {this.setState({topping: event.target.value})}} />
        </div>
        <div className="col">
          <select value={this.state.size} 
          className="form-control"
          onChange={(event) => {this.setState({size: event.target.value})} }
         >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian} onClick={ () => this.setState({vegetarian : true})}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian} onClick={ () => this.setState({vegetarian : false})}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={ () => this.props.getEditedPizza(newPizza)}>Submit</button>
        </div>
      </div>

  )
}
}

export default PizzaForm
