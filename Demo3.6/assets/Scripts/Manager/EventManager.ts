import { EventTarget } from 'cc';
export default class EventManager {
    private static instance: EventManager;
    private static EventTarget: EventTarget;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new EventManager();
            this.EventTarget = new EventTarget();
        }
        return this.instance;
    }


    public static emit(msg: string, data: any = null) {
        EventManager.EventTarget.emit(msg, data);
    }

    public static on(msg: string, callback: (data) => void, that) {
        EventManager.EventTarget.on(msg, callback, that);
    }

    public static off(msg: string, callback: (data) => void, that) {
        EventManager.EventTarget.off(msg, callback, that)
    }

}