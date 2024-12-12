import React, { useState } from 'react';

function Dashboard({ userRole }) {
  const [rooms] = useState([
    { id: 101, type: 'Phòng Đơn', price: '500,000', status: 'Trống', floor: 1 },
    { id: 102, type: 'Phòng Đôi', price: '800,000', status: 'Đã đặt', floor: 1 },
    { id: 103, type: 'Phòng VIP', price: '1,500,000', status: 'Đang dọn', floor: 1 },
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
  };

  const handleBookRoom = (roomId) => {
    alert(`Phòng ${roomId} đã được đặt!`);
    // Logic đặt phòng
  };

  return (
    <div className="dashboard-container">
      <h2>Danh Sách Phòng</h2>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <div className="room-header">
              <h3>Phòng {room.id}</h3>
              <span className="room-status" style={{ backgroundColor: room.status === 'Trống' ? '#4CAF50' : '#f44336' }}>
                {room.status}
              </span>
            </div>
            <div className="room-info">
              <p><strong>Loại:</strong> {room.type}</p>
              <p><strong>Giá:</strong> {room.price} VNĐ/đêm</p>
            </div>
            <div className="room-actions">
              <button onClick={() => handleViewDetails(room)} className="action-button">
                Xem Chi Tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="room-details-modal">
          <h3>Chi Tiết Phòng {selectedRoom.id}</h3>
          <p><strong>Loại:</strong> {selectedRoom.type}</p>
          <p><strong>Giá:</strong> {selectedRoom.price} VNĐ/đêm</p>
          <p><strong>Tầng:</strong> {selectedRoom.floor}</p>
          <p><strong>Tình Trạng:</strong> {selectedRoom.status}</p>
          {selectedRoom.status === 'Trống' && (
            <button onClick={() => handleBookRoom(selectedRoom.id)} className="action-button">
              Đặt Phòng
            </button>
          )}
          <button onClick={() => setSelectedRoom(null)} className="action-button secondary">
            Đóng
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard; 