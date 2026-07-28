export type BoardPerson = {
  name: string;
  role: "Co-founder" | "Board member";
};

export const coFounders: readonly BoardPerson[] = [
  { name: "Saatvik Santosh", role: "Co-founder" },
  { name: "Dhruva Valluru", role: "Co-founder" },
  { name: "Amogh Gotaparthy", role: "Co-founder" },
  { name: "Dhruv Mishra", role: "Co-founder" },
  { name: "Ketav Karthikeyan", role: "Co-founder" }
] as const;

export const boardMembers: readonly BoardPerson[] = [
  { name: "Rohit Guntiri", role: "Board member" },
  { name: "Sonith Das", role: "Board member" }
] as const;
