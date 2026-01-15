import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { auth } from "../auth";
import { Factory, Wrench } from 'lucide-solid';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");

  const submit = () => {
    if (auth.login(username(), password())) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white rounded-md shadow-lg p-10 w-full max-w-sm space-y-4 transform -translate-y-3/3">
        <div class="flex items-center gap-2 justify-center">
          <Factory size={32} class="inline-block" />
          <Wrench size={32} class="inline-block" />
          <span class="text-2xl font-bold">
            MySLD / {import.meta.env.VITE_SLD_MODULE}
          </span>
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username()}
          onInput={(e) => setUsername(e.currentTarget.value)}
          class="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password()}
          onInput={(e) => setPassword(e.currentTarget.value)}
          class="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={submit}
          class="w-full bg-blue-900 hover:bg-blue-800 text-white py-2 transition"
        >
          Login
        </button>

        {error() && (
          <p class="text-red-500 text-sm text-center">{error()}</p>
        )}
      </div>
    </div>

  );
};

export default Login;
