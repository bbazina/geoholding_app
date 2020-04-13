export class EnvVar {
  public static getString(name: string) {
    const value = process.env[name];
    if (!value) {
      console.warn(`Value "${name}" is not defined!`);
      return '';
    }
    return value;
  }
  public static getBoolean(name: string) {
    const value = process.env[name];
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else {
      console.warn(`Value is not defined as boolean! ${name}:${value}`);
      return !!value;
    }
  }
}

export enum ENV {
  PORT = 'PORT',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_NAME = 'DB_NAME',
  DB_HOST = 'DB_HOST',
}
