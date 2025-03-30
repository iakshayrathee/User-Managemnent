const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const allUsers = [
      {
        id: 1,
        name: "Michael Holz",
        dateCreated: "04/10/2013",
        role: "Admin",
        status: "Active",
      },
      {
        id: 2,
        name: "Paula Wilson",
        dateCreated: "05/08/2014",
        role: "Publisher",
        status: "Active",
      },
      {
        id: 3,
        name: "Antonio Moreno",
        dateCreated: "11/05/2015",
        role: "Publisher",
        status: "Suspended",
      },
      {
        id: 4,
        name: "Mary Saveley",
        dateCreated: "06/09/2016",
        role: "Reviewer",
        status: "Active",
      },
      {
        id: 5,
        name: "Martin Sommer",
        dateCreated: "12/08/2017",
        role: "Moderator",
        status: "Inactive",
      },
      {
        id: 6,
        name: "John Smith",
        dateCreated: "03/15/2018",
        role: "Publisher",
        status: "Active",
      },
      {
        id: 7,
        name: "Emma Davis",
        dateCreated: "07/22/2018",
        role: "Reviewer",
        status: "Suspended",
      },
      {
        id: 8,
        name: "James Wilson",
        dateCreated: "01/30/2019",
        role: "Moderator",
        status: "Active",
      },
      {
        id: 9,
        name: "Sarah Brown",
        dateCreated: "09/12/2019",
        role: "Publisher",
        status: "Inactive",
      },
      {
        id: 10,
        name: "David Lee",
        dateCreated: "04/05/2020",
        role: "Reviewer",
        status: "Active",
      },
      {
        id: 11,
        name: "Lisa Anderson",
        dateCreated: "11/18/2020",
        role: "Publisher",
        status: "Active",
      },
      {
        id: 12,
        name: "Robert Taylor",
        dateCreated: "06/25/2021",
        role: "Moderator",
        status: "Suspended",
      },
      {
        id: 13,
        name: "Jennifer White",
        dateCreated: "02/08/2022",
        role: "Reviewer",
        status: "Active",
      },
      {
        id: 14,
        name: "William Clark",
        dateCreated: "08/14/2022",
        role: "Publisher",
        status: "Inactive",
      },
      {
        id: 15,
        name: "Elizabeth Hall",
        dateCreated: "03/27/2023",
        role: "Moderator",
        status: "Active",
      },
    ];

    const paginatedUsers = allUsers.slice(skip, skip + limit);
    const total = allUsers.length;

    res.json({
      users: paginatedUsers,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
