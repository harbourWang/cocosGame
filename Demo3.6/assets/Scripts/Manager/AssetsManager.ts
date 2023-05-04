import { Asset, Component, resources, _decorator } from "cc";

const { ccclass, property } = _decorator;

@ccclass
export default class AssetsManager extends Component {
    // private static instance: AssetsManager;

    // static getInstance() {
    //     if (!this.instance) {
    //         this.instance = new AssetsManager();
    //     }
    //     return this.instance;
    // }

    static async getResData<T>(path: string, type: typeof Asset): Promise<T> {
        return new Promise<T>((resolve) => {
            resources.load(path, type, (err, data) => {
                resolve(<any>data);
            })
        });
    }

    static async getResDirData<T>(path: string, type: typeof Asset): Promise<T> {
        return new Promise<T>((resolve) => {
            resources.loadDir(path, type, null, (error: Error, assets: Asset[]) => {
                resolve(<any>{ error: error, assets: assets });
            })
        });
    }

    // static async getURLData<T>(path: string) {
    //     return new Promise<T>((resolve) => {
    //         loadRemote(path, (err, asset: T) => {
    //             resolve(asset);
    //         })
    //     });
    // }


    /////////////////////////////////////////////////////////////
    //关于bundle的加载

}
