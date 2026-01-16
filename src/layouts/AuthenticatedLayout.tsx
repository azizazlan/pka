import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { auth } from "../auth";

interface AuthenticatedLayoutProps {
  children: any;
}

const AuthenticatedLayout: Component<AuthenticatedLayoutProps> = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div class="min-h-screen flex flex-col">
      <header class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 class="text-xl font-bold text-gray-800">MySLD</h1>
          <div class="flex items-center space-x-4">
            <span class="text-gray-700 font-medium">السلام عليكم, {auth.getUser()}!</span>
            <button
              onClick={handleLogout}
              class="bg-red-700 hover:bg-red-600 text-white py-1 px-4 rounded transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main class="flex-1 p-6">{props.children}</main>
    </div>
  );
};

export default AuthenticatedLayout;
