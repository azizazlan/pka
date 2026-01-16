import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";

const Dashboard: Component = () => {
  const navigate = useNavigate();

  return (
    <div class="p-1 min-h-full bg-white">
      <h1 class="text-xl font-semibold text-gray-800 mb-4">
        {import.meta.env.VITE_SLD_MODULE_DESC}
      </h1>
      <div class="max-w-5xl">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Pengesah */}
          <div class="border border-gray-400 rounded p-6 hover:shadow-sm transition">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              Pengesah Yang Diiktiraf
            </h3>

            <p class="text-sm text-gray-600 mb-6">
              Lokasi, nombor telefon dan emel pengesah.
            </p>

            <button
              onClick={() => navigate("/certifier")}
              class="bg-blue-600 hover:bg-blue-600 text-white px-5 py-2 rounded text-sm"
            >
              Kemaskini Maklumat
            </button>
          </div>

          {/* Buatan & Model */}
          <div class="border border-gray-400 rounded p-6 hover:shadow-sm transition">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              Buatan & Model Kenderaan
            </h3>

            <p class="text-sm text-gray-600 mb-6">
              Senarai buatan dan model yang dibenarkan untuk pengesahan.
            </p>

            <button
              onClick={() => navigate("/vehicle_make_models")}
              class="bg-blue-600 hover:bg-blue-600 text-white px-5 py-2 rounded text-sm"
            >
              Kemaskini Senarai
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;