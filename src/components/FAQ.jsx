import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="my-10">
        <h2 className="font-semibold text-5xl text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center  text-xl text-gray-600 mx-2 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-48 my-5">
          Some of the common questions our users have about managing and paying
          their utility bills. Find answers quickly and get the most out of your
          account.
        </p>
      </div>
      <div>
        <div className="collapse bg-base-100 border-base-300 border-2">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            How do I pay my bills?
          </div>
          <div className="collapse-content text-sm">
            To pay a bill, select the "Bill Details" button for the desired
            bill. You will be directed to the Bill Details page, where you can
            review all relevant information before proceeding with payment by
            clicking the "Pay Bill" button to settle your current month’s bill
            securely and efficiently.
          </div>
        </div>
        <div className="collapse bg-base-100 border-base-300 border-2">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            Can I view past bills?
          </div>
          <div className="collapse-content text-sm">
            Yes, all your paid bills are stored in your account, and you can
            download PDF copies at any time.
          </div>
          <div className="collapse bg-base-100 border-base-300 border-2">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              How do I update my bill information?
            </div>
            <div className="collapse-content text-sm">
              On the Pay Bills page, use the "Update Bill" button to edit your
              bill details.
            </div>
          </div>
          <div className="collapse bg-base-100 border-base-300 border-2">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              How do I download my bill history?
            </div>
            <div className="collapse-content text-sm">
              On the Pay Bills page, click the "Download PDF" button to save a
              copy of your paid bill for your records.
            </div>
          </div>
          <div className="collapse bg-base-100 border-base-300 border-2">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              Can I pay multiple bills at once?
            </div>
            <div className="collapse-content text-sm">
              Currently, only single-month bill payment is supported, but you
              can pay multiple bills sequentially.
            </div>
          </div>
          <div className="collapse bg-base-100 border-base-300 border-2">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              Can i pay previous month bill?
            </div>
            <div className="collapse-content text-sm">
              Currently, only the current month’s bill can be paid. Previous
              month bills cannot be paid through this platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
