import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import cashIcon from '../assets/cart/cashondeliveryIcon.png'

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  let history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState('emoney')

  const manageData = (data) => {
    console.log(JSON.stringify(data))
  }

  return (<>
    <Wrapper>
      <form onSubmit={handleSubmit(manageData)}>
        <div className="bigger-div-checkout">
          <div className="huge-div">
            <button type='button' className="go-back" onClick={() => history.goBack()}>Go Back</button>
            <div className="checkout">
              <h4 className="main-title">Checkout</h4>
              <h5 className="sub-title">Billing Details</h5>
              <div className="row-in-tablet-plus">
                <div className="input-component">
                  <div className="input-component-top-div">
                    <label className={`${errors.firstName ? "red-color" : ""}`}>Name</label>
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                  </div>
                  <input autoComplete="off" className={`${errors.firstName ? "error" : "default"}`} placeholder="Alexei Ward" type='name'
                    {...register("firstName", {
                      required: "This field is required.", pattern: {
                        value: /^[a-zA-Z\s]*$/,
                        message: 'Wrong format.',
                      }
                    })}
                  />
                </div>
                <div className="input-component">
                  <div className="input-component-top-div">
                    <label className={`${errors.email ? "red-color" : ""}`}>Email</label>
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                  <input autoComplete="off" className={`${errors.email ? "error" : "default"}`} placeholder="alexei@mail.com" type='email'
                    {...register("email", {
                      required: "This field is required.", pattern: {
                        value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                        message: 'Wrong format.',
                      }
                    })}
                  />
                </div>
              </div>
              <div className="input-component">
                <div className="input-component-top-div">
                  <label className={`${errors.phoneNumber ? "red-color" : ""}`}>Phone number</label>
                  {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                </div>
                <input autoComplete="off" className={`${errors.phoneNumber ? "error" : "default"}`} placeholder="+1 202-555-0136" type='tel'
                  {...register("phoneNumber", {
                    required: "This field is required.", pattern: {
                      // eslint-disable-next-line no-useless-escape
                      value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                      message: 'Wrong format.',
                    }
                  })}
                />
              </div>
              <h5 className="sub-title">Shipping info</h5>
              <div className="input-component" id="your-adress">
                <div className="input-component-top-div">
                  <label className={`${errors.yourAdress ? "red-color" : ""}`}>Your Adress</label>
                  {errors.yourAdress && <p>{errors.yourAdress.message}</p>}
                </div>
                <input autoComplete="off" className={`${errors.yourAdress ? "error" : "default"}`} placeholder="1137 William Avenue" type='text'
                  {...register("yourAdress", {
                    required: "This field is required.", pattern: {
                      value: /^[a-zA-Z0-9\s,'-]*$/,
                      message: 'Wrong format.',
                    }
                  })}
                />
              </div>
              <div className="row-in-tablet-plus">
                <div className="input-component">
                  <div className="input-component-top-div">
                    <label className={`${errors.zipCode ? "red-color" : ""}`}>ZIP Code</label>
                    {errors.zipCode && <p>{errors.zipCode.message}</p>}
                  </div>
                  <input autoComplete="off" className={`${errors.zipCode ? "error" : "default"}`} placeholder="10001" type='text'
                    {...register("zipCode", {
                      required: "This field is required.",
                      pattern: {
                        value: /^(?=.*?[1-9])[0-9()-]+$/,
                        message: 'Wrong format.',
                      }
                    })}
                  />
                </div>
                <div className="input-component">
                  <div className="input-component-top-div">
                    <label className={`${errors.city ? "red-color" : ""}`}>City</label>
                    {errors.city && <p>{errors.city.message}</p>}
                  </div>
                  <input autoComplete="off" className={`${errors.city ? "error" : "default"}`} placeholder="New York" type='text'
                    {...register("city", {
                      required: "This field is required."
                    })}
                  />
                </div>
              </div>
              <div className="input-component">
                <div className="input-component-top-div">
                  <label className={`${errors.country ? "red-color" : ""}`}>Country</label>
                  {errors.country && <p>{errors.country.message}</p>}
                </div>
                <input autoComplete="off" className={`${errors.country ? "error" : "default"}`} placeholder="United States" type='text'
                  {...register("country", {
                    required: "This field is required."
                  })}
                />
              </div>
              <h5 className="sub-title">Payment details</h5>
              <div className="row-in-tablet-plus">
                <label className="payment-methods-main-label">Payment Method</label>
                <div className="payment-methods-div">
                  <div className={`input-component radio-component ${paymentMethod === "emoney" ? "emoney" : ""}`} onClick={() => setPaymentMethod('emoney')}>
                    <input onClick={() => setPaymentMethod('emoney')} checked={paymentMethod === 'emoney'} value="eMoney" autoComplete="off" placeholder="Cash on delivery" type='radio'
                      {...register("radio")}
                    />
                    <label>e-Money</label>
                  </div>
                  <div className={`input-component radio-component ${paymentMethod === "cash" ? "cash" : ""}`} onClick={() => setPaymentMethod('cash')}>
                    <input onClick={() => setPaymentMethod('cash')} checked={paymentMethod === 'cash'} value="cash" autoComplete="off" placeholder="Cash on delivery" type='radio'
                      {...register("radio")}
                    />
                    <label>Cash on delivery</label>
                  </div>
                </div>
              </div>
              {paymentMethod === 'emoney' ?
                <div className="row-in-tablet-plus">
                  <div className="input-component">
                    <div className="input-component-top-div">
                      <label className={`${errors.emoneyNumber ? "red-color" : ""}`}>E-money Number</label>
                      {errors.emoneyNumber && <p>{errors.emoneyNumber.message}</p>}
                    </div>
                    <input autoComplete="off" className={`${errors.emoneyNumber ? "error" : "default"}`} placeholder="238521993" type='text'
                      {...register("emoneyNumber", {
                        required: "This field is required.",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Wrong format.',
                        }
                      })}
                    />
                  </div>
                  <div className="input-component">
                    <div className="input-component-top-div">
                      <label className={`${errors.emoneyPin ? "red-color" : ""}`}>E-money PIN</label>
                      {errors.emoneyPin && <p>{errors.emoneyPin.message}</p>}
                    </div>
                    <input autoComplete="off" className={`${errors.emoneyPin ? "error" : "default"}`} placeholder="6891" type='text'
                      {...register("emoneyPin", {
                        required: "This field is required.",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Wrong format.',
                        }
                      })}
                    />
                  </div>
                </div>
                : <div className="cash-on-delivery-description">
                  <img src={cashIcon} alt="cash on delivery" />
                  <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>}
            </div>
          </div>
          <div className="summary">
            <h4 className="main-title">Summary</h4>





            <input type="submit" />
          </div>
        </div>
      </form>
    </Wrapper >
  </>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 2.4rem;
  padding-left: 2.55rem;
  padding-right: 2.95rem;
  padding-bottom: 9.7rem;
  background-color: rgba(250, 250, 250, 1);

  .form {
    width: 111rem;
  }

  .main-title {
    font-style: normal;
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 3.8rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: #000000;
    font-family: 'Manrope';
  }

  .summary {
    width: 100%;
    height: 200px;
    background-color: white;
    padding: 3.2rem 2.4rem;
    row-gap: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0.8rem;
  }

  .huge-div {
    width: 100%;
  }

  .cash-on-delivery-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    row-gap: 3rem;
    margin-bottom: 1rem;
  }

  .cash-on-delivery-description img {
    transform: scale(1.3);
  }

  .cash-on-delivery-description p {
    opacity: 0.5;
    text-align: center;
  }

  label {
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.0214286rem;
    font-family: "Manrope";
    color: #000000;
  }

  .payment-methods-div {
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    margin-bottom: 2.5rem;
  }

  .payment-methods-div div {
    height: 5.6rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
    margin-top: 0;
  }

  input[type='radio']:after {
    height: 20px;
    border-radius: 20px;
    /* top: -2px;
    left: -1px;
    position: relative; */
    background-color: white;
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: visible;
    border: 1px solid #CFCFCF;
    width: 20px;
  }

  input[type='radio']:checked:after {
    height: 20px;
    border-radius: 20px;
    /* top: -2px;
    left: -1px;
    position: relative; */
    background-color: #D87D4A;
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: visible;
    border: 5px solid white;
    box-shadow: 0 0 0.3rem rgb(140, 139, 139);
    width: 20px;
  }

  .payment-methods-main-label {
    margin: 1.6rem 0;
  }

  .radio-component,
  .radio-component label {
    cursor: pointer;
  }

  input[type=radio] {
    width: 20px;
    height: 20px;
    margin-right: 1.6rem;
  } 

  .radio-component {
    border: 1px solid #CFCFCF;
    &:hover {
      border: 2px solid #D87D4A;
    }
  }

  .emoney,
  .cash {
    border: 2px solid #D87D4A;
  }

  #your-adress {
    max-width: unset;
  }

  .row-in-tablet-plus {
    display: flex;
    flex-direction: column;
  }

  .error:not(input[type=radio]) {
    outline: none;
    border: 2px solid #CD2C2C;
    &:focus {
      border: 2px solid #CD2C2C;
    }
  }

  .red-color {
    color: #CD2C2C;
  }

  input:not(input[type=radio]) {
    width: 100%;
    height: 5.6rem;
    border: 1px solid #CFCFCF;
    padding: 1.8rem 2.4rem;
    box-sizing: border-box;
    border-radius: 8px;
    background: #FFFFFF;
  }

  input:not(input[type=radio]):focus {
    outline: none;
    border: 2px solid #D87D4A;
  }

  .input-component-top-div p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: right;
    letter-spacing: -0.0214286rem;
    color: #CD2C2C;
    font-family: 'Manrope';
  }

  .input-component-top-div {
    width: 99%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.3rem;
  }

  .input-component {
    height: 8.1rem;
    width: 100%;
    margin-top: 1.6rem;
  }

  .bigger-div-checkout {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 111rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
  }

  .sub-title {
    margin-top: 3.2rem;
  }

  .checkout {
    width: 100%;
    background-color: white;
    margin-top: 2.4rem;
    padding: 2.4rem;
    border-radius: 0.8rem;
    margin-bottom: 3.5rem;
  }

  .go-back {
    mix-blend-mode: normal;
    opacity: 0.5;
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #000000;
    font-family: 'Manrope';
    &:hover {
      color: #D87D4A;
    }
  }

  @media (min-width: 580px) {
    padding-top: 2.8rem;
    padding-bottom: 11.6rem;

    .summary {
      padding-left: 2.7rem;
      padding-right: 2.7rem;
    }

    .payment-methods-div {
      margin-top: 1.6rem;
      margin-bottom: 0;
    }

    .main-title {
      line-height: 3.6rem;
      letter-spacing: 0.114286rem;
      font-size: 3.2rem;
    }

    .cash-on-delivery-description {
      flex-direction: row;
      column-gap: 3.2rem;
    }

    .cash-on-delivery-description p {
      text-align: left;
    }

    .checkout {
      padding: 3rem 2.7rem;
    }

    .radio-component {
      width: 30.9rem;
    }

    .row-in-tablet-plus {
      flex-direction: row;
      justify-content: space-between;
      column-gap: 1.6rem;
    }
  }

  @media (min-width: 750px) {
    /* .input-component {
      max-width: 30.9rem;
    } */
  }

  @media (min-width: 860px) {
    padding-left: 3.75rem;
    padding-right: 4rem;
    padding-top: 4.2rem;
    padding-bottom: 2.5rem;

    .checkout {
      margin-top: 3.8rem;
      padding: 5.4rem 4.8rem 4.2rem 4.8rem;
    }

    .summary {
      padding: 5.4rem 3.3rem 3.2rem 3.3rem;
      width: 100%;
    }
  }

  @media (min-width: 1100px) {
    .bigger-div-checkout {
      flex-direction: row;
      justify-content: space-between;
      column-gap: 3rem;
    }

    .checkout {
      max-width: 73rem;
    }

    .summary {
      max-width: 35rem;
      margin-top: 6.3rem;
    }
  }

`


export default Checkout