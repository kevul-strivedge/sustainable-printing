// components/ui/ContactInfoStrip.tsx

import { Mail, Phone, Clock, MapPin } from "lucide-react";
import {
  ContactInfoItemType,
  ContactInfoStripProps,
} from "@/src/types/contactInfo.types";
import ContactInfoCard from "../ui/ContactInfoCard";

const contactInfoData: ContactInfoItemType[] = [
  {
    icon: Mail,
    label: "Email",
    value: "sales@sustainableprintingco.com.au",
    href: "mailto:sales@sustainableprintingco.com.au",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(03) 9482 2222",
    href: "tel:0394822222",
  },
  {
    icon: Clock,
    label: "Open Hours",
    value: "Mon – Fri : 7.00AM – 5.00PM",
  },
  {
    icon: MapPin,
    label: "Address",
    value: ["71-77 Queens Parade,", "North Fitzroy VIC 3068"],
  },
];

const ContactInfoStrip = ({
  items = contactInfoData,
  className = "",
}: ContactInfoStripProps) => {
  return (
    <section className={`w-full bg-[#fefaf3] px-4 lg:py-20 py-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <ContactInfoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoStrip;
