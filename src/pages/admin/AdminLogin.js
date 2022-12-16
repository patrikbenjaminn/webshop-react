import React from 'react';

const AdminLogin = () => {
  return (
    <div className="form-container">
      <form action="" method="post">
        <h3>login now</h3>
        {error && error.map((err) => (
          <span className="error-msg" key={err}>{err}</span>
        ))}
        <input type="email" name="email" required placeholder="enter your email" />
        <input type="password" name="password" required placeholder="enter your password" />
        <input type="submit" name="submit" value="login now" className="form-btn" />
        <p>don't have an account? <a href="createaccount.php">register now</a></p>
      </form>
    </div>
  );
};

export default AdminLogin;
