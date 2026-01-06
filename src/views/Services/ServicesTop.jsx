import TopSectionComponent from "../../components/TopSectionComponent";

const ServicesTop = () => {
  return (
    <div className="md:px-8 md:py-12">
      <TopSectionComponent
        head1={"Engineering Your Digital Edge"}
        head2={"Next-Gen Solutions at Zulnova Technology Stop imagining—start building."}
        head3={"ZulNova Technology"}
        description={
"We deliver custom, high-performance software designed to unlock your business's full potential."        
        }
        picture={service1}
      />
    </div>
  );
};

export default ServicesTop;
