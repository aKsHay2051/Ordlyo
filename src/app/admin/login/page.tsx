import { LoginForm } from "@/components/admin/login-form";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
