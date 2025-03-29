import { FiMail, FiUser, FiPhone } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { PiPasswordLight } from "react-icons/pi";
import { TbMapPinCode } from "react-icons/tb";

export const formSchema = [
  {
    label: "Individual/Enterprise/Government",
    name: "userLevel",
    type: "radio",
    required: true,
    options: [
      { value: "individual", label: "Individual" },
      { value: "enterprise", label: "Enterprise" },
      { value: "government", label: "Government" },
    ],
  },
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    icon: FiUser,
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    icon: FiUser,
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    icon: FiMail,
    required: true,
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    icon: FaHome,
    required: true,
  },
  { name: "country", label: "Country", type: "select", required: true },
  { name: "state", label: "State", type: "select", required: true },
  { name: "city", label: "City", type: "select", required: true },
  {
    name: "pincode",
    label: "Pincode",
    type: "text",
    icon: TbMapPinCode,
    required: true,
  },
  { name: "isdCode", label: "ISD Code", type: "select", required: true },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
    icon: FiPhone,
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    icon: PiPasswordLight,
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    icon: PiPasswordLight,
    required: true,
  },
];
