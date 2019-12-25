const users = require("../data/index");
const sampleUser = require("../data/sampleUser");
const listUsers = (req, res) => {
  res.json(users);
};
const showUser = (req, res) => {
  const id = req.params.id;
  const match = users.find(users => users.id === Number(id));

  if (match) {
    res.json(match);
  } else {
    res.status(404).json({ msg: `No member found with ID ${id}` });
  }
};

const createUser = (req, res) => {
  let id = users.length + 1;
  const sampleUserWithAutoIncrementID = {
    id: id,
    ...sampleUser
  };
  users.push(sampleUserWithAutoIncrementID);
};

const updateUser = (req, res) => {
  let id = req.params.id;
  let match = users.find(users => users.id === Number(id));

  if (match) {
    const updateUser = req.body;
    users.forEach(users => {
      if (users.id === Number(id)) {
        res.json({ msg: "Member was updated!", users });
      }
    });
  } else {
    res.status(400).json({ msg: `No member found with ID ${id}` });
  }
};

const deleteUser = (req, res) => {
  let id = req.params.id;

  let match = users.find(users => users.id === Number(id));

  if (match) {
    res.json({
      msg: "Member has been deleted!",
      users: users.filter(users => users.id != Number(id))
    });
  } else {
    res.status(400).json({ msg: `No member found with ID ${id}` });
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };
