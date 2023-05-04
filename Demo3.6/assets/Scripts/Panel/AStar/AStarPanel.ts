import { Color, Node, Component, EventTouch, Input, input, NodePool, Sprite, SpriteFrame, UITransform, v3, Vec2, Vec3, _decorator, v2, Layers, tween, Tween } from "cc";
import { AStarModel, Title, TitlePos } from "./Model/AStarModel";
const { ccclass, property } = _decorator;

export let Height = 30;
export let Width = 20;

export let TitleSize = 30;

export enum TitleType {
    None = 0,
    Block = 1,
}

@ccclass('AStarPanel')
export default class AStarPanel extends Component {
    @property(SpriteFrame)
    frame: SpriteFrame = null;

    @property(Node)
    content: Node = null;

    @property(Node)
    role: Node = null;

    @property(Node)
    exit: Node = null;

    private _nodes: Node[][] = [];
    private _titles: TitleType[][] = [];
    private _nodePool: NodePool;
    private _begin: TitlePos = null;
    private _exit: TitlePos = null;

    protected onEnable(): void {
        input.on(Input.EventType.TOUCH_START, this.touchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
        input.on(Input.EventType.TOUCH_CANCEL, this.touchEnd, this);

        this._nodePool = new NodePool();
        for (let i = 0; i < Width; i++) {
            this._titles[i] = [];
            this._nodes[i] = [];
            for (let j = 0; j < Height; j++) {
                this._titles[i][j] = TitleType.None;
            }
        }

        this.initAllTitle();

        this.onRandomRole();
        this.content.getComponent(UITransform).setContentSize(Width * TitleSize, Height * TitleSize);
    }

    protected onDisable(): void {
        input.off(Input.EventType.TOUCH_START, this.touchStart, this);
        input.off(Input.EventType.TOUCH_MOVE, this.touchMove, this);
        input.off(Input.EventType.TOUCH_END, this.touchEnd, this);
        input.off(Input.EventType.TOUCH_CANCEL, this.touchEnd, this);

        this._nodePool.clear();
    }

    /** 初始化地图块 */
    private initAllTitle() {
        for (let i = 0; i < Width; i++) {
            for (let j = 0; j < Height; j++) {
                if (this._titles[i][j] == TitleType.Block && !this._nodes[i][j]) {
                    let node = this.createTitle();
                    this._nodes[i][j] = node;
                    node.setPosition(this.setPos(i, j));
                }
            }
        }
    }

    /** 显示单独地图块 */
    private showTitle(i, j) {
        let node = this.createTitle();
        this._nodes[i][j] = node;
        this._titles[i][j] = TitleType.Block;
        node.setPosition(this.setPos(i, j));
    }

    /** 隐藏单独地图块 */
    private hideTitle(i, j) {
        let node = this._nodes[i][j];
        if (node) {
            node.removeFromParent();
            this._nodePool.put(node);
            this._nodes[i][j] = null;
            this._titles[i][j] = TitleType.None;
        }
    }

    private onClearTitles() {
        Tween.stopAllByTarget(this.role);
        for (let i = 0; i < Width; i++) {
            for (let j = 0; j < Height; j++) {
                if (this._titles[i][j] == TitleType.Block) {
                    this.hideTitle(i, j);
                }
            }
        }

    }

    private async onFindPath(e: EventTouch) {
        Tween.stopAllByTarget(this.role);
        let aStarModel = new AStarModel();
        let path: Title[] = aStarModel.findPath(this._begin, this._exit, this._titles);

        while (path.length) {
            let path1 = path.pop();
            let pos = this.setPos(path1.x, path1.y);
            await this.run(pos);
        }
    }

    private onRandomRole() {
        this.onClearTitles();

        let x = Math.floor(Math.random() * Width);
        let y = Math.floor(Math.random() * Height);
        this._begin = { x, y };

        x = Math.floor(Math.random() * Width);
        y = Math.floor(Math.random() * Height);
        this._exit = { x, y };

        this.role.setPosition(this.setPos(this._begin.x, this._begin.y));
        this.exit.setPosition(this.setPos(this._exit.x, this._exit.y));
    }

    private run(pos: Vec3) {
        return new Promise((resolve, reject) => {
            tween(this.role)
                .to(0.2, { position: pos })
                .call(resolve)
                .start();
        })
    }

    private touchStart(e: EventTouch) {
        this.touchMove(e);
    }

    private touchMove(e: EventTouch) {
        let v22: Vec2 = e.getUILocation();
        const v33 = this.content.getComponent(UITransform).convertToNodeSpaceAR(v3(v22.x, v22.y, 0));
        let pos = this.getPos(v2(v33.x, v33.y));
        if (AStarModel.isValid(pos)) {
            if (this._titles[pos.x][pos.y] == TitleType.None) {
                this.showTitle(pos.x, pos.y);
            }
            // else {
            //     this.hideTitle(pos.x, pos.y);
            // }
        }
    }

    private touchEnd(e: EventTouch) {
    }

    private getPos(v2: Vec2): TitlePos {
        let x: number = Math.floor(v2.x / TitleSize);
        x += Width / 2;

        let y: number = Math.floor(v2.y / TitleSize);
        y += Height / 2;
        return { x, y };
    }

    private setPos(x: number, y: number): Vec3 {
        let posX: number = (x - Width / 2 + 0.5) * TitleSize;
        let posY: number = (y - Height / 2 + 0.5) * TitleSize;
        return v3(posX, posY, 0);
    }

    private createTitle(): Node {
        let enemy: Node = null;
        if (this._nodePool.size() > 0) {
            enemy = this._nodePool.get();
        } else {
            enemy = new Node("title");
            enemy.layer = Layers.Enum.UI_2D;

            const sprite: Sprite = enemy.addComponent(Sprite);
            sprite.spriteFrame = this.frame;
            sprite.sizeMode = Sprite.SizeMode.CUSTOM;

            sprite.color = new Color().fromHEX("#00FFB2");

            const uiTransform: UITransform = enemy.getComponent(UITransform);
            uiTransform.width = uiTransform.height = TitleSize;
        }
        enemy.parent = this.content;
        return enemy;
    }

}