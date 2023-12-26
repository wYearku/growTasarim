import Image from "next/image";
import ReactStars from "react-stars";

const CommentCard = ({ content, rate, image, username }) => {
  return (
    <div className="flex flex-col bg-white text-black p-5 rounded-md">
      <div className="flex justify-between items-center">
        <ReactStars edit={false} value={rate} />
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-600 font-[500] uppercase">{username}</p>
          <Image
            src={image}
            width={1000}
            height={1000}
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
      </div>
      <p className="indent-5">{content}</p>
    </div>
  );
};

export default CommentCard;
