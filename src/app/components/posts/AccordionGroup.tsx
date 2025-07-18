import AccordionItem from './AccordionItem';

export default function AccordionGroup() {
  return (
    <div className="accordion divide-neutral/20 max-w-lg divide-y">
      <AccordionItem
        isActive={true}
        title="When is payment taken for my order?"
        content="Payment is taken during the checkout process when you pay for your order. The order number that appears on the
  confirmation screen indicates payment has been successfully processed."
      />
      <AccordionItem
       isActive={false}
        title=" How would you ship my order?"
        content=" For large products, we deliver your product via a third party logistics company offering you the “room of choice” scheduled delivery service. For small products, we offer free parcel delivery."
      />
      <AccordionItem
       isActive={false}
        title="Can I cancel my order?"
        content="Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund."
      />
    </div>
  );
}
