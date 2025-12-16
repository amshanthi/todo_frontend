import { useState } from "react";

export default function AdminProjectTable() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Game App UI",
      priority: "High",
      role: "Designer",
      deadline: "2025-12-20",
      stage: "Development",
      assigned: "Nisha",
    },
    {
      id: 2,
      name: "Puzzle Game Update",
      priority: "Medium",
      role: "Developer",
      deadline: "2026-01-05",
      stage: "Planning",
      assigned: "Shanthi",
    },
    {
      id: 3,
      name: "Testing Game Logic",
      priority: "Low",
      role: "Tester",
      deadline: "2025-12-30",
      stage: "Testing",
      assigned: "Priya",
    },
  ]);

  const [editId, setEditId] = useState(null);

  const priorityOptions = ["High", "Medium", "Low"];
  const roleOptions = ["Designer", "Developer", "Tester"];
  const stageOptions = ["Planning", "Development", "Testing", "Deployment"];
  const employeeOptions = ["Nisha", "Shanthi", "Priya", "Karthik"];

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleSave = (id) => {
    setEditId(null);
  };

  const handleUpdate = (id, field, value) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, [field]: value } : p
    );
    setProjects(updated);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        DashBoard
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-xl">
          <thead className="bg-blue-600 text-white text-lg">
            <tr>
              <th className="p-4">Project Name</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Role</th>
              <th className="p-4">Deadline</th>
              <th className="p-4">Stage</th>
              <th className="p-4">Assigned To</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-lg">
            {projects.map((project) => (
              <tr key={project.id} className="border-b hover:bg-gray-50">
                {/* Project Name (text only) */}
                <td className="p-4">{project.name}</td>

                {/* Priority Dropdown */}
                <td className="p-4">
                  {editId === project.id ? (
                    <select
                      className="border p-2 rounded-lg"
                      value={project.priority}
                      onChange={(e) =>
                        handleUpdate(project.id, "priority", e.target.value)
                      }
                    >
                      {priorityOptions.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  ) : (
                    project.priority
                  )}
                </td>

                {/* Role Dropdown */}
                <td className="p-4">
                  {editId === project.id ? (
                    <select
                      className="border p-2 rounded-lg"
                      value={project.role}
                      onChange={(e) =>
                        handleUpdate(project.id, "role", e.target.value)
                      }
                    >
                      {roleOptions.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  ) : (
                    project.role
                  )}
                </td>

                {/* Deadline Date Picker */}
                <td className="p-4">
                  {editId === project.id ? (
                    <input
                      type="date"
                      className="border p-2 rounded-lg"
                      value={project.deadline}
                      onChange={(e) =>
                        handleUpdate(project.id, "deadline", e.target.value)
                      }
                    />
                  ) : (
                    project.deadline
                  )}
                </td>

                {/* Stage Dropdown */}
                <td className="p-4">
                  {editId === project.id ? (
                    <select
                      className="border p-2 rounded-lg"
                      value={project.stage}
                      onChange={(e) =>
                        handleUpdate(project.id, "stage", e.target.value)
                      }
                    >
                      {stageOptions.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  ) : (
                    project.stage
                  )}
                </td>

                {/* Assigned Dropdown */}
                <td className="p-4">
                  {editId === project.id ? (
                    <select
                      className="border p-2 rounded-lg"
                      value={project.assigned}
                      onChange={(e) =>
                        handleUpdate(project.id, "assigned", e.target.value)
                      }
                    >
                      {employeeOptions.map((e) => (
                        <option key={e}>{e}</option>
                      ))}
                    </select>
                  ) : (
                    project.assigned
                  )}
                </td>

                {/* Action Buttons */}
                <td className="p-4 text-center">
                  {editId === project.id ? (
                    <button
                      onClick={() => handleSave(project.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(project.id)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
