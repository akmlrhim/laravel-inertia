import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          All Task
        </h2>
      }
    >
      <Head title="All Task" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-7">
          <div className="overflow-hidden"></div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
