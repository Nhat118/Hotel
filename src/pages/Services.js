import React from 'react';

function Services() {
  const services = [
    { name: 'Room Service', description: '24/7 in-room dining' },
    { name: 'Spa & Wellness', description: 'Relaxation and treatment services' },
    { name: 'Fitness Center', description: 'Modern equipment and trainers' },
    { name: 'Swimming Pool', description: 'Indoor and outdoor pools' },
  ];

  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services; 