import React from 'react';

const SignUpForm = () => {
  return (
    <div className="form-container sign-up-container">
      <form>
        <h1>Sign up</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
