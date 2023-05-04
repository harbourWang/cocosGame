export const KeyManager = {
    //json表数据
    roleInfo: [
        {
            roleUrl: "",
            nameUrl: "",
            headUrl: "",
            skill: "",
            skillCD: 20
        }
    ],
    map: [],
    /** 得分阶段 */
    scoreList: [],
    /**释放技能需要的分数 */
    skillScoreList: [],

    //游戏内数据  需要存储的
    music: 1,
    /** 难度等级 - 玩游戏次数 */
    level: 0,
    /** 玩游戏次数,第一次进游戏是 1 */
    gameTimes: 1,
    /** 选取的角色 */
    role: 0,
    /** 是否弹出过引导 */
    guide: true,


    //游戏内数据  无需需要存储的
    /**本局游戏得分 */
    score: 0,
    // /** 点击技能释放 */
    // skill: false,

    // /**本局游戏释放技能需要得分 */
    // skillScore

    mobile: 0,

}