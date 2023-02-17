import {
  BsTwitter,
  BsFillTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const dropdownList = [
  {
    id: 1,
    color: "yellow.100",
    title: "All Products",
    text: "View all Our Products",
  },
  {
    id: 2,
    color: "red.50",
    title: "Patricia Cards",
    text: "Physical and Virtual Cards for instants Cash out!",
  },
  {
    id: 3,
    color: "yellow.100",
    title: "Bitcoin",
    text: "Send, Receive, Trade and Store Bitcoin",
  },
  {
    id: 4,
    color: "blue.50",
    title: "Hanks",
    text: "Efficient item finder with just the push of a button",
  },
  {
    id: 5,
    color: "red.50",
    title: "Digital Assets",
    text: "Perfects money, paypal funds & more",
  },
  {
    id: 6,
    color: "blue.50",
    title: "Patricia Business",
    text: "Accepts crypto payments for anywhere in the world",
  },
];

const mainNavLinks = [
  { id: 1, path: null, label: "Products", dropdown: true, list: dropdownList },
  {
    id: 2,
    path: null,
    label: "Company",
    noImage: true,
    dropdown: true,
    list: [
      {
        id: 1,
        label: "About us",
        path: "/about",
      },
      {
        id: 2,
        label: "Careers",
        path: "/careers",
      },
      {
        id: 3,
        label: "Mobile",
        path: "/mobile",
      },
    ],
  },
  { id: 3, path: "/rates", label: "Rates", dropdown: false },
  {
    id: 4,
    path: null,
    label: "Learn",
    dropdown: true,
    noImage: true,
    list: [
      {
        id: 1,
        label: "Patricia Learn",
        path: "/patricia-learn",
      },
      {
        id: 2,
        label: "Help Center",
        path: "/help-center",
      },
      {
        id: 3,
        label: "Blog",
        path: "/blog",
      },
    ],
  },
];

const companyContact = {
  phone: { path: "09065783958", icon: BsFillTelephoneFill },
  email: { path: "hello@mypatricia.co", icon: FaEnvelope },
  emailAlt: { path: "frauddesk@mypatricia.co", icon: FaEnvelope },
  twitter: { path: "", icon: BsTwitter },
  facebook: { path: "", icon: BsFacebook },
  instagram: { path: "", icon: BsInstagram },
  youtube: { path: "", icon: BsYoutube },
};

const servicesLinks = [
  { id: 1, path: "/bitcoin", label: "Bitcoin" },
  { id: 1, path: "/refil", label: "Refill" },
  { id: 1, path: "/degital-assets", label: "Digital Assets" },
  { id: 1, path: "/patricia-card", label: "Patricia Card" },
  { id: 1, path: "/hank", label: "Hank" },
  { id: 1, path: "/patricia-business", label: "Patricia Business" },
];

const learnLinks = [
  { id: 1, path: "/blog", label: "Blog" },
  { id: 2, path: "/learning-portal", label: "Learning Portal" },
  { id: 3, path: "/help-center", label: "Help Center" },
];

const legalLinks = [
  { id: 1, path: "/blog", label: "Privacy Policy" },
  {
    id: 2,
    path: "/anti-money-laundering",
    label: "Anti-Money Laundering Policy",
  },
  { id: 3, path: "/terms-services", label: "Terms of Service" },
];
const communities = [{ id: 1, path: "/covid-19", label: "Covid-19" }];

const companyInfoLinks = [
  { id: 1, path: "/about", label: "About us" },
  { id: 2, path: "/careers", label: "Careers" },
  { id: 3, path: "/reates", label: "Rates" },
  { id: 4, path: "/mobile", label: "Mobile" },
];

const faq = [
  {
    id: 1,
    question: "How much does Theraswift Rx cost",
    answer: "Theraswift Rx is free. You only pay for your meds or use your HMO",
  },
  {
    id: 2,
    question: "Do you take my HMO",
    answer:
      "Yes. We will also coordinate directly with your HMO so you don't have to",
  },
  {
    id: 3,
    question: "Does Theraswift Rx deliver to me",
    answer: "Find out here",
    link: "",
  },
  {
    id: 4,
    question: "Can all doctors use Theraswift Rx",
    answer: "Yes. Any doctor can send prescriptions to Theraswift Rx",
  },
];

export const getFaq = () => faq;
export const getFeatures = () => features;
export const getHowItWorks = () => howItWorks;
export const getMainNavLinks = () => mainNavLinks;
export const getServicesLinks = () => servicesLinks;
export const getLearnLinks = () => learnLinks;
export const getLegalLinks = () => legalLinks;
export const getCommunitiesLinks = () => communities;
export const getCompanyContact = () => companyContact;
export const getCompanyInfoLinks = () => companyInfoLinks;
export const getTeam = () => team;
