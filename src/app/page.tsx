import { UserForm } from "./user";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="font-bold mt-4 mb-2 text-2xl">Users</h1>
      <h2 className="font-bold mt-4 mb-2">Add user</h2>
      {/* CSRの協会 */}
      <UserForm></UserForm>
    </div>
  );
}
