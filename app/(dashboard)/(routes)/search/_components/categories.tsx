"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcBriefcase,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
  FcGraduationCap,
  FcTreeStructure,
  FcBullish,
  FcBusinessContact,
  FcGlobe,
  FcCalculator,
  FcIdea,
  FcHome,
  FcPortraitMode
  
} from "react-icons/fc";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Agriculture and Environmental Studies": FcTreeStructure,
  "Hospitality and Tourism": FcGlobe,
  "Business and Management": FcBusinessContact,
  "Marketing and Digital Marketing": FcBullish,
  "Education and Teaching": FcGraduationCap,
  "Law and Legal Studies": FcBriefcase,
  "Media and Journalism": FcOldTimeCamera,
  "Health and Wellness": FcSportsMode,
  "Finance and Economics": FcSalesPerformance,
  "Information Technology and Software": FcMultipleDevices,
  "Creative Arts and Design": FcFilmReel,
  "Science and Engineering": FcEngineering,
  "Mathematic": FcCalculator,
  "Social Sciences": FcPortraitMode,
  "Personal Development": FcIdea,
  "Architecture": FcHome
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}