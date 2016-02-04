import {Router} from "express";
import {Response} from "express";
import {Request} from "express";

export var router = Router();

router.get('/', function(req: Request, res: Response) {
  res.json({'message': 'example'});
});