import { Auth } from "@firebase/auth";
import { ReactNode } from "react";

interface AuthPageProps {
  title: ReactNode;
  children: ReactNode;
  alternativeUrl?: string;
  alternativeText?: ReactNode;
}
export default function AuthPage({
  title,
  children,
  alternativeUrl,
  alternativeText,
}: AuthPageProps): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
        {alternativeUrl && (
          <p className="mt-2 text-center text-sm text-gray-600">
            <a
              href={alternativeUrl}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {alternativeText}
            </a>
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
}
