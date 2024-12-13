import Checkout from "@/app/components/Checkout/Checkout";
import Dessert from "@/app/components/Dessert/Dessert";
import Drink from "@/app/components/Drinks/Drinks";
import Error from "@/app/components/Error/Error";
import Experience from "@/app/components/Experience/Experience";
import Faq from "@/app/components/Faq/Faq";
import Hero from "@/app/components/Hero";
import MainCours from "@/app/components/MainCours/MainCourse";
import StarterMenu from "@/app/components/Menu/StartMenu";
import PartnersAndClients from "@/app/components/pattnerClient/pattnerClient";
import Signin from "@/app/components/Signin/Signin";
import Signup from "@/app/components/Signup/Signup";
import AboutUs from "@/app/components/Aboutus";
import FoodCategory from "@/app/components/FoodCategory";
import HeroExperience from "@/app/components/HeroExperience";
import HeroMenu from "@/app/components/HeroMenu";
import Landing from "@/app/components/Landing/Landing";
import MeetChef from "@/app/components/MeetChef";
import Navbar from "@/app/components/Navbar/Navbar";
export default function Home() {
  return (
    <>
    {/* Home Page */}
       <Landing />
       <AboutUs />
       <FoodCategory />
       <HeroMenu />
       <MeetChef />
       <HeroExperience />

      {/* Menu Page */}
       <Navbar />
       <Hero/>
       <StarterMenu/>
       <MainCours/>
       <Experience/>
       <Dessert/>
       <Drink/>	
       <PartnersAndClients/>

       {/* FAQ */}
       <Faq />

       {/* Checkout */}
       <Checkout />

       {/* Sign up */}
       <Signup />

       {/* Sign in */}
       <Signin />

       {/* 404 Error */}
       <Error />

    </>
  );
}
