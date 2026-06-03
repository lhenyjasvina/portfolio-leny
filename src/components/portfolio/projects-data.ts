export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  context: string;
  role: string;
  tags: string[];
  features: string[];
  outcome: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "location-based-attendance",
    title: "Location-Based Attendance Application",
    tagline:
      "Thesis project — web attendance system using the browser Geolocation API.",
    description:
      "A web-based attendance platform developed as my undergraduate thesis for SMAN 5 Pinrang. The system verifies on-site presence through the browser's Geolocation API, replacing manual paper logs with a fast, auditable digital workflow.",
    context: "Undergraduate thesis · SMAN 5 Pinrang (2024)",
    role: "Sole developer — research, design, implementation, and deployment.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Geolocation API"],
    features: [
      "GPS coordinate validation against the school's geofence radius",
      "Role-based access for students, teachers, and administrators",
      "Daily, weekly, and monthly attendance reports exportable to Excel",
      "Mobile-first responsive interface for in-class check-in",
    ],
    outcome:
      "Reduced manual record-keeping time and provided verifiable, location-anchored attendance data for staff.",
    featured: true,
  },
  {
    id: "operational-data-management",
    title: "Operational Data Management System",
    tagline:
      "Streamlined reporting workflows for a community health center (Puskesmas).",
    description:
      "Designed and maintained operational data pipelines at Puskesmas Suppa, consolidating patient, service, and inventory records into structured spreadsheets and routine reports used by clinic leadership.",
    context: "Field assignment · Puskesmas Suppa",
    role: "Data management & administrative support.",
    tags: ["Excel", "Data Cleaning", "Reporting", "Public Service"],
    features: [
      "Standardized intake templates for daily service logs",
      "Pivot-based monthly summaries for clinic management review",
      "Cross-checked records to flag inconsistencies before submission",
      "Documented procedures so staff could reproduce the workflow",
    ],
    outcome:
      "Cut report preparation time significantly and improved accuracy of submissions to regional health authorities.",
    featured: true,
  },
  {
    id: "mass-payment-administration",
    title: "Mass Payment Digital Administration",
    tagline:
      "Digital SPPD and travel-expense processing at a sub-district office.",
    description:
      "Supported the Kelurahan Galung Maloang office in digitizing the Mass Payment workflow for official travel orders (SPPD) and operational disbursements, ensuring documentation matched the financial system end-to-end.",
    context: "Internship · Kantor Kelurahan Galung Maloang",
    role: "Digital financial administration & IT support.",
    tags: [
      "Mass Payment",
      "SPPD",
      "Financial Admin",
      "Microsoft Office",
      "IT Support",
    ],
    features: [
      "Prepared and reconciled SPPD packets against budget allocations",
      "Coordinated with finance staff to resolve discrepancies same-day",
      "Maintained a clean digital archive of approved disbursements",
      "Assisted with day-to-day IT troubleshooting for office staff",
    ],
    outcome:
      "Faster turnaround on travel reimbursements and a reliable digital paper trail for audits.",
    featured: true,
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
