
const projects = [
  { id: 1, name: "Project 1", description: "Project 1 description" },
  { id: 2, name: "Project 2", description: "Project 2 description" },
  { id: 3, name: "Project 3", description: "Project 3 description" },
];

export default function handler(req, res) {
  res.status(200).json(projects);
}
