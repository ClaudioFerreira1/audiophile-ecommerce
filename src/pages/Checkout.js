import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });
  let history = useHistory();

  const manageData = (data) => {
    console.log(JSON.stringify(data))
    console.log(handleSubmit)
  }

  return (<Wrapper>
    <div className="bigger-div-checkout">
      <form onSubmit={handleSubmit(manageData)}>
        <div>
          <button type='button' className="go-back" onClick={() => history.goBack()}>Go Back</button>
          <div className="checkout">
            <h4>Checkout</h4>
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
              <input autoComplete="off" className={`${errors.phoneNumber ? "error" : "default"}`} placeholder="+1 202-555-0136" type='number'
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
              <input autoComplete="off" className={`${errors.yourAdress ? "error" : "default"}`} placeholder="1137 William Avenue" type='url'
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







          </div>
        </div>
        <div className="summary">
        </div>
        <input type="submit" />
      </form>
    </div>
  </Wrapper>)
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 2.4rem;
  padding-left: 2.55rem;
  padding-right: 2.95rem;
  padding-bottom: 9.7rem;
  background-color: rgba(250, 250, 250, 1);

  label {
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: -0.0214286rem;
    font-family: "Manrope";
    color: #000000;
  }

  #your-adress {
    max-width: unset;
  }

  .row-in-tablet-plus {
    display: flex;
    flex-direction: column;
  }

  .error {
    outline: none;
    border: 2px solid #CD2C2C;
    &:focus {
      border: 2px solid #CD2C2C;
    }
  }

  .red-color {
    color: #CD2C2C;
  }

  input {
    width: 100%;
    height: 5.6rem;
    border: 1px solid #CFCFCF;
    padding: 1.8rem 2.4rem;
    box-sizing: border-box;
    border-radius: 8px;
    background: #FFFFFF;
  }

  input:focus {
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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.9rem;
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
  }

  .sub-title {
    margin-top: 3.2rem;
  }

  .checkout {
    width: 100%;
    max-width: 73rem;
    background-color: white;
    margin-top: 2.4rem;
    padding: 2.4rem;
    border-radius: 0.8rem;
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

  @media (min-width: 600px) {
    padding-top: 4.7rem;
    padding-bottom: 11.6rem;

    .checkout {
      padding: 3rem 2.7rem;
    }

    .row-in-tablet-plus {
      flex-direction: row;
      justify-content: space-between;
      column-gap: 1.6rem;
    }
  }

  @media (min-width: 750px) {
    .input-component {
      max-width: 30.9rem;
    }
  }

  @media (min-width: 860px) {
    padding-left: 3.75rem;
    padding-right: 4rem;
    padding-top: 7.9rem;
    padding-bottom: 14.1rem;

    .checkout {
      margin-top: 3.8rem;
      padding: 5.4rem 4.8rem 4.8rem 4.8rem;
    }
  }

`


export default Checkout