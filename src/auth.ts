import { createSignal } from "solid-js";

const [user, setUser] = createSignal<string | null>(null);

export const auth = {
  login: (username: string, password: string) => {
    if (username === "admin" && password === "qwe") {
      setUser(username);
      return true;
    }
    return false;
  },
  logout: () => setUser(null),
  isAuthenticated: () => user() !== null,
  getUser: () => user(),
};
