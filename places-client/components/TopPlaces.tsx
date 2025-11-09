import PlaceCard from "./PlaceCard";
import Place from "../interfaces/Place";

interface PlacesProps {
  places?: Place[];
}

// mocked data
// TODO: fetch from API
const defaultPlaces: Place[] = [
  {
    rating: 4,
    title: "Great coffee and ambiance",
    description:
      "One of my favorite coffee shops in the area. The espresso is consistently excellent, and they have a nice selection of pastries. Can get a bit crowded on weekends though.",
    author: "David Chen",
    location: "Brew & Bean, Seattle",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
  },
  {
    rating: 5,
    title: "Must-visit for nature lovers",
    description:
      "This park is absolutely stunning! Well-maintained trails, beautiful scenery, and plenty of spots for picnics. I come here every weekend to unwind and disconnect from the city.",
    author: "Emma Rodriguez",
    location: "Riverside Park, Austin",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
  },
  {
    rating: 3,
    title: "Decent but overpriced",
    description:
      "The location is convenient and the service is good, but I found the prices to be a bit steep for what you get. Still worth a visit if you're in the area.",
    author: "Michael Thompson",
    location: "Urban Bistro, San Francisco",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  },
  {
    rating: 5,
    title: "Exceptional dining experience",
    description:
      "From the moment we walked in, we were treated like royalty. The menu is creative, the presentation is beautiful, and every dish was bursting with flavor. Highly recommend!",
    author: "Lisa Nakamura",
    location: "The Garden Restaurant, New York",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  },
  {
    rating: 4,
    title: "Perfect spot for families",
    description:
      "Brought my kids here last weekend and they had a blast! Lots of activities to keep them entertained, clean facilities, and reasonable prices. Will definitely be back.",
    author: "James Wilson",
    location: "Adventure Park, Denver",
    image: "https://images.unsplash.com/photo-1503457574462-bd27054394c1?w=800",
  },
  {
    rating: 5,
    title: "Hidden gem in the heart of downtown",
    description:
      "Absolutely loved this place! The atmosphere is cozy and welcoming. Perfect spot for a weekend brunch with friends. The staff was incredibly friendly and attentive.",
    author: "Sarah Mitchell",
    location: "Downtown Café, Portland",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
  },
];

const Reviews: React.FC<PlacesProps> = ({ places = defaultPlaces }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          Trending Places
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {places.map((place, index) => (
            <PlaceCard key={index} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
