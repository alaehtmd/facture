import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const InvoicePDF = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Nom du fournisseur: {formData.supplierName}</Text>
        <Text>Adresse du fournisseur: {formData.supplierAddress}</Text>
        <Text>Téléphone du fournisseur: {formData.supplierPhone}</Text>
        <Text>Email du fournisseur: {formData.supplierEmail}</Text>
        <Text>Nom du client: {formData.clientName}</Text>
        <Text>Adresse du client: {formData.clientAddress}</Text>
        <Text>Téléphone du client: {formData.clientPhone}</Text>
        <Text>Email du client: {formData.clientEmail}</Text>
        <Text>Numéro de facture: {formData.invoiceNumber}</Text>
        <Text>Date de facture: {formData.invoiceDate}</Text>
        <Text>Date d'échéance: {formData.dueDate}</Text>
        <Text>Référence: {formData.reference}</Text>
        <Text>Description: {formData.description}</Text>
        <Text>Quantité: {formData.quantity}</Text>
        <Text>Prix unitaire: {formData.unitPrice}</Text>
        <Text>Montant total: {formData.totalAmount}</Text>
        <Text>Taxes: {formData.tax}</Text>
        <Text>Remise: {formData.discount}</Text>
        <Text>Total général: {formData.grandTotal}</Text>
        <Text>Conditions de paiement: {formData.paymentTerms}</Text>
        <Text>Détails bancaires: {formData.bankDetails}</Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;