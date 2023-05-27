const getlistitems = async (req, res) => {
  res.send("todo items list");
};

const createtodo = async (req, res) => {
  res.send(req.body);
};

export { getlistitems, createtodo };
