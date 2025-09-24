import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Heart, Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { Event } from "@/types/events";

interface EventCalendarProps {
  events: Event[];
  searchTerm: string;
  isSearching: boolean;
}

const EventCalendar = ({ events, searchTerm, isSearching }: EventCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Filter events for the selected date
  const selectedDateStr = date?.toISOString().split('T')[0];
  const eventsForSelectedDate = events.filter(event => event.date === selectedDateStr);
  
  // Today's date for comparison
  const todayStr = new Date().toISOString().split('T')[0];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mass":
        return "bg-cathedral-blue text-divine-white";
      case "Holy Hour":
        return "bg-sacred-gold text-cathedral-blue";
      case "Prayer Group":
        return "bg-accent text-cathedral-blue";
      case "Social Event":
        return "bg-secondary text-cathedral-blue";
      case "Confession":
        return "bg-muted text-cathedral-blue";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getDisplayTitle = () => {
    if (isSearching && searchTerm) {
      return `Search Results for "${searchTerm}"`;
    }
    if (selectedDateStr === todayStr) {
      return "Today's Events";
    }
    if (selectedDateStr && date) {
      return `Events for ${date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}`;
    }
    return "Select a Date";
  };

  const displayEvents = isSearching ? events : eventsForSelectedDate;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <Card className="shadow-cathedral">
          <CardHeader className="bg-gradient-divine">
            <CardTitle className="text-cathedral-blue text-xl">Event Calendar</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border-0 mx-auto"
              classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center text-cathedral-blue font-semibold",
                caption_label: "text-lg font-semibold",
                nav: "space-x-1 flex items-center",
                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md",
                day_range_end: "day-range-end",
                day_selected: "bg-cathedral-blue text-divine-white hover:bg-cathedral-blue hover:text-divine-white focus:bg-cathedral-blue focus:text-divine-white",
                day_today: "bg-sacred-gold text-cathedral-blue font-semibold",
                day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
              }}
            />
          </CardContent>
        </Card>

        <Card className="shadow-cathedral">
          <CardHeader className="bg-gradient-divine">
            <CardTitle className="text-cathedral-blue text-xl flex items-center gap-2">
              {isSearching ? (
                <SearchIcon className="w-5 h-5 text-sacred-gold" />
              ) : (
                <Heart className="w-5 h-5 text-sacred-gold" />
              )}
              {getDisplayTitle()}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {displayEvents.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {isSearching ? (
                  <div>
                    <SearchIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No events found matching your search criteria.</p>
                    <p className="text-sm mt-2">Try adjusting your search terms or category filter.</p>
                  </div>
                ) : (
                  <div>
                    <Heart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No events scheduled for this date.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {displayEvents.map((event) => (
                  <div key={event.id} className="border border-border rounded-lg p-4 hover:shadow-divine transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-cathedral-blue">{event.title}</h3>
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>Organized by {event.organizer}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground mt-2">{event.description}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventCalendar;