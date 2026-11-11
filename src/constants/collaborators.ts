import artemisLogo from "../assets/logo-artemis.png";
import kuLeuvenKickLogo from "../assets/kuleuvenKick.jpg";

export interface Collaborator {
  name: string;
  role: string;
  description: string;
  website?: string;
  logoUrl?: string;
}

export const collaborators: Collaborator[] = [
  {
    name: "ARTEMIS",
    logoUrl: artemisLogo,
    role: "International Startup Incubation Programme",
    description:
      "An international incubation programme combining entrepreneurship training, mentoring and a European network to help early-stage ventures develop their ideas.",
    website:
      "https://eu-artemis.eu/innovate/international-startup-incubation-programme/",
  },
  {
    name: "KU Leuven KICK",
    logoUrl: kuLeuvenKickLogo,
    role: "Entrepreneurship Programme",
    description:
      "KU Leuven's entrepreneurship initiative, helping aspiring entrepreneurs explore ideas and develop their entrepreneurial skills.",
    website: "https://lrd.kuleuven.be/kuleuvenkick/english",
  },
];
