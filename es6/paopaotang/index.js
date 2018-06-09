function Player(name, teamColor) {
    // 设置每个人所属的队伍，以区分
    this.teamColor = teamColor;
    this.name = name;
    this.groups = [];
    this.enemys = [];
    // this.res = true;
    this.state = 'live';
    // this.dieNum = 0
}

Player.prototype = {
    win: function() {
        console.log(`${this.name} win !`);
    },
    lose: function() {
        console.log(`${this.name} lose !`);
    },
    // finish: function() {
    //     if (this.res == true) {
            
    //     }
    // }
    die: function() {
        // 我的die函数 一开始是建立在单个人基础上。但是最后又是基于团队来说。
        this.state = 'dead';
        var all_dead = true;

        for (var i = 0; i < this.groups.length; i++) {
            if (this.groups[i].state == 'live') {
                all_dead = false;
                break;
            }
        }
        if (all_dead) {
            this.lose();
            // 设置为第一个人，数组中的，因为第一次是true
            for (let i = 0; i < this.groups.length; i++) {
                this.groups[i].lose();
            }
            for (let j = 0; j < this.enemys.length; j++) {
                this.enemys[j].win();
            }
        }
        // this.res = false;
        // for (let i = 0 ;i < this.groups.length ;i++) {
        //     if (this.res == false) this.dieNum++;
        // }
        // if (this.dieNum == this.groups.length) {
        //     console.log('Your group lose!');
        //     console.log('The enemies win !');
        // }


        // this.enemy.win();
    }
}

const players = [];
// 流程 太多了， 规律 red blue另一队
// 工厂模式
function playfactory(name, teamColor) {
    // 实例化， 分配对象
    var newPlayer = new Player(name, teamColor);
    for (var i = 0; i < players.length; i++){
        const player = players[i];
        if (player.teamColor === newPlayer.teamColor) {
            player.groups.push(newPlayer);
            newPlayer.groups.push(player);
        }else {
            player.enemys.push(newPlayer);
            newPlayer.enemys.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}

const play1 = playfactory('皮蛋', 'red');
const play2 = playfactory('小乖', 'red');
const play3 = playfactory('宝宝', 'red');
const play4 = playfactory('小强', 'red');

const play5 = playfactory('黑妞', 'blue');
const play6 = playfactory('葱头', 'blue');
const play7 = playfactory('胖墩', 'blue');
const play8 = playfactory('海盗', 'blue');

// console.log(palyers);

play1.die();
play2.die();
play3.die();
play4.die();






// let user1 = new Player('user1');
// let user2 = new Player('user2');let user2 = new Player('user2', 'red');
// let user3 = new Player('user2', 'red');
// let user4 = new Player('user2', 'red');

// let play1 = new Player('play1', 'blue');
// let play2 = new Player('play2', 'blue');
// let play3 = new Player('play3', 'blue');
// let user1 = new Player('user1', 'red');
// // user1.push()

// let play4 = new Player('play4', 'blue');


// user1.groups = [user1,user2,user3,user4];
// user1.enemys = [play1, play2, play3, play4];
// play1.enemys = [user1,user2,user3,user4];
// play1.enemys = [play1, play2, play3, play4];


// // 上线了，互成敌人,匹配到一局去了
// user1.enemy = user2;
// user2.enemy = user1;

// user1.enemy.res = false;
// user1.res = true;
// user1.finish();
// 设置
// user1.die();
// 自己想的时候，自己设置一个变量来表示true,false,然后再来判断结果。

//不如 


// enemy 实例 instanceof => new Player
