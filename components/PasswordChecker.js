
import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const checkPass = (password) => {
    if (!/[A-Z]/.test(password)) {
      return "Your password must contain at least one upper case letter, bitch";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Your password must contain at least one special character (!@#$%^&*), stoopid";
    }
    if (password.length < 10) {
      return "Your password must contain at least 10 characters, motherfucker!";
    }
    return "Your password is strong!";
  };

  const handleChange = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    setMessage(checkPass(newPass));
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <p>{message}</p>
    </div>
  );
}

export default PasswordChecker;
