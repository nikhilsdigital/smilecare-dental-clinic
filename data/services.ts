export type ServiceData = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  benefits: string[];
  idealFor: string[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const services: ServiceData[] = [
  {
    slug: "general-dentistry",
    number: "01",
    title: "General Dentistry",
    shortDescription:
      "Complete everyday dental care for healthy teeth, gums and long-term oral health.",
    description:
      "Our general dentistry services focus on preventing dental problems, maintaining oral health and treating common dental conditions with personalized care.",
    image: "/images/services/general-dentistry.png",

    benefits: [
      "Regular dental examinations",
      "Professional teeth cleaning",
      "Dental fillings",
      "Gum health evaluation",
      "Early detection of dental problems",
      "Personalized preventive care",
    ],

    idealFor: [
      "Routine dental checkups",
      "Tooth sensitivity or discomfort",
      "Cavities and tooth decay",
      "Gum health concerns",
      "Regular professional cleaning",
      "Preventive dental care",
    ],

    process: [
      {
        title: "Dental Consultation",
        description:
          "We discuss your concerns, dental history and current oral health.",
      },
      {
        title: "Oral Examination",
        description:
          "Our dentist carefully examines your teeth, gums and overall oral condition.",
      },
      {
        title: "Treatment Planning",
        description:
          "We explain our findings and recommend the most appropriate treatment.",
      },
      {
        title: "Personalized Care",
        description:
          "Your treatment is carried out with a focus on safety, comfort and long-term results.",
      },
    ],

    faqs: [
      {
        question: "How often should I have a dental checkup?",
        answer:
          "For many patients, a dental checkup every six months is a useful general guideline. Your dentist may recommend a different schedule based on your oral health.",
      },
      {
        question: "What happens during a general dental checkup?",
        answer:
          "The dentist examines your teeth and gums, checks for potential problems and discusses any treatment or preventive care that may be appropriate.",
      },
      {
        question: "Is professional dental cleaning necessary?",
        answer:
          "Professional cleaning helps remove plaque and tartar that regular brushing may not completely eliminate and can support better oral hygiene.",
      },
    ],
  },

  {
    slug: "cosmetic-dentistry",
    number: "02",
    title: "Cosmetic Dentistry",
    shortDescription:
      "Personalized cosmetic treatments designed to improve the appearance and confidence of your smile.",
    description:
      "Cosmetic dentistry focuses on improving the appearance of your teeth and smile while maintaining a natural and healthy look.",
    image: "/images/services/cosmetic-dentistry.png",

    benefits: [
      "Smile enhancement",
      "Natural-looking cosmetic results",
      "Personalized treatment planning",
      "Improved tooth appearance",
      "Professional smile assessment",
      "Confidence-focused care",
    ],

    idealFor: [
      "Discolored teeth",
      "Minor cosmetic imperfections",
      "Uneven-looking teeth",
      "Smile enhancement",
      "Stained or dull teeth",
      "Patients wanting a more confident smile",
    ],

    process: [
      {
        title: "Smile Consultation",
        description:
          "We discuss your smile goals and understand what you would like to improve.",
      },
      {
        title: "Smile Assessment",
        description:
          "Your dentist evaluates your teeth, gums and overall oral health.",
      },
      {
        title: "Treatment Planning",
        description:
          "We recommend suitable cosmetic options based on your individual needs.",
      },
      {
        title: "Smile Enhancement",
        description:
          "Your selected treatment is performed carefully with attention to natural-looking results.",
      },
    ],

    faqs: [
      {
        question: "What cosmetic dental treatments are available?",
        answer:
          "Depending on your needs, cosmetic options may include professional whitening, veneers and other smile-enhancement treatments.",
      },
      {
        question: "Will my cosmetic dental results look natural?",
        answer:
          "Treatment is planned around your facial features, existing teeth and individual goals to create an appropriate and natural-looking result.",
      },
      {
        question: "Do I need a consultation before cosmetic treatment?",
        answer:
          "Yes. A consultation allows the dentist to assess your oral health and determine which treatment options are appropriate for you.",
      },
    ],
  },

  {
    slug: "dental-implants",
    number: "03",
    title: "Dental Implants",
    shortDescription:
      "A modern solution for replacing missing teeth with strong, functional and natural-looking results.",
    description:
      "Dental implants can be used to replace missing teeth and restore both function and appearance. Our team evaluates your individual situation before recommending an appropriate treatment plan.",
    image: "/images/services/dental-implants.png",

    benefits: [
      "Natural-looking tooth replacement",
      "Improved chewing function",
      "Long-term restorative solution",
      "Designed for individual needs",
      "Improved smile appearance",
      "Comprehensive treatment planning",
    ],

    idealFor: [
      "One or more missing teeth",
      "Difficulty chewing due to missing teeth",
      "Patients seeking fixed tooth replacement",
      "Tooth replacement consultation",
      "Patients considering restorative options",
      "Patients suitable for implant treatment",
    ],

    process: [
      {
        title: "Implant Consultation",
        description:
          "We discuss your dental history, concerns and expectations for tooth replacement.",
      },
      {
        title: "Detailed Assessment",
        description:
          "Your dentist evaluates your oral health and determines whether implant treatment may be appropriate.",
      },
      {
        title: "Treatment Planning",
        description:
          "A personalized implant treatment plan is prepared based on your individual dental condition.",
      },
      {
        title: "Implant Restoration",
        description:
          "The treatment is completed according to your personalized clinical plan with appropriate follow-up care.",
      },
    ],

    faqs: [
      {
        question: "What are dental implants?",
        answer:
          "Dental implants are a restorative option used to replace missing teeth. They are designed to provide a stable foundation for a replacement tooth.",
      },
      {
        question: "Am I suitable for dental implants?",
        answer:
          "Suitability depends on factors such as your oral health, bone condition and overall dental situation. A professional consultation is required to determine this.",
      },
      {
        question: "How long does implant treatment take?",
        answer:
          "Treatment time varies between patients because it depends on the individual treatment plan, healing and any additional procedures that may be required.",
      },
    ],
  },

  {
    slug: "orthodontics",
    number: "04",
    title: "Orthodontics",
    shortDescription:
      "Modern orthodontic solutions to improve tooth alignment, bite and smile appearance.",
    description:
      "Orthodontic treatment helps improve the alignment of teeth and bite using treatment options selected according to each patient's needs.",
    image: "/images/services/orthodontics.png",

    benefits: [
      "Improved tooth alignment",
      "Better bite function",
      "Personalized orthodontic planning",
      "Modern treatment options",
      "Improved smile appearance",
      "Long-term oral health support",
    ],

    idealFor: [
      "Crowded teeth",
      "Gaps between teeth",
      "Crooked teeth",
      "Bite problems",
      "Patients considering braces",
      "Patients considering clear aligners",
    ],

    process: [
      {
        title: "Orthodontic Consultation",
        description:
          "We understand your concerns and discuss your smile and bite goals.",
      },
      {
        title: "Detailed Assessment",
        description:
          "Your teeth and bite are carefully evaluated to understand your orthodontic needs.",
      },
      {
        title: "Treatment Plan",
        description:
          "We recommend an appropriate orthodontic approach based on your individual case.",
      },
      {
        title: "Progress & Follow-Up",
        description:
          "Your progress is monitored regularly throughout your orthodontic treatment.",
      },
    ],

    faqs: [
      {
        question: "What problems can orthodontic treatment address?",
        answer:
          "Orthodontic treatment can help with issues such as crowded teeth, gaps, tooth alignment and certain bite problems.",
      },
      {
        question: "Do adults need orthodontic treatment?",
        answer:
          "Yes. Orthodontic treatment can be suitable for adults as well as younger patients, depending on their individual dental needs.",
      },
      {
        question: "Are clear aligners an option?",
        answer:
          "Clear aligners may be appropriate for some patients. Your orthodontic assessment will determine which treatment option is suitable.",
      },
    ],
  },

  {
    slug: "teeth-whitening",
    number: "05",
    title: "Teeth Whitening",
    shortDescription:
      "Professional whitening designed to brighten your smile while keeping results natural-looking.",
    description:
      "Professional teeth whitening can help reduce certain types of tooth discoloration and create a brighter-looking smile under professional dental guidance.",
    image: "/images/services/teeth-whitening.png",

    benefits: [
      "Brighter-looking smile",
      "Professional treatment",
      "Personalized shade assessment",
      "Safe clinical guidance",
      "Natural-looking results",
      "Smile confidence",
    ],

    idealFor: [
      "Stained teeth",
      "Surface discoloration",
      "Dull-looking smile",
      "Special occasions",
      "Patients wanting a brighter smile",
      "Professional whitening consultation",
    ],

    process: [
      {
        title: "Smile Assessment",
        description:
          "We assess your teeth and identify the type and level of discoloration.",
      },
      {
        title: "Shade Evaluation",
        description:
          "Your dentist evaluates your current tooth shade and discusses realistic treatment expectations.",
      },
      {
        title: "Whitening Treatment",
        description:
          "Professional whitening is performed according to your personalized treatment plan.",
      },
      {
        title: "Aftercare Guidance",
        description:
          "You receive guidance on maintaining your brighter smile after treatment.",
      },
    ],

    faqs: [
      {
        question: "Is professional teeth whitening safe?",
        answer:
          "When appropriately assessed and performed under professional dental guidance, teeth whitening can be a safe cosmetic treatment for suitable patients.",
      },
      {
        question: "Will whitening make my teeth completely white?",
        answer:
          "Results vary between patients. Your dentist can explain what level of whitening may realistically be achievable for your teeth.",
      },
      {
        question: "How long do whitening results last?",
        answer:
          "The duration varies depending on diet, oral hygiene and individual habits. Your dentist can provide personalized maintenance advice.",
      },
    ],
  },

  {
    slug: "preventive-care",
    number: "06",
    title: "Preventive Care",
    shortDescription:
      "Regular dental care designed to help prevent problems before they become more serious.",
    description:
      "Preventive dentistry focuses on regular examinations, professional cleaning, oral hygiene guidance and early identification of potential dental problems.",
    image: "/images/services/preventive-care.png",

    benefits: [
      "Regular oral examinations",
      "Professional dental cleaning",
      "Early problem detection",
      "Gum health monitoring",
      "Personalized oral hygiene guidance",
      "Long-term dental health support",
    ],

    idealFor: [
      "Regular dental maintenance",
      "Patients with plaque buildup",
      "Gum health monitoring",
      "Children and adults",
      "Patients wanting preventive care",
      "Routine dental visits",
    ],

    process: [
      {
        title: "Routine Examination",
        description:
          "Your dentist checks your teeth, gums and overall oral health.",
      },
      {
        title: "Professional Cleaning",
        description:
          "Plaque and tartar are professionally removed to support better oral hygiene.",
      },
      {
        title: "Oral Health Guidance",
        description:
          "We provide practical recommendations for maintaining your oral health at home.",
      },
      {
        title: "Follow-Up Plan",
        description:
          "We recommend an appropriate schedule for future preventive visits.",
      },
    ],

    faqs: [
      {
        question: "Why is preventive dental care important?",
        answer:
          "Regular preventive care can help identify dental problems earlier and support healthier teeth and gums over time.",
      },
      {
        question: "How often should I have professional cleaning?",
        answer:
          "The appropriate frequency depends on your oral health and individual risk factors. Your dentist can recommend a suitable schedule.",
      },
      {
        question: "Can preventive care reduce dental problems?",
        answer:
          "Regular examinations, professional cleaning and good daily oral hygiene can help reduce the risk of several common dental problems.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}