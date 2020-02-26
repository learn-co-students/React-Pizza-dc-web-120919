import React from "react"

const PizzaForm = (props) => {

  let handleChangedInputs = (event) => {
    console.log(event.target.value)
    props.updatePizza(event.target.value, event)
  }
  
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.editThisPizza.topping
              } onChange={(event) => handleChangedInputs(event)}/>
        </div>
        <div className="col">
          <select value={props.editThisPizza.size} name="size" onChange={(event) => handleChangedInputs(event)} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" 
              checked={props.editThisPizza.vegetarian} 
              onChange={(event) => handleChangedInputs(event)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" 
              checked={!props.editThisPizza.vegetarian}
              onChange={(event) => handleChangedInputs(event)}
              />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(event) => {props.submitHandler(event)}}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm