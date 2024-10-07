const { PrismaClient} = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
      await database.category.createMany({
        data: [
            { name: "Information Technology and Software" },
            { name: "Business and Management" },
            { name: "Creative Arts and Design" },
            { name: "Health and Wellness" },
            { name: "Language and Communication" },
            { name: "Science and Engineering" },
            { name: "Mathematic" },
            { name: "Social Sciences" },
            { name: "Education and Teaching" },
            { name: "Personal Development" },
            { name: "Law and Legal Studies" },
            { name: "Finance and Economics" },
            { name: "Architecture" },
            { name: "Marketing and Digital Marketing" },
            { name: "Agriculture and Environmental Studies" },
            { name: "Hospitality and Tourism" },
            { name: "Media and Journalism" },
        ]
      });
       console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
      await database.$disconnect();
    }
}

main();