import axios from "axios";
import { useState } from "react";

export default function Register(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    await axios.post('/register', { username, password });
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <div className="w-64 mx-auto">
        <div className="w-full text-center text-3xl text-slate-700 mb-10">Chat registration</div>
        <form onSubmit={register}>
          <input type="text" value={username} onChange={ev => setUsername(ev.target.value)} placeholder="Username"className="block p-2 mb-2 border w-full rounded-sm"/>

          <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} placeholder="Password" className="block p-2 mb-2 border w-full rounded-sm"/>

          <button className="block bg-blue-500 text-white p-2 border w-full rounded-sm">Register</button>
        </form>
      </div>
    </div>
  );
}