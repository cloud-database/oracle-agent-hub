/**
 * Oracle database abstraction layer.
 * V1: All methods return null/empty — no live DB connection required.
 * Future: Replace stubs with oracledb driver calls using env vars.
 */

export interface DBConfig {
  user: string;
  password: string;
  connectionString: string;
}

function getConfig(): DBConfig {
  return {
    user: process.env.ORACLE_DB_USER ?? "",
    password: process.env.ORACLE_DB_PASSWORD ?? "",
    connectionString: `${process.env.ORACLE_DB_HOST ?? "localhost"}:${process.env.ORACLE_DB_PORT ?? "1521"}/${process.env.ORACLE_DB_SERVICE ?? "freepdb1"}`,
  };
}

export async function isDBAvailable(): Promise<boolean> {
  // Future: attempt a lightweight ping to Oracle
  return false;
}

export async function executeQuery<T = unknown>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _sql: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _binds?: unknown[]
): Promise<T[]> {
  // Future: use oracledb to execute against Oracle AI Database
  void getConfig();
  return [];
}
