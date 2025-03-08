import ArticleCard from "@/app/components/ArticleCard";
import HomeBanner from "@/app/components/HomeBanner";
import React from "react";

import img from "@/public/Images/pic.png";
import img1 from "@/public/Images/img1.png";
import img2 from "@/public/Images/img2.png";
import WhereWeCanHelpSection from "@/app/components/WhereWeCanHelpSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import AssuranceSection from "@/app/components/AssuranceSection";
import NewsCarousel from "@/app/components/NewsCarousel";
import CaseStudies from "@/app/components/CaseStudies";

export default function UserHome() {
  return (
    <div className="pt-36 md:pt-40 bg-lightWhite ">
      <div>
        <HomeBanner></HomeBanner>
        {/* artice cards  */}
        <div className="md:flex justify-between gap-4 container mx-auto p-3 py-16 space-y-6 md:space-y-0">
          <ArticleCard
            type="Article"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates...The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img}
            href="/"
            color="text-black"
          />
          <ArticleCard
            type="Webinar"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img1}
            href="/"
            color="text-black"
          />
          <ArticleCard
            type="Training"
            title="Understand the upcoming AS 9100 rule changes"
            description="The AS 9100 rules are due to be amended, these changes introduce significant updates..."
            linkText="Read full article"
            imgSrc={img2}
            href="/"
            color="text-black"
          />
        </div>
        {/* where we can help  */}
        <WhereWeCanHelpSection></WhereWeCanHelpSection>
        {/* why chose section  */}
        <WhyChooseSection></WhyChooseSection>
        {/* //////// */}
        <AssuranceSection></AssuranceSection>
        {/* bg changer  */}
        <CaseStudies></CaseStudies>
        {/* slider  */}
        <NewsCarousel></NewsCarousel>
      </div>
    </div>
  );
}
