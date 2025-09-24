import { Search, Plus } from "lucide-react";
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
import { EventCategory } from "@/types/events";
import cathedralImage from "@/assets/st-patricks-cathedral.jpg";

interface HeaderProps {
  searchTerm: string;
  selectedCategory: EventCategory;
  onSearchChange: (term: string) => void;
  onCategoryChange: (category: EventCategory) => void;
}

const Header = ({ searchTerm, selectedCategory, onSearchChange, onCategoryChange }: HeaderProps) => {
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
            <Dialog>
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
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-cathedral-blue font-medium">Event Title</Label>
                    <Input id="title" placeholder="Enter event title" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="details" className="text-cathedral-blue font-medium">Details</Label>
                    <Textarea id="details" placeholder="Describe your event" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="location" className="text-cathedral-blue font-medium">Location</Label>
                    <Input id="location" placeholder="Event location" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="contact" className="text-cathedral-blue font-medium">Organizer Contact</Label>
                    <Input id="contact" placeholder="Contact information" className="mt-1" />
                  </div>
                  <Button className="w-full bg-cathedral-blue hover:bg-cathedral-blue-light">
                    Submit Event
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;