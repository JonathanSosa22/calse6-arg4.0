import { useState } from "react";
import "./userRegister.css";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordRepeat) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // eslint-disable-next-line no-unused-vars
    const newUser = {
      name,
      lastName,
      email,
      phone,
      password,
    };

    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setPasswordRepeat("");

    alert("Registro Exitoso");
  };

  return (
    <>
      <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="input-wrapper">
          <label htmlFor="user-name">Nombre:</label>
          <input
            type="text"
            id="user-name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-lastName">Apellido:</label>
          <input
            type="text"
            id="user-lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-email">Email:</label>
          <input
            type="email"
            id="user-email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-phone">Telefono:</label>
          <input
            type="number"
            id="user-phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-password">Contraseña:</label>
          <input
            type="password"
            id="user-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="user-passwordRepeat">Repetir Contraseña:</label>
          <input
            type="password"
            id="user-passwordRepeat"
            onChange={(e) => setPasswordRepeat(e.target.value)}
            value={passwordRepeat}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default UserRegister;
