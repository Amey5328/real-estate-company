import React, { useState } from "react";
import "./FAQPage.css";

const FAQS = [
  {
    clause: "01",
    question: "How do I schedule a property visit?",
    answer:
      "Pick any listing and use the \"Book a visit\" button on its page, or call our office directly. We'll confirm a slot within one business day and send a reminder the morning of your visit — no account or sign-up required.",
  },
  {
    clause: "02",
    question: "Do you provide legal assistance?",
    answer:
      "Yes. Every transaction is reviewed by an in-house legal associate who checks title deeds, encumbrance certificates, and drafts the sale agreement. We also coordinate registration paperwork, so you're not left chasing documents on your own.",
  },
  {
    clause: "03",
    question: "Are home loans available?",
    answer:
      "We work with a panel of partner banks and NBFCs and can help you compare rates and get pre-approved before you commit to a property. Our team also assists with paperwork so the loan process runs alongside your purchase, not after it.",
  },
  {
    clause: "04",
    question: "How can I contact an agent?",
    answer:
      "Every listing page shows the assigned agent's name, phone number, and email. You can also reach our general line during business hours, and we'll route you to whoever knows the property or neighborhood best.",
  },
  {
    clause: "05",
    question: "What is your fee structure?",
    answer:
      "For buyers, browsing and site visits are free. For sellers, we charge a flat brokerage percentage on the final sale price, agreed upfront in writing — no hidden charges added later. Ask your agent for the exact figure for your listing.",
  },
  {
    clause: "06",
    question: "Can I schedule a virtual tour instead?",
    answer:
      "Yes, most listings offer a live video walkthrough with an agent, or a recorded tour if you'd rather watch on your own time. Just mention it when booking and we'll set up whichever works for your schedule.",
  },
  {
    clause: "07",
    question: "What documents do I need to buy a property?",
    answer:
      "Typically your ID proof, address proof, PAN card, and income documents if you're financing through a loan. We'll give you a checklist specific to the property once you're ready to make an offer, so nothing is missed.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-item__clause">Clause {item.clause}</span>
        <span className="faq-item__question">{item.question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div className="faq-item__panel">
        <p className="faq-item__answer">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="faq-page">
      <header className="faq-header">
        <div className="faq-header__grid" aria-hidden="true" />
        <div className="faq-header__inner">
          <p className="faq-header__eyebrow">COMMON QUESTIONS</p>
          <h1 className="faq-header__title">Straight Answers, No Fine Print</h1>
          <p className="faq-header__subtitle">
            Everything people ask us before a visit, an offer, or a signature —
            answered in plain language, upfront.
          </p>
        </div>
      </header>

      <main className="faq-body">
        <div className="faq-list">
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.clause}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="faq-contact">
          <p className="faq-contact__title">Still have a question?</p>
          <p className="faq-contact__subtitle">
            Our team replies within a business day, usually much sooner.
          </p>
          <a className="faq-contact__cta" href="/contact">
            Contact an agent <span aria-hidden="true">→</span>
          </a>
        </div>
      </main>
    </div>
  );
}