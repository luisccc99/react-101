import HeroImage from "./HeroImage";
import HeroDescription from "./HeroDescription";
import ExperienceCard from "./ExperienceCard";

const Hero =  () => {
    return (
        <section className="hero">
            <HeroImage />
            <HeroDescription />
            <ExperienceCard />
        </section>
    );
};

export default Hero;