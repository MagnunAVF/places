import { FaStar } from "react-icons/fa";
import Place from "../interfaces/Place";

const PlaceCard: React.FC<Place> = ({
  rating = 5,
  title = "Place Title",
  description = "My favorite place",
  author = "John Doe",
  location = "Porto Alegre, RS, Brazil",
  image = "https://cdn-site.localiza.com/wp-content/uploads/2022/07/porto-alegre-rs.jpg",
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
      <div className="h-16 mb-2">
        <h3 className="text-xl text-gray-900 dark:text-white truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-light truncate">
          {location}
        </p>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover mb-4 rounded-lg"
        style={{ aspectRatio: "16/9" }}
      />
      <p className="text-gray-600 dark:text-gray-300 mb-4 font-light flex-grow">
        {description}
      </p>
      <div className="flex items-center mt-auto">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-green-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaceCard;
