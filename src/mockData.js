import userIcon from "./assets/userAlt.png"

export const enrollmentCalculatedDate = new Date("2019-11-18");

export const stats = {
  annualBenefitCost: 2048110,
  prevAnnualBenefitCost: 2171994,
  totalEnrollment: 451,
  enrollmentCalculatedDate: enrollmentCalculatedDate,
  noOfClosedIssues: 12,
};

export const issues = [
  { name: "Login Questions", value: 26.0, noOfInquiries: 40 },
  { name: "Enrollment", value: 23.0, noOfInquiries: 35 },
  { name: "General Benefits", value: 15.0, noOfInquiries: 23 },
  { name: "ID Cards", value: 11.0, noOfInquiries: 17 },
  { name: "QLE", value: 8.0, noOfInquiries: 11 },
  { name: "Test Issue 1", value: 5.0, noOfInquiries: 22 },
  { name: "Test Issue 2", value: 12.0, noOfInquiries: 4 },
];

export const calenderEvents = [
  { id: 1, date: new Date("2023-01-01"), name: "New Year Open Event", description: "Celebrating new year" },
  { id: 2, date: new Date("2023-01-18"), name: "New Year Event One", description: "Celebrating new year" },
  { id: 3, date: new Date("2023-01-29"), name: "New Year Event Two", description: "Celebrating new year" },
  { id: 4, date: new Date("2023-01-31"), name: "New Year Event Three", description: "Celebrating new year" },
];

export const teamMembers = [
  { id: 1, icon: {userIcon}, name: "Tariq Hilary", email:"tariq@lumity.com" },
  { id: 2, icon: {userIcon}, name: "Amit Ahluwalla", email:"amit@lumity.com" },
  { id: 3, icon: {userIcon}, name: "Cindee Houk", email:"cindee@lumity.com" },
  { id: 4, icon: {userIcon}, name: "Danric Jamie", email:"danric@lumity.com" },
];

export const documents = [
  { id: 1, link :"shorturl.at/jITU1", name: "Metlife Plan Docs" },
  { id: 2, link :"shorturl.at/jITU1", name: "Pricing"  },
  { id: 3, link :"shorturl.at/jITU1", name: "Commuter Benefits (Reversed)" },
  { id: 4, link :"shorturl.at/jITU1", name: "UHC Plan Docs"  },
];