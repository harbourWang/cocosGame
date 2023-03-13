import { _decorator, Component, Node, Sprite, Color, view, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Prop')
export class Prop extends Component {
    public isCollision: boolean = false;

    start() {
        let size: math.Size = view.getVisibleSize();
        let pos = this.node.getPosition();
        pos.x = (Math.random() - 0.5) * size.width;
        pos.y = (Math.random() - 0.5) * size.height;
        this.node.setPosition(pos);
    }

    update(dt) {
        let speed = 1.5;

        let pos = this.node.getPosition();
        pos.x += (Math.random() - 0.5) * speed;
        pos.y += (Math.random() - 0.5) * speed;
        this.node.setPosition(pos);
    }

    public setIsCollision(isCollision: boolean) {
        this.isCollision = isCollision;
        if (isCollision) {
            this.node.getComponent(Sprite).color = new Color(255, 0, 0);
        } else {
            this.node.getComponent(Sprite).color = new Color(255, 255, 255);
        }
    }
}


