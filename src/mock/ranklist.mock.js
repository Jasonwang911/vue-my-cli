const Mock = require('mockjs');

const Random = Mock.Random;

const rankListMockData = function() {
    let rankList = [];
    for(let i = 0; i < 10; i++) {
        let rankListCell = {
            imgUrl: Random.dataImage('300x250', 'mock的图片'),
            name: Random.cword(3,15),
            rate: Random.float(0,0,2,2),
            range: `${Random.integer(0,1000)}-${Random.integer(2000,10000)}元`,
            rangeName: Random.ctitle(3,3),
            info: Random.cword(5,30),
        }
        rankList.push(rankListCell);
    }

    return {
        rankList:rankList
    }
}

Mock.mock('/ranklist', 'post', rankListMockData);

