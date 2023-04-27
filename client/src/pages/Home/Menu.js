import PhotoGallery from "../../components/PhotoGallery";

const Menu = () => {
  const imageList = [
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1"
  ];
  const ToRender = (
    <div className="menu">
      <h1 className=" font-bold text-4xl pt-8">INDO MARKET MENU</h1>

      <PhotoGallery images={imageList} />
    </div>
  );
  return ToRender;
};
export default Menu;
