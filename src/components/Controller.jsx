import { useState } from 'react';
import ControllerDetailModal from './ControllerDetailModal';

const Controller = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full h-[60px] flex items-center justify-center">
      <button
        onClick={handleModalOpen}
        className="bg-slate-600 hover:bg-slate-500 px-4 py-2 rounded-sm text-stone-100 font-semibold cursor-pointer"
      >
        업무 추가
      </button>
      {isOpen && <ControllerDetailModal onClose={handleModalClose} />}
    </div>
  );
};

export default Controller;
