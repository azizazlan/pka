import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { auth } from "../auth";
import { ShieldCheck, Toolbox } from 'lucide-solid';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = createSignal("admin");
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
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white rounded-md shadow-sm p-10 w-full max-w-sm space-y-4 transform -translate-y-3/3">
        <div class="flex items-center gap-2 justify-center">

          <ShieldCheck size={32} class="inline-block" />
          <Toolbox size={32} class="inline-block" />

          <span class="text-2xl font-bold">
            MySLD / {import.meta.env.VITE_SLD_MODULE}
          </span>
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username()}
          onInput={(e) => setUsername(e.currentTarget.value)}
          class="w-full border border-gray-400 rounded px-3 py-2 text-sm
         focus:outline-none focus:ring-2 focus:ring-blue-500"
        />


        <input
          type="password"
          placeholder="Password"
          value={password()}
          onInput={(e) => setPassword(e.currentTarget.value)}
          class="w-full border border-gray-400 rounded px-3 py-2 text-sm
         focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={submit}
          class="w-full rounded bg-blue-900 hover:bg-blue-800 text-white py-2 transition"
        >
          <span style={{ 'margin-right': '15px' }}>
            Login
          </span>
          <span>
            بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ
          </span>

        </button>

        {error() && (
          <p class="text-red-500 text-sm text-center">{error()}</p>
        )}
      </div>
    </div>

  );
};

export default Login;
