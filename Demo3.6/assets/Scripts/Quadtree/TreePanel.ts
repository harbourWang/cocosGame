import { _decorator, Component, Node, UITransform, view, math } from 'cc';
import * as Quadtree from './lib/quadtree.js';
const { ccclass, property } = _decorator;

@ccclass('TreePanel')
export class TreePanel extends Component {

    private _tree: Quadtree = null;

    onEnable() {
        let size: math.Size = view.getVisibleSize();

        this._tree = new Quadtree({
            x: -size.width / 2,
            y: -size.height / 2,
            width: size.width / 2,
            height: size.height / 2
        });

        // 3.插入元素
        // 参数为元素的左下角坐标及其宽高
        this._tree.insert({
            x: 200,
            y: 150,
            width: 20,
            height: 20
        });

    }

    onDisable() {

    }
}


