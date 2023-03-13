import { _decorator, Component, Node, UITransform, view, math, Prefab, instantiate, Label } from 'cc';
import { Quadtree } from './lib/QuadTree';
import { Prop } from './Prop';

const { ccclass, property } = _decorator;

@ccclass('TreePanel')
export class TreePanel extends Component {

    @property(Prefab)
    prop: Prefab = null;

    @property(Node)
    content: Node = null;

    @property(Label)
    tip: Label = null;

    private _checkModel: boolean = true;

    private _tree: Quadtree = null;
    private nodes: Array<Node> = [];

    onEnable() {
        let size: math.Size = view.getVisibleSize();
        this._tree = new Quadtree({
            x: 0,
            y: 0,
            width: size.width,
            height: size.height
        });

        for (let i = 0; i < 300; i++) {
            let newNode = instantiate(this.prop);
            this.content.addChild(newNode);
            this.nodes.push(newNode);
            this._tree.insert(newNode);
        }

        this.tip.string = this._checkModel ? "四叉树开启" : "四叉树关闭";
    }

    onDisable() {
        this._tree.clear();
        this._tree = null;
    }

    private onCheckModel() {
        this._checkModel = !this._checkModel;
        this.tip.string = this._checkModel ? "四叉树开启" : "四叉树关闭";
    }

    update(dt: number) {
        if (this._checkModel) {
            this.quadTreeCheck();
        } else {
            this.simpleCheck();
        }
    }

    private simpleCheck() {
        for (let i in this.nodes) {
            this.nodes[i].getComponent(Prop).setIsCollision(false);
        }
        for (let i in this.nodes) {
            for (let j in this.nodes) {
                if (this.nodes[i].uuid == this.nodes[j].uuid) {
                    continue;
                }
                let curScript: Prop = this.nodes[i].getComponent(Prop);
                let itemScript: Prop = this.nodes[j].getComponent(Prop);
                if (curScript.isCollision && itemScript.isCollision) {
                    continue;
                }
                let isCollisionBox: boolean = this.nodes[i].getComponent(UITransform).getBoundingBoxToWorld().intersects(this.nodes[j].getComponent(UITransform).getBoundingBoxToWorld())
                if (!curScript.isCollision) {
                    curScript.setIsCollision(isCollisionBox);
                }
                if (!itemScript.isCollision) {
                    itemScript.setIsCollision(isCollisionBox);
                }

            }
        }
    }

    /**
     * 四叉树碰撞检测
     */
    private quadTreeCheck() {
        for (let node of this.nodes) {
            node.getComponent(Prop).setIsCollision(false);
            this._tree.insert(node);
        }
        for (let i = 0; i < this.nodes.length; i++) {
            let node = this.nodes[i]
            let targetNodes = this._tree.retrieve(node)
            for (let j = 0; j < targetNodes.length; j++) {
                let targetNode = targetNodes[j]
                if (targetNode === node) continue
                let isCollision: boolean = this.isCollision(targetNode, node)
                if (isCollision) {
                    node.getComponent(Prop).setIsCollision(isCollision)
                    targetNode.getComponent(Prop).setIsCollision(isCollision)
                }
            }
        }
        this._tree.clear();
    }

    private isCollision(node1: Node, node2: Node): boolean {
        const nodePos1 = node1.getPosition();
        const nodePos2 = node2.getPosition();
        const node1Left = nodePos1.x;
        const node2Left = nodePos2.x;
        const nodeTrans1 = node1.getComponent(UITransform);
        const nodeTrans2 = node2.getComponent(UITransform);
        const node1Top = nodePos1.y - nodeTrans1.height;
        const node2Top = nodePos2.y - nodeTrans2.height;

        return node1Left < node2Left + nodeTrans2.width &&
            node1Left + nodeTrans1.width > node2Left &&
            node1Top < node2Top + nodeTrans2.height &&
            node1Top + nodeTrans1.height > node2Top
    }
}


