// components/Story.tsx
interface StoryProps {
  title: string;
  coverPhoto: string;
  description: string;
}

export default function Story({ title, coverPhoto, description }: StoryProps) {
  return (
<div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col w-full max-w-xs sm:w-80 md:w-56 m-4 p-4 mx-auto">
      {/* Title */}
      <h3 className="text-center font-bold text-lg mb-2">{title}</h3>

      {/* Cover Photo */}
      <img
        src={coverPhoto}
        alt={`${title} cover`}
        className="w-full h-36 object-cover mb-2"
      />

      {/* Description */}
      <p className="text-gray-600 text-sm flex-1 mb-3 text-center">{description}</p>

      {/* View Story Button */}
      <div className="flex justify-center">
        <button className="bg-red-400 hover:bg-red-300 active:bg-red-500 text-white px-5 py-2 rounded-md font-sans tracking-wider text-sm text-center">
          View Story
        </button>
      </div>
    </div>
  );
}
