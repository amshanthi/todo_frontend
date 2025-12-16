export default function AddNewEmployee() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white text-blue-800">
      <form className="w-full max-w-xl space-y-8">
        {/* Employee Name */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Name:
          </label>

          <input
            type="text"
            className="border border-gray-400 p-3 rounded-lg flex-1"
          />
        </div>

        {/* Password */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Password:
          </label>

          <input
            type="password"
            className="border border-gray-400 p-3 rounded-lg flex-1"
          />
        </div>

        {/* Select */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Designation:
          </label>

          <select className="border border-gray-400 p-3 rounded-xl flex-1">
            <option>Select Option</option>
            <option>Designer</option>
            <option>Developer</option>
            <option>Tester</option>
          </select>
        </div>

        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Skills:
          </label>
          <input
            placeholder="ex: reactjs,js,nodejs"
            type="text"
            className="border border-gray-400 p-3 rounded-lg flex-1 outline-none focus:border-blue-500"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
}
