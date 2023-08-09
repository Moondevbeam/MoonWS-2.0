import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the purpose of this website?',
      answer: 'This website is my personal portfolio, created to showcase my skills and projects as a web developer.',
    },
    {
      question: 'Who is Moonbeam?',
      answer: 'Moonbeam is my online nickname. My real name is Matteo Aliotta. I am a young web developer passionate about creating engaging digital experiences.',
    },
    {
      question: 'About MoonWS',
      answer: 'I developed this portfolio using React. I also leveraged Tailwind for design and Firebase for data management.',
    },
    {
      question: 'What can I find here?',
      answer: 'Here, you will find a collection of my projects, including websites and applications crafted with care using the latest web development technologies.',
    },
    {
      question: 'Other Projects',
      answer: 'I have worked on a variety of projects using React, including interactive websites, and dynamic user interfaces.',
    },
    {
      question: 'Want to get in touch?',
      answer: 'You can reach out to me through the contact details provided in the website\'s contact section. I will be happy to discuss collaboration opportunities or answer your questions.',
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
          <div key={index} className="border-t border-gray-200 p-6">
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
