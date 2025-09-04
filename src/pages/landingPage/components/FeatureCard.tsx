import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  animationDelay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  animationDelay,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-xl card-hover animate-fadeInUp"
      style={{ animationDelay }}
    >
      <img src={imageSrc} alt={imageAlt} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
