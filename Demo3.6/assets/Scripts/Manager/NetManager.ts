import { loader, sys } from "cc";
import EventManager from "./EventManager";

export const NetUrl = "https://mem.dazhousoft.com/api/Game/";

export default class NetManager {
    private static instance: NetManager = null;

    static getInstance() {
        if (!this.instance) {
            this.instance = new NetManager();
        }
        return this.instance;
    }

    static getRequest(url: string, callback: (responseObj: any) => void) {
        NetManager.requestHttp("GET", url, null, callback);
    }

    static postRequest(url: string, params: Object, callback: (responseObj: any) => void) {
        NetManager.requestHttp("POST", url, params, callback);
    }

    static postRequestByJson(url: string, params: Object, callback: (responseObj: any) => void) {
        NetManager.requestHttpByJson("POST", url, params, callback);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    private static requestHttp(type: string, url: string, params: object, callback: (responseObj: any) => void) {
        var bFinish = false;
        try {
            var xhr = loader.getXMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    console.log(url + xhr.response);
                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (bFinish) return;
                        bFinish = true;
                        callback(JSON.parse(xhr.response));
                    } else if (xhr.status == 401) {

                    } else {
                        if (bFinish) return;
                        bFinish = true;
                        callback(null);
                    }
                }
            };

            xhr.onerror = function () {
                if (bFinish) return;
                bFinish = true;
                callback(null);
            }

            xhr.open(type, url, true);
            if (sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.timeout = 5000;
            params ? xhr.send(NetManager.encodeSearchParams(params)) : xhr.send();
        } catch (e) {
            if (bFinish) return;
            bFinish = true;
            callback(null);
        }
    }

    private static requestHttpByJson(type: string, url: string, data: any, callback: (responseObj: any) => void) {
        var bFinish = false;
        try {
            var xhr = loader.getXMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        if (bFinish) return;
                        bFinish = true;
                        callback(JSON.parse(xhr.response));
                    } else if (xhr.status == 401) {

                    } else {
                        if (bFinish) return;
                        bFinish = true;
                        callback(null);
                    }
                }
            };

            xhr.onerror = function () {
                if (bFinish) return;
                bFinish = true;
                callback(null);
            }

            xhr.open(type, url, true);

            xhr.setRequestHeader("Content-Type", "text/plain");

            xhr.timeout = 5000;

            data ? xhr.send(JSON.stringify(data)) : xhr.send();

        } catch (e) {
            if (bFinish) return;
            bFinish = true;
            callback(null);
        }
    }

    ////////////////////////////////////////////////////////////
    protected static encodeSearchParams(obj) {
        const params = [];
        Object.keys(obj).forEach((key) => {
            let value = obj[key];
            // 如果值为undefined置空
            if (typeof value === 'undefined') {
                value = '';
            }
            //使用encodeURIComponent进行编码
            if (Array.isArray(obj[key])) {//类型为数组的时候
                value.forEach(item => {
                    params.push([key, encodeURIComponent(item)].join('='));
                });
            }

            if (Object.prototype.toString.call(obj[key]) === '[object Object]') {//类型为对象的时候
                Object.keys(obj[key]).forEach(item => {
                    params.push([item, encodeURIComponent(obj[key][item])].join('='));
                })
            }
            else {
                params.push([key, encodeURIComponent(value)].join('='));
            }
        });
        return params.join('&');
    }

}
