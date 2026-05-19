export const COLLEGE_NAME = "Lords Institute of Engineering and Technology";

export const BRANCHES = [
  "CSE",        // Computer Science and Engineering
  "ECE",        // Electronics and Communication Engineering
  "ME",         // Mechanical Engineering
  "Civil",      // Civil Engineering
  "IT",         // Information Technology
  "EEE",        // Electrical and Electronics Engineering
  "MBA",        // Master of Business Administration
  "MCA",        // Master of Computer Applications
  "AIDS",       // Artificial Intelligence and Data Science
  "AIML",       // AI and Machine Learning
  "CSD",        // Computer Science (Data Science)
  "CSM",        // Computer Science (AI & ML)
] as const;

export type Branch = typeof BRANCHES[number];

export const YEARS = [1, 2, 3, 4] as const;
export type Year = typeof YEARS[number];

export const DESIGNATIONS = [
  "Assistant Professor",
  "Associate Professor",
  "Professor",
  "HOD",
  "Dean",
  "Lab Instructor",
  "Guest Faculty",
] as const;

export const DOCUMENT_CATEGORIES = [
  "Notes",
  "Assignment",
  "Circular",
  "Syllabus",
  "Question Paper",
  "Other",
] as const;

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
  "image/webp",
  "text/plain",
];

/** 
 * Greedy faculty-student matching scorer 
 * Returns a score 0-100 for how well a faculty matches a student
 * Higher = better match, used to suggest best faculty for a student
 */
export function computeMatchScore(
  faculty: { department: string; collegeName: string },
  student: { branch: string; collegeName: string; year: number }
): number {
  let score = 0;

  // Department/branch match is highest priority (greedy: take most impactful factor first)
  if (faculty.department === student.branch) score += 60;
  else if (isRelatedDepartment(faculty.department, student.branch)) score += 30;

  // Same college gets bonus
  if (faculty.collegeName === student.collegeName) score += 25;

  // Junior years (1-2) get slight priority for mentoring
  if (student.year <= 2) score += 15;

  return Math.min(score, 100);
}

function isRelatedDepartment(dept1: string, dept2: string): boolean {
  const csGroup = ["CSE", "IT", "AIDS", "AIML", "CSD", "CSM", "MCA"];
  const eGroup = ["ECE", "EEE"];
  const mGroup = ["ME", "Civil"];

  const inSameGroup = (d1: string, d2: string, group: string[]) =>
    group.includes(d1) && group.includes(d2);

  return (
    inSameGroup(dept1, dept2, csGroup) ||
    inSameGroup(dept1, dept2, eGroup) ||
    inSameGroup(dept1, dept2, mGroup)
  );
}
