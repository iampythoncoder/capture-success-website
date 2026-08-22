export type BoardPerson = {
  name: string;
  role: string;
};

export const coFounders: readonly BoardPerson[] = [
  { name: "Saatvik Santosh", role: "Technology Director" },
  { name: "Dhruva Valluru", role: "Operations Director" },
  { name: "Amogh Gotaparthy", role: "Outreach Director" },
  { name: "Dhruv Mishra", role: "Partnerships Director" },
  { name: "Ketav Karthikeyan", role: "Summer Camp Director" }
] as const;

export const boardMembers: readonly BoardPerson[] = [
  { name: "Rohit Gunturi", role: "Social Media Manager" },
  { name: "Neeraj Sivasankar", role: "Board Member" },
  { name: "Aryan Mahalingam", role: "Strategic Initiatives Director" }
] as const;
