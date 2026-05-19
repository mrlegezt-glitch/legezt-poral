import StudentShell from "@/app/student/StudentShell";
export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return <StudentShell>{children}</StudentShell>;
}
