export const signUPFormcontrols = [
  {
    id: "name",
    label: "Name",
    placeholder: "Enter Your Name",
    componentType: "Input",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter Your Email",
    componentType: "Input",
    type: "email",
  },
  {
    id: "Password",
    label: "Password",
    placeholder: "Enter Your Password",
    componentType: "Input",
    type: "Password",
  },
];

export const signINFormcontrols = [
  {
    id: "email",
    label: "Email",
    placeholder: "Enter Your Email",
    componentType: "Input",
    type: "email",
  },
  {
    id: "Password",
    label: "Password",
    placeholder: "Enter Your Password",
    componentType: "Input",
    type: "Password",
  },
];

export const ScrumBordOption = [
  {
    id: "todo",
    label: "To Do",
  },
  {
    id: "inprogress",
    label: "In Progress",
  },
  {
    id: "blocked",
    label: "Blocked",
  },
  {
    id: "review",
    label: "Review",
  },
  {
    id: "done",
    label: "Done",
  },
];

export const addNewTaskControl = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Title",
    componentType: "Input",
    type: "text",
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Description",
    componentType: "Input",
    type: "text",
  },
  {
    id: "status",
    label: "Status",
    placeholder: "Enter Status",
    componentType: "select",
    options: ScrumBordOption,
  },
  {
    id: "priority",
    label: "Priority",
    placeholder: "Enter priority",
    componentType: "Input",
    componentType: "select",
    options: [
      { id: "low", label: "Low" },
      { id: "medium", label: "Medium" },
      { id: "high", label: "High" },
    ],
  },
];
