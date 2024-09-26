import React from 'react';

const LoginForm = () => {
  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Log in</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
