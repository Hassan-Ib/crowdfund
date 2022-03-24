import React from "react";
// import { createPortal } from "react-dom";
import Modal from "../Modal";
import { usePledgeModal } from "../../Provider/PledgeModalProvider";

// const PledgeModal = () => {
//   const { isOpen, closeModal } = usePledgeModal();
//   console.log("isOpen from pledge component", isOpen);
//   if (!isOpen) return null;
//   // < isOpen={isOpen}>
//   return createPortal(
//     <div
//       aria-hidden={!isOpen}
//       role="dialog"
//       className="fixed z-10 top-0 left-0 w-full h-screen bg-black bg-opacity-50"
//       aria-modal="true">
//       <div className="px-2 sm:px-4 w-full py-8 h-full overflow-y-scroll">
//         <div className="mx-auto flex rounded-lg flex-col items-center justify-center w-[90%] h-full bg-white">
//           <p className="mb-8 font-serif">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
//             dolores ex sint tenetur :)
//           </p>
//           <button className="btn btn-primary" onClick={closeModal}>
//             close
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// };
const PledgeModal = () => {
  const { isOpen, closeModal } = usePledgeModal();
  console.log("isOpen from pledge component", isOpen);
  return (
    <Modal isOpen={isOpen}>
      <div className="mx-auto flex flex-col gap-4 rounded-lg items-center text-center justify-center w-[100%] h-full bg-white px-4 sm:px-8">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full">
          <img
            src="https://crowdfung.netlify.app/static/media/icon-check.bdee5269fa45688504fcc6fb78ab8756.svg"
            alt="done mark"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h4 className="card-header">Thanks for your support</h4>
        <p className="text-sm sm:text-base leading-6 text-pale">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="btn btn-primary capitalize" onClick={closeModal}>
          got it
        </button>
      </div>
    </Modal>
  );
};

export default PledgeModal;
