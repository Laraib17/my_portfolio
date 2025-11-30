import React from "react";
import { service } from "../data/services_data";
const Services = () => {
  return (
    <div>
      <div>
        {service.map((service) => (
          <section key={service.id}>
            <div className="flex border-b">
              <h1 className="text-xl font-bold">{service.title}</h1>
              <p>{service.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                send data{" "}
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
export default Services;
