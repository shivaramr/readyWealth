import React from "react";
import { style } from "./style";

function Form() {
  return (
    <div class={style.main}>
      <h2>How can we help you?</h2>
      <p>
        Please let us know how we can assist with your financial planning and
        wealth management by filling in the form below. Please allow us 24 hours
        to respond to your enquiry.
      </p>
      <form>
        Name:
        <div class={style.formRow}>
          <div class={style.col}>
            <input
              type="text"
              class={style.formControl}
              placeholder="First name"
            />
          </div>
          <div class={style.col}>
            <input
              type="text"
              class={style.formControl}
              placeholder="Last name"
            />
          </div>
        </div>
        <div class={style.formRow}>
          <div class={style.col}>
            Phone:
            <input
              type="integer"
              class={style.formControl}
              placeholder="Phone"
            />
          </div>
          <div class={style.col}>
            Email:
            <input type="email" class={style.formControl} placeholder="Email" />
          </div>
        </div>
        <label>Drop us a query</label>
        <textarea class={style.formControl} rows="3" />
        <button type="submit" class={style.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
