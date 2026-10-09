export type BlogData = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
};

export const blogs: BlogData[] = [
  {
    slug: "how-to-maintain-healthy-teeth",
    title: "How to Maintain Healthy Teeth for a Lifetime",
    excerpt:
      "Learn simple daily habits that can help protect your teeth, gums and overall oral health.",
    category: "General Dentistry",
    date: "October 08, 2026",
    readTime: "5 min read",
    author: "Dr. Ananya Menon",
    image: "/images/blog/blog-01.jpg",
    content: [
      "Maintaining healthy teeth is not only about having a beautiful smile. Good oral hygiene plays an important role in your overall health and wellbeing.",
      "Brushing your teeth twice a day with fluoride toothpaste is one of the most important habits for preventing cavities and gum problems.",
      "Flossing once a day helps remove food particles and plaque from areas that a toothbrush cannot easily reach.",
      "Regular dental checkups can help identify small problems before they become more complicated and expensive to treat.",
      "A balanced diet, limited sugary foods and regular professional dental cleaning can also contribute to healthier teeth and gums.",
    ],
  },

  {
    slug: "signs-you-need-a-dental-checkup",
    title: "7 Signs You Should Visit Your Dentist",
    excerpt:
      "Ignoring dental problems can sometimes make them worse. Here are important warning signs you should never ignore.",
    category: "Preventive Care",
    date: "October 05, 2026",
    readTime: "6 min read",
    author: "Dr. Rahul Nair",
    image: "/images/blog/blog-02.jpg",
    content: [
      "Many dental problems develop slowly and may not cause serious pain in the beginning. Recognizing early warning signs can help you get treatment sooner.",
      "Persistent tooth pain, sensitivity to hot or cold foods, bleeding gums and swelling are some common signs that you may need a dental examination.",
      "Bad breath that continues despite regular brushing and mouth cleaning can also sometimes indicate an underlying oral health issue.",
      "Loose teeth or difficulty chewing should never be ignored, especially in adults.",
      "If you experience any unusual changes in your teeth or gums, scheduling a dental checkup is a good next step.",
    ],
  },

  {
    slug: "complete-guide-to-dental-implants",
    title: "A Complete Guide to Dental Implants",
    excerpt:
      "Understand how dental implants work, who may benefit from them and what the treatment process involves.",
    category: "Dental Implants",
    date: "September 28, 2026",
    readTime: "8 min read",
    author: "Dr. Rahul Nair",
    image: "/images/blog/blog-03.jpg",
    content: [
      "Dental implants are a modern tooth replacement option designed to restore both function and appearance after tooth loss.",
      "A dental implant typically involves placing a small titanium implant into the jawbone, followed by a restoration designed to look and function like a natural tooth.",
      "The treatment process depends on your oral health, bone condition and individual treatment requirements.",
      "A detailed consultation and examination are important before deciding whether dental implants are suitable for you.",
      "With proper care and regular dental visits, implants can provide a long-term solution for many patients.",
    ],
  },

  {
    slug: "professional-teeth-whitening-guide",
    title: "Professional Teeth Whitening: What You Should Know",
    excerpt:
      "Discover how professional teeth whitening works and how it differs from common at-home whitening methods.",
    category: "Cosmetic Dentistry",
    date: "September 20, 2026",
    readTime: "5 min read",
    author: "Dr. Ananya Menon",
    image: "/images/blog/blog-04.jpg",
    content: [
      "Teeth can become darker or stained over time due to food, beverages, smoking and natural aging.",
      "Professional teeth whitening is performed under dental supervision and can provide more predictable results than many over-the-counter products.",
      "Before whitening treatment, your dentist may examine your teeth and gums to make sure the treatment is appropriate for you.",
      "The final result can vary depending on the type and severity of staining.",
      "Maintaining good oral hygiene and following your dentist's recommendations can help preserve your brighter smile.",
    ],
  },

  {
    slug: "braces-vs-clear-aligners",
    title: "Braces vs Clear Aligners: Which Is Right for You?",
    excerpt:
      "Explore the key differences between traditional braces and clear aligners before choosing an orthodontic treatment.",
    category: "Orthodontics",
    date: "September 14, 2026",
    readTime: "7 min read",
    author: "Dr. Meera Thomas",
    image: "/images/blog/blog-05.jpg",
    content: [
      "Both traditional braces and clear aligners can help improve tooth alignment and bite problems.",
      "Traditional braces use brackets and wires to gradually move teeth into their planned positions.",
      "Clear aligners use a series of removable transparent trays designed to gradually move the teeth.",
      "The best treatment depends on your dental condition, lifestyle, treatment goals and the recommendation of your orthodontist.",
      "A consultation with an orthodontic specialist can help determine which option is more suitable for your individual needs.",
    ],
  },

  {
    slug: "why-regular-dental-cleaning-is-important",
    title: "Why Regular Dental Cleaning Is Important",
    excerpt:
      "Professional dental cleaning can help remove plaque and tartar that regular brushing may not completely eliminate.",
    category: "Preventive Care",
    date: "September 08, 2026",
    readTime: "4 min read",
    author: "Dr. Ananya Menon",
    image: "/images/blog/blog-06.jpg",
    content: [
      "Even with good daily brushing and flossing, plaque can accumulate in areas that are difficult to clean effectively at home.",
      "When plaque hardens into tartar, professional dental cleaning may be required to remove it safely.",
      "Regular professional cleaning can support healthy gums and help reduce the risk of gum disease.",
      "Your dentist can also use routine visits to identify early signs of cavities, gum problems and other oral health concerns.",
      "Your recommended cleaning schedule depends on your individual oral health and dental history.",
    ],
  },
];

export function getBlogBySlug(slug: string): BlogData | undefined {
  return blogs.find((blog) => blog.slug === slug);
}