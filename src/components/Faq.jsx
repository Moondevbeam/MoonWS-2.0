import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Who made this website',
      answer: 'Me! Moonbeam',
    },
    {
      question: 'Who is Moonbeam',
      answer: 'A young web developer, his real name is Matteo Aliotta',
    },
    {
      question: 'Is this website made with love?',
      answer: 'Yes. ❤️',
    },
    {
      question: 'What is this website?',
      answer: 'This is a website made for showcasing my developer skills',
    },
    {
      question: 'Icons Provided by:',
      answer:'Devicons.dev',
    },
    {
      question: 'Example',
      answer: 'Lorem Ipsum',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-4">FAQ</h1>
      <div className="space-y-4 text-sm md:text-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-200 rounded p-4">
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-4 h-4 transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="mt-2">
                {typeof faq.answer === 'string' ? (
                  <p>{faq.answer}</p>
                ) : (
                  <ul className="list-disc pl-6">
                    {faq.answer.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
