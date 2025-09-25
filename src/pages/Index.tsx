import { useState, useMemo } from "react";
import Header from "@/components/Header";
import EventCalendar from "@/components/EventCalendar";
import { EventCategory, Event } from "@/types/events";
import { sampleEvents } from "@/data/sampleEvents";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>("all");
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  // Filter events based on search term and category
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = searchTerm === "" || 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [events, searchTerm, selectedCategory]);

  const handleAddEvent = (newEvent: Omit<Event, 'id'>) => {
    const eventWithId: Event = {
      ...newEvent,
      id: Math.max(...events.map(e => e.id), 0) + 1
    };
    setEvents(prevEvents => [...prevEvents, eventWithId]);
  };

  const isSearching = searchTerm !== "" || selectedCategory !== "all";

  return (
    <div className="min-h-screen bg-gradient-divine">
      <Header 
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onAddEvent={handleAddEvent}
      />
      <EventCalendar 
        events={filteredEvents}
        searchTerm={searchTerm}
        isSearching={isSearching}
      />
    </div>
  );
};

export default Index;
