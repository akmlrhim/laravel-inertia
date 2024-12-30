import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ projects }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <td className="px-3 py-3">ID</td>
                    <td className="px-3 py-3">Image</td>
                    <td className="px-3 py-3">Name</td>
                    <td className="px-3 py-3">Status</td>
                    <td className="px-3 py-3">Created Date</td>
                    <td className="px-3 py-3">Due Date</td>
                    <td className="px-3 py-3">Created By</td>
                    <td className="px-3 py-3 text-right">Actions</td>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project, index) => (
                    <tr
                      key={project.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-3 py-2">{index + 1}</td>
                      <td className="px-3 py-2">
                        <img
                          src={project.image_path}
                          alt="Image"
                          style={{ width: 60 }}
                        />
                      </td>
                      <td className="px-3 py-2">{project.name}</td>
                      <td className="px-3 py-2">{project.status}</td>
                      <td className="px-3 py-2 text-nowrap">
                        {project.created_at}
                      </td>
                      <td className="px-3 py-2 text-nowrap">
                        {project.due_date}
                      </td>
                      <td className="px-3 py-2">{project.createdBy.name}</td>
                      <td className="px-3 py-2">
                        <Link
                          href={route("project.edit", project.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link>
                        <Link
                          href={route("project.destroy", project.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={projects.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
