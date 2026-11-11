import stalinPicture from "../assets/sprofile.jpg";
import farbodPicture from "../assets/fprofile.jpg";

export interface Member {
  id: string;
  name: string;
  function: string;
  email?: string;
  linkedInUrl?: string;
  pictureUrl?: string;
}

// Replace these placeholders with member details; add an entry for each member.
export const members: Member[] = [
  {
    id: "member-1",
    name: "Stalin Perez Tarira",
    function: "Founder & Technical Lead",
    email: "pereztarirastalin@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/stalin-perez-tarira-9b821a222/",
    pictureUrl: stalinPicture,
  },
  {
    id: "member-2",
    name: "Farbod Yousefi",
    function: "Co-Founder & Business Development Lead",
    email: "lemillion.yf@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/farbod-yousefi-3a3502253/",
    pictureUrl: farbodPicture,
  },
];
