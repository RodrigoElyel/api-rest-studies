import { consult } from "../database/connection.js";
class TeamRepository {
  // CRUD
  create(data) {
    const sql = `INSERT INTO teams SET ?`;
    return consult(sql, [data], "Cannot create team", "Team created successfully");
  }
  findAll() {
    const sql = "SELECT * FROM teams;";
    return consult(sql, "", "Teams not found", "Teams found successfully");
  }
  findById(id) {
    const sql = `SELECT * FROM teams WHERE id=?;`;
    return consult(sql, id, "Team not found", "Team found successfully");
  }
  update(data, id) {
    const sql = `UPDATE teams SET ? WHERE id=?`;
    return consult(sql, [data, id], "Cannot update team, team not found", "Team updated successfully");
  }
  delete(id) {
    const sql = `DELETE FROM teams WHERE id=?;`;
    return consult( sql,  id,  "Cannot delete team, team not found",  "Team deleted successfully");
  }
}

export default new TeamRepository();
