import Banner from "@/app/components/Banner";
import CompanySlider from "@/app/components/CompanySlider";
import ExploreCourses from "@/app/components/ExploreCourses";
import CourseShowContainer from "@/app/components/TrainingContainer";
import { dummyData } from "@/app/data/dummyData";
import { dummyDataUpcoming } from "@/app/data/dummyDataUpcoming";

import React from "react";

export default function page() {
  return (
    <div className="pt-36 md:pt-40 bg-lightWhite">
      <div>
        <Banner></Banner>
        <ExploreCourses></ExploreCourses>
        <CourseShowContainer
          cardToShow={4}
          title={dummyData.title}
          backgroundColor="bg-lightGray "
          cards={dummyDataUpcoming}
        />
        <CourseShowContainer
          cardToShow={8}
          title={dummyData.title}
          backgroundColor="bg-lightWhite "
          cards={dummyData}
        />
        <CourseShowContainer
          cardToShow={4}
          title={dummyData.title}
          backgroundColor="bg-lightGray "
          cards={dummyData}
        />
        <CourseShowContainer
          cardToShow={6}
          title={dummyData.title}
          backgroundColor="bg-lightWhite "
          cards={dummyData}
        />
        <div className="flex flex-col items-center justify-center bg-lightGray ">
          <CompanySlider />
        </div>
      </div>
    </div>
  );
}
