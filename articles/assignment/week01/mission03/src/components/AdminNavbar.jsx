import { useNavigate } from "react-router-dom";
import gdgLogo  from "../assets/gdg_logo.svg"
const AdminNavbar = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="flex h-[60px] w-full items-center justify-around border-b border-[#D2D2D2] bg-white">
        <img className='w-20'
          onClick={() => (window.location.href = "/")}
          src={gdgLogo}
        ></img>
        <div className="w-[488px]"></div>
        <button
          onClick={() => nav("/")}
          className="rounded-[8px] border border-blue-500 p-[6px] text-[16px] text-blue-500 hover:cursor-pointer"
        >
          소비자
        </button>
      </div>
    </>
  );
};

export default AdminNavbar;