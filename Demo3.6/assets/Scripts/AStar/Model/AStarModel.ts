import { math } from "cc";
import { Height, TitleType, Width } from "../AStarPanel";

export interface TitlePos { x: number, y: number };

export class Title {
    private _x: number = 0;
    private _y: number = 0;

    // F值  这个叫做和值，指的是走到终点消耗的代价值 F = G + H, 所以要知道F值，需要计算G和H的值
    // G值  从起点到该点消耗的代价
    // H值 从该点到终点的预估代价，为何G值不是预估，这里是预估呢？因为G值是从起点到该点，是一段已经走过的路程，代价是准确可知的，H值是到终点，但是这段路还没有走，所以是一段预估的值。
    private _f: number = 0;
    private _g: number = 0;
    private _h: number = 0;
    private _parent: Title = null;

    // constructor() {
    // }

    public init(x, y, g, h) {
        this._x = x;
        this._y = y;
        this._g = g;
        this._h = h;
        this._f = g + h;
    }

    // public copy() {

    // }

    public get x() { return this._x };
    public get y() { return this._y };
    public get g() { return this._g };
    public get f() { return this._f };

    public set parent(parent: Title) { this._parent = parent };
    public get parent() { return this._parent };

}

export class AStarModel {
    private titles: TitleType[][] = [];

    private openList: Title[] = [];
    private closeList: Title[] = [];
    private begin: TitlePos = null;
    private end: TitlePos = null;

    public findPath(begin: TitlePos, end: TitlePos, titles: TitleType[][]) {
        this.begin = begin;
        this.end = end;
        this.titles = titles;

        let title = new Title();
        let g = 0;
        let h = this.getDistance(begin);
        title.init(begin.x, begin.y, g, h);
        this.openList.push(title);

        while (this.openList.length > 0) {
            let idx: number = this.getMinF();
            let title = this.openList.splice(idx, 1)[0];

            if (title && title.x == end.x && title.y == end.y) {
                console.log("找到路径");
                let arr: Title[] = [];

                while (title.parent) {
                    arr.push(title);
                    title = title.parent;
                }
                return arr;
                break;
            } else {
                this.closeList.push(title);
                this.addAroundTitle(title);
            }
        }
        console.log("未找到路径");
        return [];
    }

    /** 添加周围的格子 */
    private addAroundTitle(title: Title) {
        const addTitle = (pos: TitlePos) => {
            if (AStarModel.isValid(pos) && this.titles[pos.x][pos.y] == TitleType.None
                && !this.checkList(pos, this.openList)
                && !this.checkList(pos, this.closeList)) {

                let newTitle = new Title();
                let g = title.g + 1;
                let h = this.getDistance(pos);
                newTitle.init(pos.x, pos.y, g, h);
                newTitle.parent = title;
                this.openList.push(newTitle);
            }
        };

        let pos: TitlePos = { x: title.x - 1, y: title.y };
        addTitle(pos);

        pos = { x: title.x + 1, y: title.y };
        addTitle(pos);

        pos = { x: title.x, y: title.y - 1 };
        addTitle(pos);

        pos = { x: title.x, y: title.y + 1 };
        addTitle(pos);

    }

    //是否在close / open列表中
    private checkList(pos: TitlePos, list: Title[]): boolean {
        for (let i = 0; i < list.length; i++) {
            if (list[i].x == pos.x && list[i].y == pos.y) {
                return true;
            }
        }
        return false;
    }

    //获取open列表中的最短点
    private getMinF(): number {
        let min: number = this.openList[0].f;
        let idx: number = 0;
        for (let i = 1; i < this.openList.length; i++) {
            if (this.openList[i].f < min) {
                min = this.openList[i].f;
                idx = i;
            }
        }
        return idx;
    }


    /** 获取H值  */
    private getDistance(pos: TitlePos) {
        return Math.abs(pos.x - this.end.x) + Math.abs(pos.y - this.end.y);
    }

    public static isValid(pos: TitlePos): boolean {
        return pos.x >= 0 && pos.y >= 0 && pos.x < Width && pos.y < Height;
    }
}