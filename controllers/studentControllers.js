exports.index = (req, res) => {
    res.json({ message: "Listing all students." });
};

exports.show = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Showing student with ID ${id}` });
};

exports.store = (req, res) => {
    const { name, city } = req.body;
    res.json({ message: "Student created successfully!", data: { name, city } });
};
exports.delete = (req, res) => {
    const id = req.params.id;
    res.json({ message: `Deleted student with ID ${id}` });
};

// Optional update method
// exports.update = (req, res) => {
//     const id = req.params.id;
//     const { name } = req.body;
//     res.json({ message: `Updated student ${id}`, data: { name } });
// };