// 棋格数据
var b0 = {name:"起点", owner:"sean", state:"goodsp", value: 2000};
var b1 = {name:"中国", value:4900, state:0, cost:980, owner:"none"};
var b2 = {name:"越南", value:1000, state:0, cost:200, owner:"none"};
var b3 = {name:"韩国", value:1300, state:0, cost:260, owner:"none"};
var b4 = {name:"机会", value:1000, state:"nope", cost:200, owner:"sean"};
var b5 = {name:"日本", value:3000, state:0, cost:600, owner:"none"};
var b6 = {name:"俄罗斯", value:4000, state:0, cost:800, owner:"none"};
var b7 = {name:"白云机场",	value:1000,	state:"nope", cost:1000, owner:"sean"};
var b8 = {name:"交所得税", value:1000, state:"badsp", cost:1000, owner:"sean"};
var b9 = {name:"命运", value:1000, state:"nope", cost:1000,	owner:"sean"};
var b10 = {name:"埃及", value:1600, state:0, cost:320, owner:"none"};
var b11 = {name:"监狱", value:0, state:"jail", cost:0, owner:"sean"};
var b12 = {name:"澳大利亚", value:2400, state:0, cost:480, owner:"none"};
var b13 = {name:"新西兰", value:1800, state:0, cost:360, owner:"none"};
var b14 = {name:"南极洲", value:20000, state:0, cost:2000, owner:"none"};
var b15 = {name:"赌场", value:1000, state:"nope", cost:1000, owner:"sean"};
var b16 = {name:"机会", value:1000, state:"nope", cost:1000, owner:"sean"};
var b17 = {name:"捡到钱", value:1000, state:"goodsp", cost:1000, owner:"sean"};
var b18 = {name:"巴西", value:2000, state:0, cost:400, owner:"none"};
var b19 = {name:"阿根廷", value:2200, state:0, cost:440, owner:"none"};
var b20 = {name:"墨西哥", value:2400, state:0, cost:480, owner:"none"};
var b21 = {name:"美国", value:4500, state:0, cost:900, owner:"none"};
var b22 = {name:"意大利", value:3000, state:0, cost:600, owner:"none"};
var b23 = {name:"伦敦机场", value:1000, state:"nope", cost:1000, owner:"sean"};
var b24 = {name:"英国", value:3600, state:0, cost:720, owner:"none"};
var b25 = {name:"命运", value:1000, state:"nope", cost:1000, owner:"sean"};
var b26 = {name:"阿尔卑斯山", value:1000, state:"nope", cost:1000, owner:"sean"};
var b27 = {name:"德国", value:3400, state:0, cost:680, owner:"none"};
var b28 = {name:"法国", value:3200, state:0, cost:640, owner:"none"};
var b29 = {name:"西班牙", value:2800, state:0, cost:560, owner:"none"};
var place = [b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29];
//绑定棋格数据到棋格盒子上
var boxes = [];
for( var i = 0; i < 30 ; i++){
	boxes.push(document.querySelector("#b"+i+""))
}
//把数据中的名字写入棋格
for( var i = 0; i < place.length; i++){
	boxes[i].firstElementChild.append(place[i].name);
}

//定义角色
var p1 = {name:"player1", money:15000, state: "", stop: 0}
var p2 = {name:"player2", money:15000, state: "", stop: 0}
var p3 = {name:"player3", money:15000, state: "", stop: 0}
var p4 = {name:"player4", money:15000, state: "", stop: 0}
var players = [p1,p2,p3,p4];







//机会命运
var s0 = {text:"扶老奶奶过马路的事迹被大家知道了，村委会颁发$1000奖金",value:1000}
var s1 = {text:"中了彩票，获得头奖$10000", value: 10000}
var s2 = {text:"在街边被劫匪抢劫，为了保住性命，失去$3000", value: -3000}
var s3 = {text:"喝了一杯一点点，花费$30", value: -30}
var s4 = {text:"路边捡到$500", value:500}
var s5 = {text:"吃鱼卡到鱼刺，去医院花了$800", value:-800}
var s6 = {text:"钱包落在出租车里，丢失$1000", value:-1000}
var s7 = {text:"空闲时间去兼职家教，收获$2000", value:2000}
var s8 = {text:"扶老奶奶过马路摔了一跤，买药花了$100", value:-100}
var s9 = {text:"手机突然坏了，换了部最新款iPhone，花费$1300", value:-1300}
var s10 = {text:"吃羊肉火锅，花费$500", value:-500}
// var s11 = {text:"", value: }
// var s12 = {text:"", value: }
// var s13 = {text:"", value: }
// var s14 = {text:"", value: }
// var s15 = {text:"", value: }
// var s16 = {text:"", value: }
// var s17 = {text:"", value: }
// var s18 = {text:"", value: }
// var s19 = {text:"", value: }
// var s20 = {text:"", value: }
// var s21 = {text:"", value: }
// var s22 = {text:"", value: }
// var s23 = {text:"", value: }
// var s24 = {text:"", value: }
// var s25 = {text:"", value: }
// var s26 = {text:"", value: }
// var s27 = {text:"", value: }
// var s28 = {text:"", value: }
// var s29 = {text:"", value: }
// var s30 = {text:"", value: }
var fate = [s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];