import { FaSearchLocation } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const icons = {
  Location: FaSearchLocation,
  Phone: FaPhoneAlt,
  Email: FaMailBulk,
};

function iconFn(Component) {
  return <Component size={50} style={{ marginLeft: 15, fill: "#0D6EFD" }} />;
}

export const data = [
  {
    id: 1,
    title: "Office Location",
    logo: iconFn(icons.Location),
    details: "Futura, Magarpatta Road, Kirtane Baugh, Pune, PIN: 411028",
  },
  {
    id: 2,
    title: "Phone",
    logo: iconFn(icons.Phone),
    details: "+91-9011610894",
  },
  {
    id: 3,
    title: "Email",
    logo: iconFn(icons.Email),
    details: "talk@readywealth.in",
  },
];
