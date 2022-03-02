import chatbox from "../../Images/Union 1.svg";

const CustomerReview = () => {
  return (
    <>
      <div className="p-4 bg-slate-100">
        <h3 className="font-bold text-center text-4xl mb-10">
          Customer's Review
        </h3>

        <div className="flex justify-center justify-evenly p-4">
          <div>
            <img className="" src={chatbox} alt="" />
            <p className=""></p>
          </div>
          <div>
            <img src={chatbox} alt="" />
          </div>
          <div>
            <img src={chatbox} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
