import Piechart from "./PieChart";
import { Button } from "./ui/button";

const Dashboard = () => {
  return (
    <>
      {/* <h5>hi</h5> */}
      <div className="w-full lg:w-[80%] my-0 mx-auto">
        <Piechart />
      </div>
      <input type="file" />
      <Button>add</Button>
      <div>
        <a href="C:/Users/Aspire Vero/Downloads/invoice_2.pdf" target="_blank">
          link
        </a>
      </div>

      <style>{`
        .modal-overlay {
          // position: fixed;
          // top: 0;
          // left: 0;
          // right: 0;
          // bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          // display: flex;
          // justify-content: center;
          // align-items: center;
        }
        .modal-content {
          // background: white;
          // padding: 20px;
          // border-radius: 4px;
          max-width: 500px;
          // width: 100%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default Dashboard;
