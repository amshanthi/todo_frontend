export default function AddProject() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 text-blue-800">
      <form className="w-full max-w-2xl space-y-8 p-10 rounded-2xl">
        {/* Project Title */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Project Title:
          </label>
          <input
            type="text"
            className="border border-gray-400 p-3 rounded-lg flex-1 outline-none focus:border-blue-500"
          />
        </div>

        {/* Deadline */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Deadline:
          </label>
          <input
            type="date"
            className="border border-gray-400 p-3 rounded-lg flex-1 outline-none focus:border-blue-500"
          />
        </div>

        {/* Priority */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Priority:
          </label>
          <select className="border border-gray-400 p-3 rounded-lg flex-1 outline-none focus:border-blue-500">
            <option>Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
        </div>

        {/* Project Type */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Project Type:
          </label>
          <select className="border border-gray-400 p-3 rounded-lg flex-1 outline-none focus:border-blue-500">
            <option>Select Type</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Fullstack</option>
          </select>
        </div>

        {/* Stage */}
        <div className="flex items-center justify-between gap-4">
          <label className="text-xl font-semibold w-1/3 text-right">
            Stage:
          </label>
          <select className="border border-gray-400 p-3 rounded-lg flex-1 outline-none focus:border-blue-500">
            <option>Select Stage</option>
            <option>Planning</option>
            <option>Development</option>
            <option>Testing</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
}
