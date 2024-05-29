import assets from "../assets"

const { Gym, Community, Affordable, Wifi, Sports, Coffee, Lounge, Booking } = assets

export const facilities = [
  { iconSrc: Community, label: "Community Events", alt: "Community Events Icon" },
  { iconSrc: Affordable, label: "Affordable", alt: "Affordable Icon" },
  { iconSrc: Gym, label: "Gym Facilities", alt: "Gym Facilities Icon" },
  { iconSrc: Lounge, label: "Comfort Lounges", alt: "Comfort Lounges Icon" },
  { iconSrc: Wifi, label: "High-Speed WiFi", alt: "High-Speed WiFi Icon" },
  { iconSrc: Booking, label: "Quick Booking", alt: "Quick Booking Icon" },
  { iconSrc: Coffee, label: "Cafe & Tea Bar", alt: "Cafe & Tea Bar Icon" },
  { iconSrc: Sports, label: "Sports Area", alt: "Sports Area Icon" }
]

export const spacesUrl = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json'