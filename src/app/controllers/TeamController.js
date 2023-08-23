import TeamRepository from "../repositories/TeamRepository.js";

class TeamController {
  async index(req, res) {
    const response = await TeamRepository.findAll();
    res.json(response);
  }
  async show(req, res) {
    const id = req.params.id;
    const response = await TeamRepository.findById(id);
    res.json(response);
  }
  async store(req, res) {
    const data = req.body;
    const response = await TeamRepository.create(data);
    res.json(response);
  }
  async update(req, res) {
    const id = req.params.id;
    const data = req.body;
    const response = await TeamRepository.update(data, id);
    res.json(response);
  }
  async delete(req, res) {
    const id = req.params.id;
    const response = await TeamRepository.delete(id);
    res.json(response);
  }

  init(req, res) {
    res.json({
      message: "Hello World",
      routes: {
        "/teams": "GET, POST",
        "/teams/:id": "GET, PUT, DELETE",
        schema: {
          id: "integer",
          team: "string",
          group: "string",
        },
      },
    });
  }
}

export default new TeamController();
