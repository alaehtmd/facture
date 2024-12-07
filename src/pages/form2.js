import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import '../App.css';
import imagealae from '../assets/image.png';
import InvoicePDF from '../compo/InvoicePDF';

function Form2() {
  const [formData, setFormData] = useState({
    supplierName: '',
    supplierAddress: '',
    supplierPhone: '',
    supplierEmail: '',
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    clientEmail: '',
    invoiceNumber: '',
    invoiceDate: '',
    dueDate: '',
    reference: '',
    description: '',
    quantity: '',
    unitPrice: '',
    totalAmount: '',
    tax: '',
    discount: '',
    grandTotal: '',
    paymentTerms: '',
    bankDetails: ''
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextStep = () => {
    if (isStepValid()) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form is being submitted...");
    setSubmitted(true);
    console.log("Form submitted:", formData);

    const blob = await pdf(<InvoicePDF formData={formData} />).toBlob();
    saveAs(blob, 'facture.pdf');
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.clientName && formData.clientAddress && formData.clientPhone && formData.clientEmail;
      case 2:
        return formData.supplierName && formData.supplierAddress && formData.supplierPhone && formData.supplierEmail;
      case 3:
        return formData.invoiceNumber && formData.invoiceDate && formData.dueDate && formData.reference && formData.description && formData.quantity && formData.unitPrice && formData.totalAmount && formData.tax && formData.discount && formData.grandTotal;
      default:
        return false;
    }
  };

  return (
    <div className="containerform">
      <div className='container'>
        <div className='myform'>
          <div className='img'>
            <img src={imagealae} alt='imagealae' className='illustrationform'/>
          </div>
          <form onSubmit={handleSubmit} className="form">
            {step === 1 && (
              <div className="section">
                <h3>Informations sur le Client</h3>
                <label>
                  <input placeholder="Nom du client" type="text" name="clientName" value={formData.clientName} onChange={handleChange} />
                </label>
                <label>
                  <input placeholder="Adresse du client" type="text" name="clientAddress" value={formData.clientAddress} onChange={handleChange} />
                </label>
                <label>
                  <input placeholder="Téléphone du client" type="text" name="clientPhone" value={formData.clientPhone} onChange={handleChange} />
                </label>
                <label>
                  <input placeholder="Email du client" type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} />
                </label>
                <button type="button" onClick={handleNextStep} disabled={!isStepValid()}>Continuer</button>
              </div>
            )}
            {step === 2 && (
              <div className="section">
                <h3>Informations sur le Fournisseur</h3>
                <label>
                  <input placeholder="Nom du fournisseur" type="text" name="supplierName" value={formData.supplierName} onChange={handleChange} />
                </label>
                <label>
                  <input placeholder="Adresse du fournisseur" type="text" name="supplierAddress" value={formData.supplierAddress} onChange={handleChange} />
                </label>
                <label>
                  <input placeholder="Téléphone du fournisseur" type="text" name="supplierPhone" value={formData.supplierPhone} onChange={handleChange} />
                </label>
                <label>
                  <input placeholder="Email du fournisseur" type="email" name="supplierEmail" value={formData.supplierEmail} onChange={handleChange} />
                </label>
                <button type="button" onClick={handlePrevStep}>Retour</button>
                <button type="button" onClick={handleNextStep} disabled={!isStepValid()}>Continuer</button>
              </div>
            )}
            {step === 3 && (
              <div className="section">
                <h3>Détails du Produit</h3>
                <label>
                  <textarea placeholder="Description" name="description" value={formData.description} onChange={handleChange}></textarea>
                </label>
                <label>
                  <input placeholder="Quantité" type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
                </label>
                <label>
                  <input placeholder="Prix unitaire" type="number" name="unitPrice" value={formData.unitPrice} onChange={handleChange} />
                </label>
                <label>
                  <input placeholder="Taxes" type="number" name="tax" value={formData.tax} onChange={handleChange} />
                </label>
                <button type="button" onClick={handlePrevStep}>Retour</button>
                <button type="submit" disabled={!isStepValid()}>Soumettre</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form2;