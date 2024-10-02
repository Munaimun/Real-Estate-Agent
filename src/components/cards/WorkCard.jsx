const WorkCard = ({ image, title, details }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      {/* Image */}
      <img src={image} alt={title} className="w-20 h-20 mb-4" />

      {/* Title */}
      <p className="text-xl font-semibold mb-2">{title}</p>

      {/* Details */}
      <p className="text-gray-600">{details}</p>
    </div>
  );
};

export default WorkCard;
