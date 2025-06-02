import AboutWithIcons from "@/app/(mainsite)/components/homepage/AboutWithIcons/AboutWithIcons";
import Experience from "@/app/(mainsite)/components/homepage/Experience/Experience";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import LetsTalk from "@/app/(mainsite)/components/homepage/LetsTalk/LetsTalk";
import Nationwide from "@/app/(mainsite)/components/homepage/Nationwide/Nationwide";
import Services from "@/app/(mainsite)/components/homepage/Services/Services";


export default function Home() {
  const myServices: servicesModuleType = {
    services: [
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M13 2v8h8a8 8 0 0 0-8-8m6.32 13.89A7.95 7.95 0 0 0 21 11H6.44L5.5 9H2v2h2.22s1.89 4.07 2.12 4.42C5.24 16 4.5 17.17 4.5 18.5A3.5 3.5 0 0 0 8 22c1.76 0 3.22-1.3 3.46-3h2.08c.24 1.7 1.7 3 3.46 3a3.5 3.5 0 0 0 3.5-3.5c0-1.04-.46-1.97-1.18-2.61M8 20a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 8 17a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 8 20m9 0a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17 17a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 17 20"></path></svg>,
        title: "Newborn Care",
        description: "Experienced in infant care, our specialists provide nurturing support during the first few months of life. They assist with feeding, diapering, soothing, and establishing healthy routines."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M23 12h-6v-2l3.39-4H17V4h6v2l-3.38 4H23zm-8 4H9v-2l3.39-4H9V8h6v2l-3.38 4H15zm-8 4H1v-2l3.39-4H1v-2h6v2l-3.38 4H7z"></path></svg>,
        title: "Sleep Specialists",
        description: "Our sleep specialists help families create and maintain sleep schedules that promote restful nights. They work with infants, toddlers, and children to address sleep challenges gently and effectively."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 22v-6H3l2.6-7.6c.3-.8 1-1.4 1.9-1.4s1.7.6 1.9 1.4L12 16H9v6zm8.5-10a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-1 3h6v4H18v3h-3v-3h-1.5z"></path></svg>,
        title: "Babysitters",
        description: "Flexible and reliable care for your children when you need it most. Whether it's a regular schedule or last-minute help, our babysitters are professional, attentive, and child-focused."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 22v-6H3l2.6-7.6c.3-.8 1-1.4 1.9-1.4s1.7.6 1.9 1.4L12 16H9v6zm8.5-10a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-1 3h6v4H18v3h-3v-3h-1.5z"></path></svg>,
        title: "Live-In Nannies",
        description: "For families seeking full-time, in-home support, our live-in nannies offer consistent care and household help. They become a trusted extension of your family, available around the clock."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg>,
        title: "Personal & Executive Assistants",
        description: "Skilled assistants to help manage your calendar, errands, communications, and day-to-day tasks. Ideal for busy professionals and families who need dependable administrative support."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg>,
        title: "House/Estate Managers",
        description: "Oversee and coordinate household operations with professionalism and discretion. From vendor management to staffing and maintenance, they ensure your home runs smoothly."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={20} height={24} viewBox="0 0 20 24"><path fill="currentColor" d="M18.845 17.295a7.44 7.44 0 0 0-4.089-2.754l-.051-.011l-1.179 1.99a1.003 1.003 0 0 1-1 1c-.55 0-1-.45-1.525-1.774v-.032a1.25 1.25 0 1 0-2.5 0v.033v-.002c-.56 1.325-1.014 1.774-1.563 1.774a1.003 1.003 0 0 1-1-1l-1.142-1.994A7.47 7.47 0 0 0 .67 17.271l-.014.019a4.5 4.5 0 0 0-.655 2.197v.007c.005.15 0 .325 0 .5v2a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-2c0-.174-.005-.35 0-.5a4.5 4.5 0 0 0-.666-2.221l.011.02zM4.5 5.29c0 2.92 1.82 7.21 5.25 7.21c3.37 0 5.25-4.29 5.25-7.21v-.065a5.25 5.25 0 1 0-10.5 0v.068z"></path></svg>,
        title: "Formal Butlers",
        description: "Delivering classic, high-end service with attention to detail. Our butlers are trained in etiquette, service presentation, and household coordination for refined domestic support."
      },
      {
        url: "/contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={256} height={256} viewBox="0 0 256 256"><path fill="currentColor" d="M240 112a56.06 56.06 0 0 0-56-56c-1.77 0-3.54.1-5.29.26a56 56 0 0 0-101.42 0C75.54 56.1 73.77 56 72 56a56 56 0 0 0-24 106.59V208a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-45.41A56.09 56.09 0 0 0 240 112m-87.76 30.06l8-32a8 8 0 0 1 15.52 3.88l-8 32A8 8 0 0 1 160 152a8 8 0 0 1-1.95-.24a8 8 0 0 1-5.81-9.7M120 112a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm-33.94-7.76a8 8 0 0 1 9.7 5.82l8 32a8 8 0 0 1-5.82 9.7a8 8 0 0 1-2 .24a8 8 0 0 1-7.75-6.06l-8-32a8 8 0 0 1 5.87-9.7M192 208H64v-40.58a55.5 55.5 0 0 0 8 .58h112a55.5 55.5 0 0 0 8-.58Z"></path></svg>,
        title: "Personal Chefs",
        description: "Customized, in-home meals tailored to your tastes and dietary needs. Whether it’s daily cooking or special events, our chefs bring gourmet quality and convenience to your kitchen."
      },
      

    ]
  }
  return (
    <>
    <Header />
    <AboutWithIcons />
    <Services services={myServices.services} />
    <Experience />
    <Nationwide />
    <LetsTalk />
    </>
  )
}
