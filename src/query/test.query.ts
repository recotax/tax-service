export const QUERY = {
  SELECT_TESTS: "SELECT * FROM tests ORDER BY created_at DESC LIMIT 50",
  SELECT_TEST: "SELECT * FROM tests WHERE id = ?",
  CREATE_TEST: "INSERT INTO tests (column1, column2) VALUES(?, ?)",
  UPDATE_TEST: "UPDATE tests SET column1 = ?, column2 = ? WHERE id = ?",
  DELETE_TEST: "DELETE FROM tests WHERE id = ?",
};
