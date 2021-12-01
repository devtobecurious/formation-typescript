class Sprite {
    name = "";
    x = 0;
    y = 0;
   
    constructor(name: string) {
      this.name = name;
    }
  }

type Ctor = new (...args: any[]) => {};


// Mixin
function Scale<TBase extends Ctor>(Base: TBase) {
    return class Scaling extends Base {
        private _scale = 1;

        set scale(value: number) {
            this._scale = value;
        }
        get scale(): number {
            return this._scale;
        }
    }
}

const NewSprite = Scale(Sprite);
const item = new NewSprite('test');
item.scale = 0.8;

