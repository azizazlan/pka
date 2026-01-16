import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

type Certifier = {
  location: string;
  phone: string;
  email: string;
};

export default function CertifierPage() {
  const navigate = useNavigate();

  const [certifier, setCertifier] = createSignal<Certifier>({
    location: "Putrajaya",
    phone: "03-8888 8888",
    email: "pengesah_sld@confirmsah.com.my",
  });

  const [saving, setSaving] = createSignal(false);
  const [message, setMessage] = createSignal<string | null>(null);

  const handleChange =
    (field: keyof Certifier) =>
      (e: Event & { currentTarget: HTMLInputElement }) => {
        setCertifier({
          ...certifier(),
          [field]: e.currentTarget.value,
        });
      };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      await new Promise((r) => setTimeout(r, 800));
      console.log("Updated certifier:", certifier());
      setMessage("Maklumat pengesah berjaya dikemaskini.");
    } catch {
      setMessage("Gagal mengemaskini maklumat. Sila cuba lagi.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main class="relative w-full px-1 py-1">
      {/* Close button */}
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        aria-label="Tutup dan kembali ke papan pemuka"
        class="absolute top-6 right-6 rounded-full p-2 text-blue-600
               hover:bg-gray-200 hover:text-gray-800
               focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        ✕
      </button>

      <div class="w-full">
        <h1 class="text-2xl font-semibold text-gray-800">
          Kemaskini Maklumat Pengesah
        </h1>
        <p class="mt-2 text-sm text-gray-600">
          Kemaskini maklumat pengesah yang diiktiraf (lokasi, nombor telefon dan emel).
        </p>

        <form
          onSubmit={handleSubmit}
          class="mt-8 w-full bg-white rounded border border-gray-300 shadow-sm p-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lokasi */}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Lokasi
              </label>
              <input
                type="text"
                value={certifier().location}
                onInput={handleChange("location")}
                required
                class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* No Telefon */}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                No. Telefon
              </label>
              <input
                type="tel"
                value={certifier().phone}
                onInput={handleChange("phone")}
                required
                class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Emel */}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Emel
              </label>
              <input
                type="email"
                value={certifier().email}
                onInput={handleChange("email")}
                required
                class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-4">
            {message() && (
              <span
                class={`text-sm ${message()?.includes("berjaya")
                  ? "text-green-600"
                  : "text-red-600"
                  }`}
              >
                {message()}
              </span>
            )}

            <button
              type="submit"
              disabled={saving()}
              class="inline-flex items-center rounded-md bg-blue-600 px-6 py-2 text-sm
                     font-medium text-white hover:bg-blue-700
                     disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {saving() ? "Menyimpan..." : "Kemaskini"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
