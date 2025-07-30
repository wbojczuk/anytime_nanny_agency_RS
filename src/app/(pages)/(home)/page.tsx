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
        icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 178.094 298.205" xmlSpace="preserve"> <g> <path d="M54.514,10.291C54.209,4.558,49.478,0,43.669,0s-10.54,4.558-10.846,10.291c3.253-1.682,6.938-2.638,10.846-2.638 C47.576,7.653,51.262,8.61,54.514,10.291z" /> <circle fill="white" cx="43.669" cy="31.354" r="21.5" /> <path d="M42.446,178.086c-8-0.094-15-0.822-20-1.839v51.299c0,5.523,4.477,10,10,10c5.521,0,10-4.477,10-10V178.086z" /> <path d="M45.446,227.546c0,5.523,4.476,10,10,10c5.52,0,10-4.477,10-10v-51.299c-6,1.017-12,1.745-20,1.839V227.546z" /> <path d="M43.669,175.102c28.32,0,43.334-9,43.334-9l-6.925-34.034c-0.677,3.885-1.346,8.087-2,12.645 c-0.568,3.962-4.012,6.951-8.011,6.952c-0.381,0-0.77-0.028-1.154-0.083c-4.424-0.635-7.505-4.747-6.872-9.168 c0.799-5.574,1.641-10.793,2.525-15.685c-21.534-4.917-37.94-10.618-48.848-16.986c-1.237-0.722-2.391-1.449-3.473-2.177 l-11.91,58.537C0.336,166.102,15.349,175.102,43.669,175.102z" /> <path d="M69.208,149.503c0.289,0.041,0.575,0.062,0.859,0.062c2.936,0,5.503-2.158,5.932-5.149 c0.83-5.79,1.688-11.026,2.561-15.772c-0.791,0.235-1.621,0.366-2.477,0.366c-0.587,0-1.18-0.06-1.761-0.178 c-2.64-0.537-5.194-1.088-7.699-1.646c-0.879,4.845-1.712,10.014-2.503,15.526C63.65,145.992,65.928,149.032,69.208,149.503z" /> <path d="M117.391,137.558c-11.442,0-20.701-3.57-24.806-5.462c0.002,0.154,0.005,0.32,0.008,0.495 c-0.872,1.186-1.487,2.589-1.731,4.144c-0.625,3.976-1.476,11.887-2.391,21.538c-0.33,3.474-0.668,7.172-1.007,10.996 c-1.974,22.268-3.977,48.743-4.521,59.306c-0.271,5.24,3.758,9.706,8.998,9.977c0.167,0.009,0.333,0.013,0.497,0.013 c5.022,0,9.218-3.959,9.479-9.032c0.634-12.297,3.418-48.511,5.653-71.511h19.636c2.236,23,5.019,59.213,5.653,71.511 c0.262,5.073,4.457,9.021,9.479,9.021c0.165,0,0.331,0.001,0.497-0.007c5.24-0.271,9.269-4.734,8.998-9.974 c-0.898-17.418-5.761-78.098-7.919-91.839c-0.244-1.555-0.858-2.958-1.73-4.144c0.003-0.174,0.006-0.339,0.008-0.492 C138.087,133.989,128.83,137.558,117.391,137.558z" /> <path d="M117.389,81.979c-6.442,0-12.188-4.259-16.049-10.018c-2.337-0.747-4.949-0.992-7.752-0.315 c-9.807,2.368-17.406,14.732-23.311,38.328c2.417,0.54,4.93,1.078,7.553,1.612c1.479,0.301,2.823,0.965,3.942,1.918 c5.062-20.569,10.119-27.152,12.86-29.254c-0.105,1.018-0.206,2.077-0.301,3.177c-1.228,14.197-1.622,34.483-1.724,41.346 c2.824,1.404,12.615,5.786,24.784,5.786c12.165,0,21.954-4.38,24.78-5.785c-0.11-7.381-0.557-30.292-2.017-44.451 c3.619,2.932,11.73,14.164,18.171,57.011c-3.537,2.285-5.884,6.254-5.886,10.78c0,1.816,1.473,3.289,3.289,3.289 c1.818,0,3.291-1.473,3.291-3.289c0.003-1.608,0.616-3.069,1.613-4.176c1.085,1.012,2.523,1.628,4.077,1.628 c0.283,0,0.57-0.021,0.859-0.062c1.54-0.221,2.815-1.013,3.733-2.126c1.332,1.146,2.143,2.84,2.143,4.735v82.451 c0,1.816,1.512,3.291,3.33,3.291c1.817,0,3.311-1.475,3.311-3.291l0.008-82.451c-0.001-5.304-3.21-9.852-7.797-11.808 c-5.168-34.83-12.125-55.773-21.542-64.426c2.096-0.687,3.795-2.414,4.323-4.721c0.801-3.5-1.387-6.985-4.887-7.786 c-3.482-0.797-6.89-1.495-10.236-2.124C135.858,71.548,127.474,81.979,117.389,81.979z" /> <path d="M117.389,79.778c10.425,0,18.877-12.925,18.877-23.35c0-10.426-8.452-18.878-18.877-18.878 c-10.424,0-18.877,8.452-18.877,18.878C98.512,66.854,106.965,79.778,117.389,79.778z" /> <path d="M16.878,107.756c12.283,7.17,31.765,13.503,57.902,18.822c0.438,0.089,0.873,0.132,1.303,0.132 c3.026,0,5.735-2.125,6.362-5.206c0.716-3.518-1.556-6.95-5.073-7.666c-52.254-10.633-65.029-23.136-64.344-28.864 c0.001-0.007,0.001-0.014,0.002-0.02c0.131-1.045,0.625-2.116,1.401-3.179c0.909-1.247,2.214-2.482,3.806-3.657l-1.971,9.689 c3.32,4.72,16.117,13.47,51.944,21.697c1.348-5.417,2.785-10.257,4.32-14.532l-4.861-23.89c0.923-0.107,1.92-0.214,2.996-0.32 c5.435-0.532,12.78-0.989,21.635-0.932c0.265-0.077,0.527-0.162,0.796-0.227c1.264-0.305,2.552-0.46,3.829-0.46 c0.987,0,1.947,0.1,2.881,0.27c-2.138-3.977-3.406-8.419-3.484-12.58c-14.148-0.328-25.127,0.641-31.782,1.503 c-0.663,0.086-1.278,0.17-1.855,0.252L45.502,68.75l4.957-10.986c-2.112-0.244-4.403-0.412-6.707-0.416 c-2.166-0.092-4.501,0.012-6.927,0.296l5.011,11.105l-15.161-8.965c-2.874,0.871-5.724,1.961-8.432,3.261 C8.898,67.532,1.241,74.485,0.131,83.337c-0.106,0.843-0.153,1.745-0.121,2.692C0.208,92.074,3.69,100.057,16.878,107.756z M63.446,87.021h-12v-4h12V87.021z" /> </g></svg>,
        title: "Senior Care",
        description: "Our senior care services provide compassionate support with daily tasks, personal care, and companionship. We help seniors stay safe, independent, and comfortable at home."
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
