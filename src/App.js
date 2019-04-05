import React, { Component } from "react";
import Input from "./components/UI/Input/Input";
import styled from "styled-components";
const Button = styled.button`
  padding: 7px;
  font-family: Georgia, "Times New Roman", Times, serif;
  border: none;
  width: 100%;
  background: #ee2e2e4a;
  margin-top: 20px;
  :hover {
    background: #ee2e2ead;
  }
`;
const Section = styled.section`
  width: 70%;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
`;
class App extends Component {
  state = {
    orderForm: {
      fullName: {
        typeOfElement: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name Please ..."
        },
        value: "",
        label: "Full Name"
      },
      cardNumber: {
        typeOfElement: "input",
        elementConfig: {
          type: "number",
          placeholder: "2343164673... "
        },
        value: "",
        label: "Credit Card Number"
      },
      pizza: {
        typeOfElement: "select",
        elementConfig: {
          options: [
            { value: "Margherita", displayValue: "Margherita" },
            { value: "Marinara", displayValue: "Marinara" },
            { value: "Romana", displayValue: "Romana" },
            { value: "Siciliana", displayValue: "Siciliana" },
            { value: "Quattro Stagioni", displayValue: "Quattro Stagioni" },
            { value: "Quattro Formaggi", displayValue: "Quattro Formaggi" },
            { value: "Vegetariana", displayValue: "Vegetariana" },
            { value: "Calzone", displayValue: "Calzone" }
          ]
        },
        value: "",
        label: "Choose Your Pizza"
      },
      deliveryMethod: {
        typeOfElement: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: "",
        label: "Delivery Type"
      },
      deliveryAddress: {
        typeOfElement: "input",
        elementConfig: {
          type: "text",
          placeholder: "Delivery Address"
        },
        value: "",
        label: "Delivery Address"
      }
    }
  };

  onChangeHandler = (event, inputidentifer) => {
    const updatedOrderForm = { ...this.state.orderForm };
    // eslint-disable-next-line
    const element = { ...updatedOrderForm[inputidentifer] };
    updatedOrderForm.value = event.target.value;
    // console.log(event.target.value, inputidentifer);
    console.log(updatedOrderForm.value);
  };
  render() {
    const orderFormArray = [];
    for (let key in this.state.orderForm) {
      orderFormArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    return (
      <div>
        <Section>
          <Image src="https://i0.wp.com/mycornerofitaly.com/wp-content/uploads/2016/11/COVER-CON-TIROLESE.png?fit=745%2C360&ssl=1" />
        </Section>

        <Section>
          <h3>Order Now !</h3>
          <hr />
          <form>
            {orderFormArray.map(order => (
              <Input
                typeOfElement={order.config.typeOfElement}
                elementConfig={order.config.elementConfig}
                value={order.config.value}
                key={order.id}
                label={order.config.label}
                onchangeValue={event => this.onChangeHandler(event, order.id)}
              />
            ))}
            <Button>Submit</Button>
          </form>
          {console.log(orderFormArray)}
        </Section>
      </div>
    );
  }
}

export default App;
