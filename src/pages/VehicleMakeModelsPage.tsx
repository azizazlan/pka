import { createSignal, For } from "solid-js";
import { useNavigate } from "@solidjs/router";

type VehicleModel = {
  model: string;
};

type VehicleMake = {
  make: string;
  models: VehicleModel[];
};

export default function VehicleMakeModelsPage() {
  const navigate = useNavigate();

  const [vehicleMakes] = createSignal<VehicleMake[]>([
    {
      make: "Volvo Trucks",
      models: [
        { model: "FH" },
        { model: "FH16" },
        { model: "FM" },
        { model: "FMX" },
      ],
    },
    {
      make: "Hino",
      models: [
        { model: "300 Series" },
        { model: "500 Series" },
        { model: "700 Series (Prime Mover)" },
      ],
    },
    {
      make: "Scania",
      models: [
        { model: "P-Series" },
        { model: "G-Series" },
        { model: "R-Series" },
        { model: "S-Series" },
      ],
    },
    {
      make: "Isuzu",
      models: [
        { model: "ELF" },
        { model: "FORWARD" },
        { model: "GIGA (Prime Mover)" },
      ],
    },
    {
      make: "Mercedes-Benz Trucks",
      models: [
        { model: "Actros" },
        { model: "Arocs" },
        { model: "Axor" },
      ],
    },
    {
      make: "MAN",
      models: [
        { model: "TGS" },
        { model: "TGX" },
      ],
    },
    {
      make: "UD Trucks",
      models: [
        { model: "Croner" },
        { model: "Quon" },
      ],
    },
    {
      make: "Fuso (Mitsubishi)",
      models: [
        { model: "Canter" },
        { model: "Fighter" },
        { model: "Super Great" },
      ],
    },
  ]);

  return (
    <main class="relative w-full px-1 py-1">
      {/* Close button */}
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        aria-label="Tutup dan kembali ke papan pemuka"
        class="absolute top-6 right-6 rounded-full p-2 text-gray-500
               hover:bg-gray-200 hover:text-gray-800
               focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        ✕
      </button>

      <div class="w-full">
        <h1 class="text-2xl font-semibold text-gray-800">
          Buatan & Model Kenderaan
        </h1>
        <p class="mt-2  text-gray-600">
          Senarai buatan dan model kenderaan (trak & prime mover) yang dibenarkan
          untuk pengesahan.
        </p>

        <div class="mt-8 overflow-x-auto bg-white border border-gray-100 rounded shadow-sm">
          <table class="w-full border-collapse">
            <thead class="bg-gray-100">
              <tr>
                <th class="text-left px-4 py-3 font-medium text-gray-700 border-b w-1/4">
                  Buatan
                </th>
                <th class="text-left px-4 py-3 font-medium text-gray-700 border-b">
                  Model Dibenarkan
                </th>
              </tr>
            </thead>

            <tbody>
              <For each={vehicleMakes()}>
                {(make) => (
                  <tr class="hover:bg-gray-50 align-top">
                    <td class="px-4 py-4 font-medium text-gray-800 border-b border-gray-300">
                      {make.make}
                    </td>
                    <td class="px-4 py-4 border-b border-gray-300">
                      <div class="flex flex-wrap gap-2">
                        <For each={make.models}>
                          {(m) => (
                            <span
                              class="inline-flex items-center rounded-full
                                     bg-blue-50 px-3 py-1 
                                     font-medium text-blue-700"
                            >
                              {m.model}
                            </span>
                          )}
                        </For>
                      </div>
                    </td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
