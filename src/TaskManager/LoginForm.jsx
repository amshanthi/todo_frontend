export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-blue-800">
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 underline">Login</h1>

        <form>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">User Name:</label>
            <input
              type="text"
              className="w-full p-2 border border-blue-400 rounded-md outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-1">Password:</label>
            <input
              type="password"
              className="w-full p-2 border border-blue-400 rounded-md outline-none"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
