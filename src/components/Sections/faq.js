import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../UI/accordion";

export default function Faq() {
  const faq = [
    {
      title: "What is the typical timeline for development?",
      desc: "I’ll provide you with a clear project timeline upfront, based on your specific requirements. Most AI projects take 4–8 weeks, depending on complexity.",
    },
    {
      title: "How do you ensure the AI solution meets my business needs?",
      desc: "I start by thoroughly understanding your goals through a discovery call, then design a tailored solution with regular feedback loops. This ensures the final product aligns perfectly with your business objectives.",
    },
    {
      title: "Who is this service ideally for?",
      desc: "My services are ideal for startups, SMEs, and tech-driven companies looking to integrate AI into their products or automate critical processes.",
    },
    {
      title: "What technology stack do you use?",
      desc: "I primarily work with Python, TensorFlow, PyTorch, and FastAPI, along with React and Next.js for any front-end or dashboard needs. I also deploy on cloud platforms like AWS and GCP.",
    },
    {
      title: "What kind of post-launch support do you provide?",
      desc: "I offer 30 days of complimentary support after launch to handle tweaks or bug fixes, plus optional ongoing maintenance plans to keep your AI solution optimized.",
    },
  ];

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="faqs">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          FAQ
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faq.map((item, index) => (
            <AccordionItem key={index} value={item.title}>
              <AccordionTrigger className="text-xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-left text-lg text-gray-600">
                <p>{item.desc}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
