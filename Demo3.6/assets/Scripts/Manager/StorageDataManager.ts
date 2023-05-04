import { sys } from "cc";

export class StorageDataManager {
    private static instance: StorageDataManager;

    private gameKey: string = "xiaoxiaole";
    private gameData: any;

    static getInstance() {
        if (!this.instance) {
            this.instance = new StorageDataManager();
        }
        return this.instance;
    }

    public getGameData() {
        if (!this.gameData) {
            this.gameData = this.getData(this.gameKey);
            if (!this.gameData) {
                this.gameData = {};
            }
        }

        return this.gameData;
    }

    public setGameData(data: any) {
        this.gameData = data;
        this.setData(this.gameKey, this.gameData);
    }

    public updateKey(key: string, data: any) {
        this.gameData[key] = data;
        this.setData(this.gameKey, this.gameData);
    }

    private setData(key: string, data: any) {
        sys.localStorage.setItem(key, JSON.stringify(data));
    }

    private getData(key: string): any {
        return JSON.parse(sys.localStorage.getItem(key));
    }

}
// let StorageDataManager: StorageData = new StorageData();
// export default StorageDataManager;

