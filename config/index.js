export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wxf465020dc07eb9d5",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "e0fb8eb86d76ebf6a8f8c4997d765b85",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "宝贝珂珂",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o1uhQ5733ecniG1lWjXtI3lPoSSo",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "lwKLV384jLuuK_zDMVhJy0_WOZWtrWryyIBAtT-or-Q",
      // 所在省份
      province: "河南",
      // 所在城市
      city: "新乡",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '09-29',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "宝贝珂珂", "year": "2002", "date": "09-29"},
        {"type": "节日", "name": "相爱纪念日", "year": "2021", "date": "02-07"},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {"type": "生日", "name": "鑫鑫", "year": "2002", "date": "05-12"},
        {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "02-07"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2021-02-07"},
        // 结婚纪念日
        {"keyword": "marry_day", date: "2022-09-09"},
        // 退伍日
        {"keyword": "ex_day", date: "2022-09-10"},
      ]
    },
    {
      name: "老婆1",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
    {
      name: "老婆2",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
    {
      name: "老婆3",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      horoscopeDate: '',
      horoscopeDateType: '',
      openUrl: "https://wangxinleo.cn",
      festivals: [],
      customizedDateList: []
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "",
    },
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "广东",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "惠州",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * 
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   * 
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {"type": "*生日", "name": "老婆", "year": "1996", "date": "09-09", isShowAge: true},
    {"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "09-03"},
    // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
    {"type": "生日", "name": "李四", "year": "1996", "date": "09-31", isShowAge: true},
    {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
    // 你可以不断按格式往下增加
    // ...
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-09-08"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2022-09-09"},
    // 退伍日
    {"keyword": "ex_day", date: "2022-09-10"},
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
      "这满目星河也抵不过你对我展眉一笑。早安。",
      "不管你信不信，有个人正在等待，在每个太阳正常升起的早上，对你说早安!",
      "每一天的太阳都愿照在你的身上，让你一天都保持好心情，早安!",
      "喜爱一切美好的事物：阳光，秋千，树叶，花瓣……还有你。早安!",
      "昨晚你说睡了，你知道我说了多少次你的名字才睡着我吗，在数到1313次我醒了，在1314次对你说“早安”，说不定就是一辈子了。",
      "喜欢你是什么感觉呢，有时候委屈得要哭鼻子好久好久，有时候又因为你开心的飞起来，喜欢你，也太难了吧。早安!",
      "跟你说早安，是想让你知道，睁开眼睛第一个想到的，是你。",
      "想对你说，时光兜兜转转，我感谢与你的这次遇见。余生，请多赐教。早安!",
      "你的微笑，是我这辈子见过最美的景色，我想收藏这样的风景一辈子。早安!",
      "在青山绿水之间，我想牵着你的手，走过这座桥，桥上是绿叶红花，桥下是流水人家，桥的那头是青丝，桥的这头是白发，而此刻的你，早上，要安好。",
      "在对你说出晚安后我睡着了了，今天对你说出早安后，我又开始期盼晚安了。",
      "我嘴角向上扬起，每一次都是因为你，早安。",
      "总想把世界上最好的都给你，却发现世界最好的就是你。早安!",
      "如果可以和你在一起，我宁愿让天空所有的星光全部损落，因为你的眼睛，是我生命里最亮的光芒。早安!",
      "生活就是一幅美丽的风景画，而你就是这画中人，让人忘记昼夜更替忘掉四季轮回，只愿沉醉其中。早安~",
      "我相信，总会有不期而遇的温暖，和生生不息的希望，就像你奇迹般出现在我的生命里，照亮了我的生活，早安!",
      "你是我永远的春天，是我美丽的风景，一生与你不离不弃，每天准时给你一句早安。",
      "我要收一个可爱到爆炸的小朋友，听说你最合适，以后你的早安问候都由我来说了，早安，我家小宝贝。",
      "遇见你，是我生命的幸运;爱上你，是我生命的愉悦;失去你，是我生命的遗憾;没有你，无法感受心灵的震撼，此生惟愿爱你!早安!",
      "走过千山万水，才懂得家最温馨;历经风风雨雨，才感悟平淡最真;错过许许多多，才知道珍惜拥有;路过熙熙攘攘，才明白你最珍贵。早安!",
      "每个人的早餐不是豆浆油条就是馒头包子，而我不一样，我只希望我的早餐是你，看到你我就心满意足了，早安!",
      "没有谁的缘分是天注定的，我不想错过，所以我就来了，出现在你的每个清晨，对你说出早上好!",
      "情书是我抄的，但喜欢你是真的。早安!",
      "在这个晴空暖阳下，陪你看花开倾城，陪你听潮起潮落，陪你欢喜，陪你微笑，就这样生生世世，尘埃落定。",
    ]},
    // 你可以不断按格式往下增加
    // ...
  ],


}
