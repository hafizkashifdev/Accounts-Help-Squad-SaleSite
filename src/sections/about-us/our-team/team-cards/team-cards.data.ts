export interface TeamMemberI {
  image: any;
  title: string;
  text: string;
}

import teamone from "@root/assets/home/images/team/team-one.svg";
import teamtwo from "@root/assets/home/images/team/team-two.svg";
import teamthree from "@root/assets/home/images/team/team-three.svg";
import teamfour from "@root/assets/home/images/team/team-four.svg";
import teamfive from "@root/assets/home/images/team/team-five.svg";
import teamsix from "@root/assets/home/images/team/team-six.svg";

export const teamData: TeamMemberI[] = [
  {
    image: teamone,
    title: "Steven Harden",
    text: "Product Designer",
  },
  {
    image: teamtwo,
    title: "Mark Barren",
    text: "Marketing Lead",
  },
  {
    image: teamthree,
    title: "James Anderson",
    text: "Product Reseacher",
  },
  {
    image: teamfour,
    title: "Allen Sky",
    text: "Product Owner",
  },
  {
    image: teamfive,
    title: "jimmy Falcon",
    text: "Project Manager",
  },
  {
    image: teamsix,
    title: "Kane Williamson",
    text: "Project Coordinator",
  },
];
