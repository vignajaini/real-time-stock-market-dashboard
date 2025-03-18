import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <input type="text" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        {!isLogin && <input type="text" placeholder="Confirm Password" />}
        <button className="auth-btn">{isLogin ? "Login" : "Sign Up"}</button>
        <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AuthModal;
