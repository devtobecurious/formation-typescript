import Wookie from './wookie';
import { Guard, ChildGuard } from './guard';
import * as GuardL from './guard';

import { Weapons } from './with-namespace';
const weapon = new Weapons.SaberWeapon();

const wookie = new Wookie();
wookie.grrr();

type Guards = [Guard, ChildGuard];

