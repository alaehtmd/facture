import React, { useState } from 'react';
import './form1.css';
import imagealae from '../assets/image.png';

function Form1() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (<section className='facture'>
    <div className="containerform">
      <div className='container'>
        <h2>Informations sur le Client/Destinataire</h2>
           <div className='myform'>
               <div className='img'>
                  <img src={imagealae} alt='imagealae' className='illustrationform'/>
               </div>
               <form onSubmit={handleSubmit} className="form">
            <div className="section">
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
            </div>
          </form>
           </div>
      </div> 
    </div>
    <div className="containerform">
      <div className='container'>
        <h2>Informations sur le Fournisseur</h2>
           <div className='myform'>
               <div className='img'>
                  <img src={imagealae} alt='imagealae' className='illustrationform'/>
               </div>
               <form onSubmit={handleSubmit} className="form">
                 <div className="section">
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
                   </div>
                 </form>  
           </div>
      </div> 
    </div>

    <div className="containerform">
      <div className='container'>
        <h2>Informations sur le Produit</h2>
           <div className='myform'>
               <div className='img'>
                  <img src={imagealae} alt='imagealae' className='illustrationform'/>
               </div>
               <form onSubmit={handleSubmit} className="form">
            <div className="section">

              <label>
                <input placeholder="Date de la facture" type="date" name="invoiceDate" value={formData.invoiceDate} onChange={handleChange} />
              </label>
             
              <label>
                <input placeholder="Référence de commande" type="text" name="reference" value={formData.reference} onChange={handleChange} />
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
              
             
            </div>
          </form>
           </div>
      </div> 
    </div>

    
    
    
    </section> 
  );
}

export default Form1;