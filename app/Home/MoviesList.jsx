/* eslint-disable @next/next/no-img-element */
const arr = [
  { src: "./pic1.jpg", key: 1 },
  { src: "./pic2.jpg", key: 2 },
  { src: "./pic1.jpg", key: 3 },
  { src: "./pic2.jpg", key: 4 },
  { src: "./pic1.jpg", key: 5 },
  { src: "./pic2.jpg", key: 6 },
  { src: "./pic1.jpg", key: 7 },
  { src: "./pic2.jpg", key: 8 },
];
function MoviesList() {
  return (
    <div className="flex gap-3 mt-3 overflow-scroll w-[870px]">
      {arr.map((item) => (
        <Item key={item.key} item={item.src} />
      ))}
    </div>
  );
}

const Item = ({ item }) => {
  return <img className="h-[220px] " src={item} alt="" />;
};

export default MoviesList;
