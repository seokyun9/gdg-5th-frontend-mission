import AdminNavbar from "../components/AdminNavbar";
import StockBox from "../components/StockBox";

const Admin = () => {
  return (
    <>
      <AdminNavbar />
      <div className="w-[652px] mx-auto">
        {/* 상단 영역 임의지정 (for 자동중앙정렬) 하단 mt 132->50/ gap 28->14 */}
      <div className="mt-[50px] w-[652px]">
        <section className="flex flex-col gap-[14px]">
          <div className="text-[20px] font-[600]">상품 등록</div>
          <StockBox section2Exist={true} comment={true} />
        </section>

        <section className="flex flex-col gap-[14px]">
          <div className="text-[20px] font-[600]">재고 추가</div>
          <StockBox />
        </section>

        <section className="flex flex-col gap-[14px]">
          <div className="text-[20px] font-[600]">상품 삭제</div>
          <StockBox stockExist={false} />
        </section>

        <div className="h-[100px]"></div>
      </div>
      </div>
    </>
  );
};

export default Admin;
