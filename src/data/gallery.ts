// src/data/gallery.ts
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  location: string;
  date?: string;
  category?: 'Table Mountain' | 'Wine Tours' | 'City Tours' | 'Coastal Tours' | 'Adventure Tours' | 'Wildlife' | 'Group Tours';
  type?: 'image' | 'video';
}

export const galleryImages: GalleryImage[] = [
  // Keeping existing key images
  {
    id: 2,
    src: '/assets/images/gallery/wine-tour-1.jpeg',
    alt: 'Wine Tasting Experience',
    location: 'Stellenbosch Vineyards',
    category: 'Wine Tours',
    date: '2023-02-20'
  },
  {
    id: 3,
    src: '/assets/images/gallery/coastal-1.jpeg',
    alt: 'Camps Bay Beach Tour',
    location: 'Camps Bay',
    category: 'Coastal Tours',
    date: '2023-03-10'
  },
  {
    id: 4,
    src: '/assets/images/gallery/city-tour-1.jpg',
    alt: 'City Centre Historical Tour',
    location: 'Cape Point',
    category: 'City Tours',
    date: '2023-03-15'
  },
  {
    id: 5,
    src: '/assets/images/gallery/adventure-1.jpg',
    alt: 'Adventure Experience',
    location: 'Signal Hill',
    category: 'Adventure Tours',
    date: '2023-04-01'
  },
  // New Wildlife and Group Tour entries
  {
    id: 6,
    src: '/assets/images/gallery/wildlife/elephants-1.jpg',
    alt: 'Elephant Herd at Waterhole',
    location: 'Addo Elephant National Park',
    category: 'Wildlife',
    date: '2023-10-01'
  },
  {
    id: 7,
    src: '/assets/images/gallery/wildlife/zebras-crossing.jpg',
    alt: 'Zebra Herd Crossing',
    location: 'Kruger National Park',
    category: 'Wildlife',
    date: '2023-10-02'
  },
  {
    id: 8,
    src: '/assets/images/gallery/wildlife/baboons.jpg',
    alt: 'Baboon Family Interaction',
    location: 'Cape Point Nature Reserve',
    category: 'Wildlife',
    type: 'video',
    date: '2023-10-03'
  },
  {
    id: 9,
    src: '/assets/images/gallery/group-tours/wine-tasting-group-1.jpg',
    alt: 'Group Wine Tasting Experience',
    location: 'Aquila Private Game Reserve',
    category: 'Group Tours',
    date: '2023-10-04'
  },
  {
    id: 10,
    src: '/assets/images/gallery/wildlife/elephants-2.jpg',
    alt: 'Baby Elephant with Mother',
    location: 'Addo Elephant Park',
    category: 'Wildlife',
    date: '2023-10-05'
  },
  {
    id: 12,
    src: '/assets/images/gallery/wildlife/snakes-1.jpg',
    alt: 'Cape Cobra Sighting',
    location: 'Table Mountain National Park',
    category: 'Wildlife',
    date: '2023-10-07'
  },
  {
    id: 13,
    src: '/assets/images/gallery/group-tours/table-mountain-group-1.jpg',
    alt: 'Group Cable Car Experience',
    location: 'Group Tours',
    category: 'Group Tours',
    date: '2023-10-08'
  },
  {
    id: 14,
    src: '/assets/images/gallery/wildlife/baboons-1.jpg',
    alt: 'Baboon Troop',
    location: 'Cape Point Nature Reserve',
    category: 'Wildlife',
    date: '2023-10-09'
  },
  {
    id: 15,
    src: '/assets/images/gallery/group-tours/wine-tasting-group-2.jpg',
    alt: 'Cellar Tour Group',
    location: 'Cheetah Outreach',
    category: 'Group Tours',
    date: '2023-10-10'
  },
  {
    id: 16,
    src: '/assets/images/gallery/wildlife/zebras-2.jpg',
    alt: 'Zebras Grazing',
    location: 'Table Mountain National Park',
    category: 'Wildlife',
    date: '2023-10-11'
  },
  {
    id: 17,
    src: '/assets/images/gallery/group-tours/coastal-group-1.jpg',
    alt: 'Group at Boulders Beach',
    location: 'Boulders Beach',
    category: 'Group Tours',
    date: '2023-10-12'
  },
  {
    id: 18,
    src: '/assets/images/gallery/wildlife/elephants-3.jpg',
    alt: 'Elephant Bull',
    location: 'Addo Elephant Park',
    category: 'Wildlife',
    date: '2023-10-13'
  },
  {
    id: 19,
    src: '/assets/images/gallery/group-tours/cape-point-group-2.jpg',
    alt: 'Group Hiking Cape Point',
    location: 'Group Tour',
    category: 'Group Tours',
    date: '2023-10-14'
  },
  {
    id: 20,
    src: '/assets/images/gallery/wildlife/snakes-2.jpg',
    alt: 'Puff Adder Sighting',
    location: 'Kirstenbosch Botanical Gardens',
    category: 'Wildlife',
    date: '2023-10-15'
  },
  {
    id: 21,
    src: '/assets/images/gallery/group-tours/table-mountain-group-2.jpg',
    alt: 'Group Summit Photo',
    location: 'Aquila Private Game Reserve',
    category: 'Group Tours',
    date: '2023-10-16'
  },
  {
    id: 22,
    src: '/assets/images/gallery/wildlife/baboons-2.jpg',
    alt: 'Baboons Interacting',
    location: 'Drakenstein Lion Park',
    category: 'Wildlife',
    date: '2023-10-17'
  },
  {
    id: 23,
    src: '/assets/images/gallery/group-tours/wine-tasting-group-3.jpg',
    alt: 'Wine Farm Group Tour',
    location: 'Inverdoorn Game Reserve ',
    category: 'Group Tours',
    date: '2023-10-18'
  },
  {
    id: 24,
    src: '/assets/images/gallery/wildlife/zebras-3.jpg',
    alt: 'Zebra Family',
    location: 'Rondevlei Nature Reserve',
    category: 'Wildlife',
    date: '2023-10-19'
  },
  {
    id: 25,
    src: '/assets/images/gallery/group-tours/coastal-group-4.jpg',
    alt: 'Group at Camps Bay',
    location: 'Inverdoorn',
    category: 'Group Tours',
    date: '2023-10-20'
  },
  {
    id: 26,
    src: '/assets/images/gallery/wildlife/elephants-5.jpg',
    alt: 'Elephant Herd Crossing',
    location: 'Addo Elephant Park',
    category: 'Wildlife',
    date: '2023-10-21'
  },
  {
    id: 27,
    src: '/assets/images/gallery/group-tours/cape-point-group-3.jpg',
    alt: 'Group at Cape of Good Hope',
    location: 'Aquila Private Game Reserve',
    category: 'Group Tours',
    date: '2023-10-22'
  },
  {
    id: 28,
    src: '/assets/images/gallery/wildlife/snakes-3.jpg',
    alt: 'Boomslang Sighting',
    location:'Sanbona Wildlife Reserve',
    category: 'Wildlife',
    date: '2023-10-23'
  },
  {
    id: 29,
    src: '/assets/images/gallery/group-tours/table-mountain-group-3.jpg',
    alt: 'Group Hiking Experience',
    location: 'Cape Point Ostrich Farm',
    category: 'Group Tours',
    date: '2023-10-24'
  },
  {
    id: 30,
    src: '/assets/images/gallery/wildlife/baboons-4.jpg',
    alt: 'Baboon Family',
    location: 'Sanbona Wildlife Reserve',
    category: 'Wildlife',
    date: '2023-10-25'
  },
  {
    id: 31,
    src: '/assets/images/gallery/group-tours/wine-tasting-group-4.jpg',
    alt: 'Wine Tasting Experience',
    location: 'Aquila Game Reserve',
    category: 'Group Tours',
    date: '2023-10-26'
  },
  {
    id: 32,
    src: '/assets/images/gallery/wildlife/zebras-4.jpg',
    alt: 'Zebras at Sunset',
    location: 'Drakenstein Lion Park',
    category: 'Wildlife',
    date: '2023-10-27'
  },
  {
    id: 34,
    src: '/assets/images/gallery/wildlife/elephants-5.jpg',
    alt: 'Elephant Family',
    location: 'Addo Elephant Park',
    category: 'Wildlife',
    date: '2023-10-29'
  },
  // Additional 13 images as per request
  {
    id: 35,
    src: '/assets/images/gallery/coastal/chapmans-peak-2.jpg',
    alt: 'Group at Chapman\'s Peak Drive',
    location: 'Chapman\'s Peak Drive',
    category: 'Coastal Tours',
    date: '2023-10-30'
  },
  {
    id: 36,
    src: '/assets/images/gallery/wildlife/aquarium-1.jpg',
    alt: 'Aquarium Visit',
    location: 'Two Oceans Aquarium',
    category: 'Wildlife',
    date: '2023-10-31'
  },
  {
    id: 37,
    src: '/assets/images/gallery/wildlife/penguins-1.jpg',
    alt: 'Penguin Colony',
    location: 'Boulders Beach',
    category: 'Wildlife',
    date: '2023-11-01'
  },
  {
    id: 38,
    src: '/assets/images/gallery/group-tours/penguins-group-1.jpg',
    alt: 'Group with Penguins',
    location: 'Boulders Beach',
    category: 'Group Tours',
    date: '2023-11-02'
  },
  {
    id: 39,
    src: '/assets/images/gallery/wildlife/penguins-2.jpg',
    alt: 'Penguins on Rocks',
    location: 'Boulders Beach',
    category: 'Wildlife',
    date: '2023-11-03'
  },
  {
    id: 40,
    src: '/assets/images/gallery/group-tours/penguins-group-2.jpg',
    alt: 'Group Observing Penguins',
    location: 'Beach',
    category: 'Group Tours',
    date: '2023-11-04'
  },
  {
    id: 41,
    src: '/assets/images/gallery/wildlife/penguins-3.jpg',
    alt: 'Penguin Family',
    location: 'Boulders Beach',
    category: 'Wildlife',
    date: '2023-11-05'
  },
  {
    id: 42,
    src: '/assets/images/gallery/group-tours/penguins-group-3.jpg',
    alt: 'Group Photo with Penguins',
    location: 'Boulders Beach',
    category: 'Group Tours',
    date: '2023-11-06'
  },
  {
    id: 43,
    src: '/assets/images/gallery/wildlife/penguins-5.jpg',
    alt: 'Penguins Swimming',
    location: 'Aquarium Visit',
    category: 'Wildlife',
    date: '2023-11-07'
  },
  {
    id: 44,
    src: '/assets/images/gallery/group-tours/penguins-group-4.jpg',
    alt: 'Group at Penguin Colony',
    location: 'West Coast',
    category: 'Group Tours',
    date: '2023-11-08'
  },
];