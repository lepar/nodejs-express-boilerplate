import { Request, Response } from "express";

export class OperationsManager {
  public async test(req: Request, res: Response) {

    const { test } = req.body;

    try {
      res.send(test)

    } catch (error) {
      res.send(error)
    }
  }
}

export default OperationsManager;
