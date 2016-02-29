﻿module SurveyEditor {
    export enum ObjType { Unknown, Survey, Page, Question }
    export class SurveyHelper {
        public static getNewName(objs: Array<any>, baseName: string): string {
            var hash = {};
            for (var i = 0; i < objs.length; i++) {
                hash[objs[i].name] = true;
            }
            var num = 1;
            while (true) {
                if (!hash[baseName + num.toString()]) break;
                num++;
            }
            return baseName + num.toString();
        }
        public static getObjectType(obj: any): ObjType {
            if (!obj || !obj["getType"]) return ObjType.Unknown;
            if (obj.getType() == "page") return ObjType.Page;
            if (obj.getType() == "survey") return ObjType.Survey;
            if (obj["koValue"]) return ObjType.Question;
            return ObjType.Unknown;
        }
    }
}