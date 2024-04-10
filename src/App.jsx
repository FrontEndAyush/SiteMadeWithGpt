import Navbar from "./component/Navbar/Navbar";
import HeroSection from "./component/Hero/Hero";
import CardPage from "./component/Cards/Card";
import ReviewPage from "./component/Review/Review";
import FormPage from "./component/FormPage/FormPage";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CardPage></CardPage>
      <ReviewPage/>
      <FormPage></FormPage>
      <Footer></Footer>
    </>
  );
}

export default App;
