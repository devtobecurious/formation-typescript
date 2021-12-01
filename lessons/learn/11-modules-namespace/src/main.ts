import Wookie from './wookie';
import { Guard, ChildGuard } from './guard';
import * as GuardL from './guard';


const wookie = new Wookie();
wookie.grrr();

type Guards = [Guard, ChildGuard];
