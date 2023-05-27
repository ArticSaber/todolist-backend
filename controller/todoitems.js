const getListItems = (req, res) => {
  res.send("todo items list");
};

const createTodo = (req, res) => {
  res.send(req.body);
};

const getId = (req, res) => {
  const id = req.params.id;
  res.send(`got id: ${id}`);
};

const deleteId = (req, res) => {
    const id = req.params.id;
    res.send(`deleted id: ${id}`);
};

const updateId = (req, res) => {
    const id = req.params.id;
    res.send(`updated id: ${id} with data: ${req.body.name}`);
};

export { getListItems, createTodo, getId, deleteId, updateId };
