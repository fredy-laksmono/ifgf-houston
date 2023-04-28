import PhotoGallery from "../../components/PhotoGallery";

const Menu = () => {
  const imageList = [
    "https://gcdnb.pbrd.co/images/mSebwAzoWt3h.jpg?o=1",
    "https://gcdnb.pbrd.co/images/n3aKELFTpWP0.jpg?o=1",
    "https://gcdnb.pbrd.co/images/IDYNM1W3kT64.jpg?o=1",
    "https://gcdnb.pbrd.co/images/0SiHn3pzr3G8.jpg?o=1",
    "https://gcdnb.pbrd.co/images/5gQ8fSGILxGu.jpg?o=1",
    "https://gcdnb.pbrd.co/images/aYMEw9mdOxGc.jpg?o=1",
    "https://gcdnb.pbrd.co/images/n5Pgr2pqSvNS.jpg?o=1",
    "https://gcdnb.pbrd.co/images/aZiymUaWemN1.jpg?o=1",
    "https://gcdnb.pbrd.co/images/vcyN4j8ILxAQ.jpg?o=1",
    "https://gcdnb.pbrd.co/images/Au3tRz61nfjx.jpg?o=1",
    "https://gcdnb.pbrd.co/images/lv9Dq2lCqs9s.jpg?o=1",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM+(1).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM+(2).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM+(3).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM+(4).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM+(5).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM+(6).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM+(7).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM+(8).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.34+PM.jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.35+PM+(1).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.35+PM+(2).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.35+PM.jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.33+PM+(7).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.33+PM+(1).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.33+PM+(2).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.33+PM+(3).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.33+PM+(4).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.33+PM+(5).jpeg",
    "https://lihat360panos.s3.amazonaws.com/ifgfindomarket/WhatsApp+Image+2023-04-22+at+3.52.33+PM+(6).jpeg"
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
