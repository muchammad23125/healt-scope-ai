
export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-center">
          Admin Login
        </h1>

        <div className="mt-8 space-y-4">
          <input
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full border rounded-xl px-4 py-3"
          />

          <button className="w-full bg-primary text-white py-3 rounded-xl">
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
