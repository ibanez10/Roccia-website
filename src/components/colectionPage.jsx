import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const collectionsRow1 = [
  { title: "Archy Dining Set", img: "/Archi Dining Set.png" },
  { title: "Archy Lounge Set", img: "/Archi Lounge Set.png" },
  { title: "Atrani Balcony Set", img: "/Artani Balcony Set.png" },
  { title: "Atrani Lounge Set", img: "/Atrani Lounge Set.png" },
];

const collectionsRow2 = [
  { title: "Baloo", img: "/Baloo.png" },
  { title: "Baloo & Cuba Lounge Set", img: "/Baloo & Cuba Lounge Set.png", isWide: true },
  { title: "Cross Leg", img: "/Cross Leg.png" },
];

const collectionsRow3 = [
  { title: "Diamond Edge", img: "/Diamond Edge.png" },
  { title: "Cuba Dining Set", img: "/Cuba Dinning set.png" },
  { title: "Diamond Edge & Ovieado Dining Set", img: "/Diamond Edge & Ovieado Dinning Set.png", isTallWide: true },
  { title: "Cross Leg & Cuba Dining Set", img: "/Cross Leg & Cuba Dinning Set.png", isFullWidth: true },
];

const collectionsRow4 = [
  { title: "Dove Tail Dining Set", img: "/Dove Tail Dinning Set.png" },
  { title: "Montego Corner Set", img: "/Montego Corner Set.png" },
  { title: "Ovieado Dining Set", img: "/Ovieado Dinning Set.png" },
  { title: "Pattern Top", img: "/Patern Top.png" },
];

export default function FeaturedCollections() {
  return (
    <div className="bg-white h-full px-4 pb-10 space-y-10">
      {/* Hero */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/Collection Bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-semibold">Collection</h1>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mt-5">
        <div className="flex justify-center items-center mb-5">
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
          <p className="text-lg text-gray-700 m-0">Introducing</p>
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
        </div>
        <h1 className="text-2xl md:text-3xl">
          Effortless <span className="text-red-800 underline">Elegance</span> in every piece
        </h1>
      </div>

      {/* Collections */}
      <div className="max-w-[1140px] mx-auto space-y-10">
        {/* Row 1 */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          {collectionsRow1.map((item, index) => (
            <Card key={index} title={item.title} img={item.img} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          {collectionsRow2.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              img={item.img}
              isWide={item.isWide}
            />
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex gap-4 md:gap-10 flex-wrap justify-center items-start">
          {/* Left */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Card title={collectionsRow3[0].title} img={collectionsRow3[0].img} />
              <Card title={collectionsRow3[1].title} img={collectionsRow3[1].img} />
            </div>
            <Card title={collectionsRow3[3].title} img={collectionsRow3[3].img} isWide />
          </div>

          {/* Right */}
          <Card
            title={collectionsRow3[2].title}
            img={collectionsRow3[2].img}
            isTallWide
          />
        </div>

        {/* Row 4 */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          {collectionsRow4.map((item, index) => (
            <Card key={index} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, img, isWide = false, isTallWide = false, isFullWidth = false }) {
  const navigate = useNavigate();

  let width = "w-full md:w-[260px]";
  let height = "h-[240px] md:h-[320px]";

  if (isWide) {
    width = "w-full md:w-[540px]";
  }
  if (isTallWide) {
    width = "w-full md:w-[530px]";
    height = "h-[360px] md:h-[660px]";
  }
  if (isFullWidth) {
    width = "w-full";
    height = "h-[240px] md:h-[320px]";
  }

  const slug = title.toLowerCase().replace(/ /g, "-");

  return (
    <div
      className={`relative ${width} ${height} rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition hover:scale-105 duration-300`}
    >
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <button
        onClick={() => navigate(`/product/${slug}`)}
        className="absolute bottom-4 left-4 right-4 bg-white/30 hover:bg-white/80 duration-500 backdrop-blur-sm rounded-full px-4 py-2 flex items-center justify-between"
      >
        <span className="text-xs md:text-sm font-medium text-gray-800 truncate">{title}</span>
        <ArrowRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}
