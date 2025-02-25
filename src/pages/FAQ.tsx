import React from 'react';
import Layout from '../components/Layout';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const faqs = {
    "General Questions": [
      {
        question: "What is regenerative medicine?",
        answer: "Regenerative medicine focuses on using the body's natural healing abilities to repair and regenerate damaged tissues. Our treatments utilize cutting-edge therapies to enhance these natural processes."
      },
      {
        question: "Are these treatments FDA-approved?",
        answer: "These therapies are not FDA-approved for the treatment of specific diseases. Individual results may vary. We follow strict protocols and safety guidelines in all our treatments."
      },
      {
        question: "How long do treatments typically take?",
        answer: "Treatment duration varies depending on the specific therapy and condition. Most sessions range from 60-90 minutes, with some treatments requiring multiple sessions."
      }
    ],
    "Treatment Process": [
      {
        question: "What happens during the initial consultation?",
        answer: "During your first visit, we'll review your medical history, perform necessary examinations, and discuss treatment options. We'll create a personalized treatment plan tailored to your needs."
      },
      {
        question: "How should I prepare for treatment?",
        answer: "Preparation varies by treatment type. Generally, we recommend good hydration, avoiding blood thinners (with doctor's approval), and following any specific pre-treatment instructions provided."
      },
      {
        question: "What is the recovery process like?",
        answer: "Recovery varies by treatment and individual. Most patients can return to normal activities within 24-48 hours, though some treatments may require longer recovery periods."
      }
    ],
    "Safety & Eligibility": [
      {
        question: "Are these treatments safe?",
        answer: "We maintain strict safety protocols and screening procedures. While all medical procedures carry some risk, our treatments have shown excellent safety profiles when performed by qualified professionals."
      },
      {
        question: "Who is eligible for treatment?",
        answer: "Eligibility depends on various factors including medical history, current health status, and specific conditions. We conduct thorough evaluations to determine if our treatments are appropriate for each patient."
      },
      {
        question: "Are there any side effects?",
        answer: "Potential side effects vary by treatment but are typically mild and temporary. We'll discuss specific risks and benefits during your consultation."
      }
    ],
    "Insurance & Payment": [
      {
        question: "Does insurance cover these treatments?",
        answer: "Coverage varies by insurance provider and treatment type. Our team can help verify your coverage and discuss payment options."
      },
      {
        question: "What payment options are available?",
        answer: "We accept various payment methods and offer financing options through trusted healthcare financing partners. We'll discuss all options during your consultation."
      },
      {
        question: "Are payment plans available?",
        answer: "Yes, we offer flexible payment plans through our financing partners to help make treatment more accessible."
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find answers to common questions about our treatments and services
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            {Object.entries(faqs).map(([section, questions]) => (
              <div key={section} className="pt-6">
                <div>
                  <button
                    onClick={() => setOpenSection(openSection === section ? null : section)}
                    className="text-left w-full flex justify-between items-start text-gray-400"
                  >
                    <span className="text-2xl font-semibold text-gray-900">
                      {section}
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      {openSection === section ? (
                        <Minus className="h-6 w-6" />
                      ) : (
                        <Plus className="h-6 w-6" />
                      )}
                    </span>
                  </button>
                </div>
                {openSection === section && (
                  <div className="mt-4 space-y-6">
                    {questions.map((faq, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm p-6 mt-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Still Have Questions Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Still have questions?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can't find the answer you're looking for? Please contact us.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}