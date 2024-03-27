"use client";
import Link from "next/link";
import React from "react";
import CourseData from "../data/music_course.json";
import { HoverEffect } from "./ui/card-hover-effect";

interface Courses {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  link: string;
}

const FeaturedSection = () => {
  const featuredCourses = CourseData.courses.filter(
    (course: Courses) => course.isFeatured
  );
  return (
    <div className="py-12">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="mx-auto px-10">
        <HoverEffect items={featuredCourses} />
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          href={"/courses"}
          className="bg-white py-3 px-4 rounded border transition duration-200 hover:bg-gray-100 border-neutral-600 text-neutral-700"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
