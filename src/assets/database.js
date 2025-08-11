// -----------project------------
import Honeypot from "../assets/img/Projects/Honeypot.jpg"
import CTI from "../assets/img/Projects/CTI.jpg"
import EDR from "../assets/img/Projects/EDR.jpg"
// -------------certificates-------------
import googleCyberSecurity from "../assets/img/Certificates/googleCyberSecurity.jpeg";
import soc from "../assets/img/Certificates/soc.jpeg";;
import penetrationTesting from "../assets/img/Certificates/penetrationTesting.jpeg";


const badgesList=[
  ["10f8c1ab-0c9d-41a1-9c65-95e478af6acd"],
  "8df374b3-7872-4e46-b029-3b416d6d2b38",
  "0d1f3409-56a8-496d-a7c8-33bd11662ea3",
];
const certificationsList=[
  [googleCyberSecurity,"Google Cybersecurity Professional Certificate"],
  [soc,"SOC Level 1"],
  [penetrationTesting,"penetration Testing"]
]
const projectsList=[
  {
    projectTitle : "Cyber Threat Intelligence Dashboard",
    projectDescription : "Engineered a real-time threat intelligence dashboard through integrating two APIs (VirusTotal, abuseIPDB), processing over 100 daily threat data points for enhanced cybersecurity monitoring.Optimized data visualization through developing line graph displays with Python and Matplotlib, reducing rendering time by 50% for improved user accessibility.Implemented data export functionality through coding CSV output capabilities, enabling analysis of 100+ threat records with malicious/benign tagging for actionable insights.",
    projectScreenshot : CTI,
    projectUrl : "https://github.com/Nucl3arAt0m/CTI-Dashboard"
  },
  {
    projectTitle : "Honeypot-SentinelOne",
    projectDescription : "Deployed a honeypot VM on Azure to simulate real-world RDP attack scenarios and capture failed login attempts.Parsed and enriched attack logs using PowerShell to extract IPs and threat data for automated threat intelligence.Integrated logs with Microsoft Sentinel to generate real-time alerts and support SIEM-driven detection workflows.",
    projectScreenshot : Honeypot,
    projectUrl : "https://github.com/Nucl3arAt0m/HoneyPot-SentinelOne"
  },{
    projectTitle: "Windows EDR Attack & Defense Simulation using LimaCharlie ",
    projectDescription : `Tools & Technologies: Limacharlie, Sysmon, VMware, Linux Skills: Endpoint Detection & Response (EDR), SIEM, Threat Hunting, Adversary Simulation, Log Analysis    Simulated cyber attacks using Sliver C2 framework to validate EDR functionality on a Windows 11 endpoint.
    Deploy LimaCharlie EDR to detect and react to sophisticated attacks such as credential dumping and memory analysis.
    Carried out credential access attacks such as LSASS memory dumps and NTLM hashes to test mitigation and detection capabilities.`,
    projectScreenshot: EDR,
    projectUrl: "https://github.com/Nucl3arAt0m/EDR-Attack_and_Defense"
  }
];

const skillsList=[];

const experienceList=[];
const social={
  instagram:"https://instagram.com/sahil__borse",
  linkedIn:"https://linkedin.com/in/sahillborse",
  gitHub:"https://github.com/Nucl3arAt0m",
  mail:"sahilllborse@gmail.com",
  resume:"https://drive.google.com/file/d/1JAPK5xT7D3CjS6k5Y8h7GIckZgbdR7qZ/view"
};

export {
    badgesList,
    certificationsList,
    projectsList,
    social
  };