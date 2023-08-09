import SiteContainer from "@/components/site-container";
import SectionHeader from "@/components/section-header";

interface SocialResponsibilityPageProps {}

export default function SocialResponsibilityPage({}: SocialResponsibilityPageProps) {
  return (
    <main>
      <SiteContainer>
        <SectionHeader
          title="Social Responsibility"
          level={1}
          className="text-center"
        />
      </SiteContainer>
      <SiteContainer>
        <div className="prose mx-auto">
          <p>
            At Raiz, we believe it is important to give back to the community.
            We support charities and programs through donations and mentorship
            to organisations helping disadvantaged kids, as well as programs
            protecting our Australian rainforests and planting new trees.
          </p>

          <p>
            A special thanks for all your support as without you, none of this
            would be possible.
          </p>

          <p>
            In the last financial year, Raiz Australia donated $32,000 to
            children’s charities.
          </p>

          <h4 className="has-text-color">Recent donations:</h4>

          <p></p>

          <figure className="wp-block-image size-full">
            <img
              width="278"
              height="91"
              src="https://raizinvest.com.au/wp-content/uploads/2022/05/boys_girls.jpg"
              alt=""
              className="wp-image-11630"
            />
          </figure>

          <h5 className="has-medium-font-size">The Girls and Boys Brigade</h5>

          <p>
            Catering for over 150 boys and girls aged 5-18 years and their
            families who often struggle with significant life challenges. The
            Girls and Boys Brigade provides a range of education and recreation
            programs along with the vital support to strengthen families and
            encourage a more positive future.
          </p>

          <figure className="wp-block-image size-full">
            <img
              loading="lazy"
              width="324"
              height="324"
              src="https://raizinvest.com.au/wp-content/uploads/2022/05/kit_bag_for_kids_logo.png"
              alt=""
              className="wp-image-11632"
            />
          </figure>

          <h5 className="has-medium-font-size">Kit bag for kids</h5>

          <p>
            Kit bag for kids aims to support the targeted health and well-being
            programmes delivered to children in need by promoting and conducting
            relief for disadvantaged children in Australia.
          </p>

          <figure className="wp-block-image size-full">
            <img
              loading="lazy"
              width="500"
              height="500"
              src="https://raizinvest.com.au/wp-content/uploads/2022/05/og.oaktree_logo.png"
              alt=""
              className="wp-image-11633"
            />
          </figure>

          <h5 className="has-medium-font-size">OakTree</h5>

          <p>
            During anti-poverty week, we partnered with Oaktree to challenge all
            Australians to join the movement against poverty. After kickstarting
            the campaign with a $5,000 donation, the money raised will fund more
            than 300 one-year scholarships for young people in Cambodia.
          </p>

          <p></p>

          <h4 className="has-text-color">Mentorship</h4>

          <p>
            Money is only one way we like to support non-profit organisations.
          </p>

          <p>
            Partnering with The Girls and Boys Brigade, we welcomed two year 10
            students who visited Raiz as their work experience. While here, we
            worked together to understand their interests, building their
            confidence and skills for the future.
          </p>

          <figure className="wp-block-image size-full">
            <img
              width="278"
              height="91"
              src="https://raizinvest.com.au/wp-content/uploads/2022/05/boys_girls.jpg"
              alt=""
              className="wp-image-11630"
            />
          </figure>

          <p></p>

          <h4 className="has-text-color">Environment</h4>

          <p>
            86% of Raiz users surveyed strongly believe in the dangers of
            climate change. We hear your concerns and are equally passionate
            about reducing our impact on the environment.
          </p>

          <h5 className="has-medium-font-size">
            Offsetting our Carbon Footprint since inception
          </h5>

          <p>
            A sustainable future is just as important as growing your financing
            wellbeing. That’s why Raiz as a company has been offsetting our
            estimated carbon footprint since inception. We believe more
            companies should do the same to support a better future for the
            environment together.
          </p>

          <figure className="wp-block-image size-full">
            <img
              loading="lazy"
              width="128"
              height="128"
              src="https://raizinvest.com.au/wp-content/uploads/2022/05/carbon_offset.png"
              alt=""
              className="wp-image-11668"
            />
          </figure>

          <h5 className="has-medium-font-size">Plant a Tree Program</h5>

          <p>
            We have currently planted over 9,799 trees on our users’ behalf. As
            we continue to grow our Raiz community, we hope to provide more
            opportunities to grow this program.
          </p>
        </div>
      </SiteContainer>
    </main>
  );
}
