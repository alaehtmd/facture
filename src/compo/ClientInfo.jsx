import React from "react";

function ClientInfo({ formData, handleChange }) {
  return (
    <div>
      <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Nom du client" />
      <input type="text" name="clientAddress" value={formData.clientAddress} onChange={handleChange} placeholder="Adresse du client" />
      <input type="tel" name="clientPhone" value={formData.clientPhone} onChange={handleChange} placeholder="Téléphone du client" />
      <input type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} placeholder="Email du client" />
    </div>
  );
}

export default ClientInfo;