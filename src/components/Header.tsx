import { Search, Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EventCategory, Event } from "@/types/events";
import cathedralImage from "@/assets/st-patricks-cathedral.jpg";

interface HeaderProps {
  searchTerm: string;
  selectedCategory: EventCategory;
  onSearchChange: (term: string) => void;
  onCategoryChange: (category: EventCategory) => void;
  onAddEvent: (event: Omit<Event, 'id'>) => void;
}

const Header = ({ searchTerm, selectedCategory, onSearchChange, onCategoryChange, onAddEvent }: HeaderProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    organizer: "",
    date: "",
    time: "",
    category: "Mass" as const
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.location || !formData.organizer || !formData.date || !formData.time) {
      alert("Please fill in all required fields");
      return;
    }

    const newEvent: Omit<Event, 'id'> = {
      title: formData.title,
      description: formData.description,
      location: formData.location,
      organizer: formData.organizer,
      date: formData.date,
      time: formData.time,
      category: formData.category as Event['category']
    };

    onAddEvent(newEvent);
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      location: "",
      organizer: "",
      date: "",
      time: "",
      category: "Mass" as const
    });
    
    setIsDialogOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <header className="relative bg-gradient-cathedral text-divine-white shadow-cathedral">
      {/* Cathedral Background */}
      <div className="absolute inset-0">
        <img
          src={cathedralImage}
          alt="St. Patrick's Cathedral"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-cathedral opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Title */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-divine-white">
              NYCCatholic Events
            </h1>
            <p className="text-lg text-divine-white/90">
              Discover faith-filled gatherings across New York City
            </p>
          </div>
          
          {/* Search and Add Event */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search Bar with Category Filter */}
            <div className="flex gap-2 bg-divine-white/10 backdrop-blur-sm rounded-lg p-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-divine-white/70" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 bg-divine-white/20 border-divine-white/30 text-divine-white placeholder:text-divine-white/70 focus:bg-divine-white/30"
                />
              </div>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger className="w-40 bg-divine-white/20 border-divine-white/30 text-divine-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Mass">Mass</SelectItem>
                  <SelectItem value="Holy Hour">Holy Hour</SelectItem>
                  <SelectItem value="Confession">Confession</SelectItem>
                  <SelectItem value="Prayer Group">Prayer Group</SelectItem>
                  <SelectItem value="Social Event">Social Event</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Add Event Button */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" className="bg-sacred-gold hover:bg-sacred-gold-light text-cathedral-blue font-semibold shadow-divine">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Event
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-cathedral-blue">Add New Catholic Event</DialogTitle>
                  <DialogDescription>
                    Share your Catholic event with the NYC community
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-cathedral-blue font-medium">Event Title *</Label>
                    <Input 
                      id="title" 
                      placeholder="Enter event title" 
                      className="mt-1"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="text-cathedral-blue font-medium">Date *</Label>
                      <Input 
                        id="date" 
                        type="date"
                        className="mt-1"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-cathedral-blue font-medium">Time *</Label>
                      <Input 
                        id="time" 
                        type="time"
                        className="mt-1"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="category" className="text-cathedral-blue font-medium">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mass">Mass</SelectItem>
                        <SelectItem value="Holy Hour">Holy Hour</SelectItem>
                        <SelectItem value="Confession">Confession</SelectItem>
                        <SelectItem value="Prayer Group">Prayer Group</SelectItem>
                        <SelectItem value="Social Event">Social Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-cathedral-blue font-medium">Location *</Label>
                    <Input 
                      id="location" 
                      placeholder="Event location" 
                      className="mt-1"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="organizer" className="text-cathedral-blue font-medium">Organizer *</Label>
                    <Input 
                      id="organizer" 
                      placeholder="Event organizer" 
                      className="mt-1"
                      value={formData.organizer}
                      onChange={(e) => handleInputChange('organizer', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="details" className="text-cathedral-blue font-medium">Details</Label>
                    <Textarea 
                      id="details" 
                      placeholder="Describe your event" 
                      className="mt-1"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cathedral-blue hover:bg-cathedral-blue-light">
                    Submit Event
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;