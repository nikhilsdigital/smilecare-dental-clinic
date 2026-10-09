export type DoctorData = {
  slug: string;
  name: string;
  specialization: string;
  qualification: string;
  experience: string;
  rating: string;
  reviews: string;
  image: string;
  shortBio: string;
  about: string;
  expertise: string[];
};

export const doctors: DoctorData[] = [
  {
    slug: "dr-ananya-menon",
    name: "Dr. Ananya Menon",
    specialization: "Chief Dental Surgeon",
    qualification: "BDS, MDS",
    experience: "15+ Years Experience",
    rating: "4.9",
    reviews: "320+ Reviews",
    image: "/images/doctors/doctor-01.png",
    shortBio:
      "Experienced dental surgeon focused on comprehensive, comfortable and patient-centered dental care.",
    about:
      "Dr. Ananya Menon is an experienced dental professional dedicated to providing personalized dental care with a strong focus on patient comfort, preventive dentistry and long-term oral health.",
    expertise: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Preventive Dental Care",
      "Smile Enhancement",
      "Comprehensive Dental Treatment",
    ],
  },

  {
    slug: "dr-rahul-nair",
    name: "Dr. Rahul Nair",
    specialization: "Implant & Restorative Dentist",
    qualification: "BDS, MDS",
    experience: "12+ Years Experience",
    rating: "4.9",
    reviews: "280+ Reviews",
    image: "/images/doctors/doctor-02.png",
    shortBio:
      "Specialist in restorative and implant dentistry with a focus on functional and natural-looking results.",
    about:
      "Dr. Rahul Nair focuses on restorative and implant dentistry, helping patients restore missing or damaged teeth with carefully planned treatment and modern dental techniques.",
    expertise: [
      "Dental Implants",
      "Restorative Dentistry",
      "Crowns & Bridges",
      "Tooth Replacement",
      "Comprehensive Treatment Planning",
    ],
  },

  {
    slug: "dr-meera-thomas",
    name: "Dr. Meera Thomas",
    specialization: "Orthodontist",
    qualification: "BDS, MDS Orthodontics",
    experience: "10+ Years Experience",
    rating: "4.8",
    reviews: "240+ Reviews",
    image: "/images/doctors/doctor-03.png",
    shortBio:
      "Orthodontic specialist helping patients achieve healthier alignment and more confident smiles.",
    about:
      "Dr. Meera Thomas is an orthodontic specialist focused on improving tooth alignment, bite function and smile appearance through personalized orthodontic care.",
    expertise: [
      "Orthodontics",
      "Braces",
      "Clear Aligners",
      "Tooth Alignment",
      "Bite Correction",
    ],
  },
];

export function getDoctorBySlug(
  slug: string
): DoctorData | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}