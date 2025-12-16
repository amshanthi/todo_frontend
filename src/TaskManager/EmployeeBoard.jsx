import { useState } from "react";

export default function EmployeeDashboard() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Game UI Update",
      start: "2025-12-01",
      end: "2025-12-20",
      stage: "Development",
      done: false,
    },
    {
      id: 2,
      title: "Puzzle Game Bug Fix",
      start: "2025-12-05",
      end: "2025-12-18",
      stage: "Testing",
      done: true,
    },
    {
      id: 3,
      title: "Kids Game Animation",
      start: "2025-12-10",
      end: "2025-12-28",
      stage: "Planning",
      done: false,
    },
  ]);

  const stageOptions = ["Planning", "Development", "Testing", "Deployment"];

  const updateProject = (id, field, value) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Employee Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-xl">
          <thead className="bg-blue-700 text-white text-lg">
            <tr>
              <th className="p-4">Project Name</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Stage</th>
              <th className="p-4">Done</th>
            </tr>
          </thead>

          <tbody className="text-lg text-gray-700">
            {projects.map((project) => (
              <tr key={project.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{project.title}</td>

                <td className="p-4">
                  <input
                    type="date"
                    value={project.start}
                    onChange={(e) =>
                      updateProject(project.id, "start", e.target.value)
                    }
                    className="border p-2 rounded-lg"
                  />
                </td>

                <td className="p-4">
                  <input
                    type="date"
                    value={project.end}
                    onChange={(e) =>
                      updateProject(project.id, "end", e.target.value)
                    }
                    className="border p-2 rounded-lg"
                  />
                </td>

                {/* Stage Dropdown */}
                <td className="p-4">
                  <select
                    value={project.stage}
                    onChange={(e) =>
                      updateProject(project.id, "stage", e.target.value)
                    }
                    className="border p-2 rounded-lg"
                  >
                    {stageOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </td>

                {/* Done checkbox */}
                <td className="p-4 text-center">
                  <input
                    type="checkbox"
                    className="w-6 h-6"
                    checked={project.done}
                    onChange={(e) =>
                      updateProject(project.id, "done", e.target.checked)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
