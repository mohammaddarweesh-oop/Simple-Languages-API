const users = [
  {
    userId: "rtre",
    jobTitleName: "Programmer",
    firstName: "Mohammad",
    lastName: "Darweesh",
    preferedFullName: "Mohammad Darweesh",
    employeeCode: "E2",
    region: "CA",
    phoneNumber: "111-2227770",
    emailAddress: "mohammad@gmail.com",
  },

  {
    userId: "thanks",
    jobTitleName: "Cyper Security",
    firstName: "Adam",
    lastName: "Ali",
    preferedFullName: "Adam Ali",
    employeeCode: "E4",
    region: "Ac",
    phoneNumber: "111-2228470",
    emailAddress: "Adam@gmail.com",
  },
  {
    userId: "cceerr",
    jobTitleName: "Software Engineer",
    firstName: "Sami",
    lastName: "Awad",
    preferedFullName: "Sami Awad",
    employeeCode: "B3",
    region: "DC",
    phoneNumber: "785-2227770",
    emailAddress: "SamiAli@gmail.com",
  },
];

const languages = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "C#",
  },
  {
    id: 3,
    name: "Python",
  },
  {
    id: 4,
    name: "Go",
  },
];
const persons = [
  {
    id: 1,
    name: "Mohammad",
    age: 26,
    salary: 500,
    Address: [{ address1: "Amman" }, { address2: "sahab" }],
  },
  {
    id: 2,
    name: "Mosa",
    age: 22,
    salary: 350,
    Address: [{ address1: "Al-Zarqa" }],
  },
  {
    id: 3,
    name: "Adham",
    age: 18,
    salary: 0,
    Address: [{ address1: "Amman" }, { address2: "al salt" }],
  },
];


module.exports = { users, languages, persons };
