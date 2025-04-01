import React, { useState } from 'react';
import BoardDetailModal from './BoardDetailModal';
import { useBoardStore } from '../store';
import BoardConfirmModal from './BoardConfirmModal';
import BoardEditModal from './BoardEditModal';

const typeToKorean = (type) => {
  switch (type) {
    case 'todo':
      return '할 일';
    case 'inprogress':
      return '진행 중';
    case 'done':
      return '완료';
    default:
      return type;
  }
};

const Boards = ({ type }) => {
  const { data } = useBoardStore();
  const filteredData = data.filter((item) => item.type === type);
  const [item, setItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Detail Modal
  const handleModalOpen = (item) => {
    setItem(item);
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setItem(null);
    setIsOpen(false);
  };

  // Delete Confirm Modal
  const handleConfirmModalOpen = (id) => {
    setSelectedId(id);
    handleModalClose();
    setConfirmIsOpen(true);
  };
  const handleConfirmModalClose = () => {
    setConfirmIsOpen(false);
    setSelectedId(null);
  };

  // Edit Modal
  const handleEditModalOpen = () => {
    setEditIsOpen(true);
    setIsOpen(false);
  };
  const handleEditModalClose = () => {
    setEditIsOpen(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[60px] bg-stone-200 rounded-sm flex items-center justify-center">
        <p className="text-lg font-semibold">{typeToKorean(type)}</p>
      </div>
      <div className="flex flex-col gap-2 p-4">
        {filteredData.map((item) => (
          <div
            onClick={() => handleModalOpen(item)}
            key={item.id}
            className="bg-white hover:bg-stone-100 shadow-md rounded-md p-4 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.type === 'todo' && <div className="animate-pulse w-2 h-2 rounded-full bg-green-500"></div>}
              {item.type === 'inprogress' && <div className="animate-pulse w-2 h-2 rounded-full bg-amber-500"></div>}
              {item.type === 'done' && <div className="animate-pulse w-2 h-2 rounded-full bg-red-500"></div>}
            </div>
            <p className="text-sm text-gray-500">{item.created_at}</p>
          </div>
        ))}
      </div>
      {isOpen && (
        <BoardDetailModal
          onClose={handleModalClose}
          onConfirm={handleConfirmModalOpen}
          onEdit={handleEditModalOpen}
          item={item}
        />
      )}
      {confirmIsOpen && <BoardConfirmModal onClose={handleConfirmModalClose} id={selectedId} />}
      {editIsOpen && <BoardEditModal onClose={handleEditModalClose} item={item} />}
    </div>
  );
};

export default Boards;
