export interface IDeployEnvironment {
  host: string;
  port: number
  localRoot: string;
  remoteRoot: string;
  user: string;
  password: string;
  include: string[];
  exclude: string[];
}
