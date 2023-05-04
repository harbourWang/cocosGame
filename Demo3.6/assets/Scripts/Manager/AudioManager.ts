import { AudioClip, AudioSource, Game, game } from "cc";
import AssetsManager from "./AssetsManager";

export default class AudioManager {
    private static instance: AudioManager;
    musicMap: { [name: string]: AudioClip } = {};
    musicSetting: boolean = true;
    effectSetting: boolean = true;
    _playing: boolean = false;      //背景音乐播放中

    static getInstance() {
        if (!this.instance) {
            this.instance = new AudioManager();
        }
        return this.instance;
    }

    async loadMusic() {
        let res = await AssetsManager.getResDirData<{ error: Error, assets: any[] }>("music", AudioClip);
        // for (let i = 0; i < res.assets.length; i++) {
        //     let data = res.assets[i];
        //     let name = data.name;
        //     if (!this._isExist(name)) {
        //         this.musicMap[name] = data;
        //     }
        // }
        // this._gameChangeState();
    }

//     /**
//      * 设置音效
//      * @param music 
//      */
//     setSoundEffect(music: number) {
//         this.musicSetting = !!music;
//         AudioSource.setMusicVolume(music);
//     }

//     /**
//    * 设置背景音乐
//    * @param music 
//    */
//     setSound(music: number) {
//         this.effectSetting = !!music;
//         AudioSource.setEffectsVolume(music);
//         AudioSource.
//     }

//     playBgMusic(name: string) {
//         if (!this.musicSetting) return;
//         if (this._isExist(name)) {
//             AudioSource.playMusic(this.musicMap[name], true);
//             this._playing = true;
//         }
//     }

//     playEffect(name: string) {
//         if (!this.effectSetting) return;
//         if (this._isExist(name)) AudioSource.playEffect(this.musicMap[name], false);
//     }

//     stopBgMusic() {
//         AudioSource.pauseMusic();
//         this._playing = false;
//     }

//     clickWithAudio() {
//         if (!this.effectSetting) return;
//         this.playEffect("click");
//     }

//     private _gameChangeState() {
//         game.on(Game.EVENT_HIDE, () => {
//             AudioSource.pauseMusic();
//         })

//         game.on(Game.EVENT_SHOW, () => {
//             if (this._playing) {
//                 AudioSource.resumeMusic();
//             }
//         })
//     }

//     _isExist(name: string) {
//         return !!this.musicMap[name];
//     }

}
