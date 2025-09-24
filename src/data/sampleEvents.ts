import { Event } from "@/types/events";

export const sampleEvents: Event[] = [
  // Today's events
  {
    id: 1,
    title: "Daily Mass",
    date: new Date().toISOString().split('T')[0],
    time: "8:00 AM",
    location: "St. Patrick's Cathedral",
    organizer: "Cathedral Staff",
    category: "Mass",
    description: "Traditional Latin Mass with beautiful choral music"
  },
  {
    id: 2,
    title: "Eucharistic Adoration",
    date: new Date().toISOString().split('T')[0],
    time: "12:00 PM - 6:00 PM",
    location: "Church of St. Francis of Assisi",
    organizer: "Fr. Michael",
    category: "Holy Hour",
    description: "Silent prayer and adoration before the Blessed Sacrament"
  },
  {
    id: 3,
    title: "Young Adults Prayer Group",
    date: new Date().toISOString().split('T')[0],
    time: "7:00 PM",
    location: "St. Agnes Church",
    organizer: "Sarah Martinez",
    category: "Prayer Group",
    description: "Weekly prayer and fellowship for ages 22-35"
  },
  {
    id: 4,
    title: "Food Drive for the Homeless",
    date: new Date().toISOString().split('T')[0],
    time: "10:00 AM - 2:00 PM",
    location: "Holy Cross Church",
    organizer: "Catholic Charities NYC",
    category: "Social Event",
    description: "Help collect and distribute food to those in need"
  },
  // Tomorrow's events
  {
    id: 5,
    title: "Sunday Mass",
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: "9:00 AM",
    location: "St. Patrick's Cathedral",
    organizer: "Cathedral Staff",
    category: "Mass",
    description: "Sunday morning Mass with full choir"
  },
  {
    id: 6,
    title: "Confession Hours",
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: "4:00 PM - 6:00 PM",
    location: "Our Lady of Guadalupe",
    organizer: "Fr. Rodriguez",
    category: "Confession",
    description: "Bilingual confession available"
  },
  {
    id: 7,
    title: "Rosary Prayer Circle",
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: "6:30 PM",
    location: "St. Mary's Church",
    organizer: "Maria Santos",
    category: "Prayer Group",
    description: "Join us for the Holy Rosary and Marian devotions"
  },
  // More events throughout the week
  {
    id: 8,
    title: "Evening Mass",
    date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
    time: "6:00 PM",
    location: "St. Joseph's Church",
    organizer: "Fr. O'Brien",
    category: "Mass",
    description: "Weekday evening Mass for working professionals"
  },
  {
    id: 9,
    title: "Perpetual Adoration",
    date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
    time: "All Day",
    location: "Holy Name of Jesus",
    organizer: "Adoration Ministry",
    category: "Holy Hour",
    description: "24-hour adoration chapel open to all"
  },
  {
    id: 10,
    title: "Catholic Young Professionals Meetup",
    date: new Date(Date.now() + 259200000).toISOString().split('T')[0],
    time: "7:00 PM",
    location: "St. Vincent Ferrer Church",
    organizer: "NYC Catholic Professionals",
    category: "Social Event",
    description: "Networking and fellowship for Catholic professionals"
  },
  {
    id: 11,
    title: "Morning Confession",
    date: new Date(Date.now() + 345600000).toISOString().split('T')[0],
    time: "7:30 AM - 8:30 AM",
    location: "St. Thomas More Church",
    organizer: "Fr. Smith",
    category: "Confession",
    description: "Morning confession before daily Mass"
  },
  {
    id: 12,
    title: "Bible Study Group",
    date: new Date(Date.now() + 432000000).toISOString().split('T')[0],
    time: "7:30 PM",
    location: "Sacred Heart Church",
    organizer: "Deacon Williams",
    category: "Prayer Group",
    description: "Weekly Bible study focusing on the Gospel of Matthew"
  }
];