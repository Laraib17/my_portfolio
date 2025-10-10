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
  )
}

export default login
