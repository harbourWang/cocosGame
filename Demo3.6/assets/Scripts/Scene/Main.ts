import { Component, director, instantiate, Prefab, UITransform, v3, view, _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass('Main')
export default class Main extends Component {

    @property(Prefab)
    aStarPanel: Prefab = null;

    @property(Prefab)
    treePanel: Prefab = null;

    protected onEnable(): void {
        let node = instantiate(this.treePanel);
        node.parent = this.node;
        node.getComponent(UITransform)?.setContentSize(view.getVisibleSize());
        node.setPosition(v3(0, 0, 0));
    }


    protected onDisable(): void {

    }

}
