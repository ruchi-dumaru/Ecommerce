import logo from "../../assets/cartLogo.png";
const Footer = () => {
  return (
    <div className="text-xl bg-purple-900 text-white">
      <div className="flex mt-10 mb-8  items-center justify-center text-xl font-normal">
        <img className="h-20 " src={logo} />
        <p>Shooper</p>
      </div>
      <div className="flex gap-8 cursor-pointer justify-center items-center">
        <ul>Company</ul>
        <ul>Products</ul>
        <ul>Office</ul>
        <ul>About</ul>
        <ul>Contact</ul>
      </div>

      <div className="icon flex gap-8 mb-10 justify-center items-center mt-10 text-3xl cursor-pointer">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-square-facebook"></i>
      </div>
      <div className="mx-10 border-t-2  border-gray-300 mt-8 pt-6 text-center">
        <p className="text-gray-300">Copyright @ 2026 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
