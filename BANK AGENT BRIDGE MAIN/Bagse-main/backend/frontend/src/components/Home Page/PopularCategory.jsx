import React from "react";

const category = [
  { id: 1, name: "Shri Raj Rural Co-operative Credit Society Ltd.", count: "45 Open Positions" },
  { id: 2, name: " Navnath Rural Co-operative Credit Society Ltd.", count: "50 Open Positions" },
  { id: 3, name: " RajHans Rural Co-operative Credit Society Ltd.", count: "40 Open Positions" },
  { id: 4, name: "Kotak Mahindra Bank", count: "30 Open Positions" },
  { id: 5, name: "IndusInd Bank", count: "35 Open Positions" },
  { id: 6, name: "Yes Bank", count: "22 Open Positions" },
  { id: 7, name: "Federal Bank", count: "18 Open Positions" },
  { id: 8, name: "IDFC FIRST Bank", count: "12 Open Positions" },
  { id: 9, name: "RBL Bank", count: "15 Open Positions" },
  { id: 10, name: "South Indian Bank", count: "9 Open Positions" },
  { id: 11, name: "Bandhan Bank", count: "11 Open Positions" },
  { id: 12, name: "Dhanlaxmi Bank", count: "7 Open Positions" },
];

const PopularCategory = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-12 px-6 mb-20">
      <h2 className="md:text-3xl text-2xl font-semibold mb-5">Most Popular Vacancies</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            category.map(({name, id, count}) => (
                <div key={id}>
                    <p className="text-lg text-[#18191C]">{name}</p>
                    <p className="text-sm text-[#767F8C]">{count}</p>
                </div>
            ))
        }
      </div>

    </div>
  );
};

export default PopularCategory;
