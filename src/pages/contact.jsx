import React from 'react'

const login = () => {
  return (
    <div>
      <div>
        <section></section>
          <h2>Login</h2>
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    </div>
  );
}
const contact = () => {
  return (
    <div>
      <div>
        <section>
          <ul></ul>
            <li>Name: John Doe</li>
            <li>Email: john.doe@example.com</li>
            <li>Message: Hello, I would like to know more about your services.</li>
          </ul>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </div> 
    </div>
  );
}

export default contact
