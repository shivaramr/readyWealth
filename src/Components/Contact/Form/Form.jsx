import React from "react";
import { style } from "./style";

function Form() {
  return (
    <div className={style.main}>
      <h2>How can we help you?</h2>
      <p>
        Please let us know how we can assist with your financial planning and
        wealth management by filling in the form below. Please allow us 24 hours
        to respond to your enquiry.
      </p>
      <form>
        Name:
        <div className={style.formRow}>
          <div className={style.col}>
            <input
              type="text"
              className={style.formControl}
              placeholder="First name"
            />
          </div>
          <div className={style.col}>
            <input
              type="text"
              className={style.formControl}
              placeholder="Last name"
            />
          </div>
        </div>
        <div className={style.formRow}>
          <div className={style.col}>
            Phone:
            <input
              type="integer"
              className={style.formControl}
              placeholder="Phone"
            />
          </div>
          <div className={style.col}>
            Email:
            <input type="email" className={style.formControl} placeholder="Email" />
          </div>
        </div>
        <label>Drop us a query</label>
        <textarea className={style.formControl} rows="3" />
        <button type="submit" className={style.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
