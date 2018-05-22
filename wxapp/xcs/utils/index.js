// opt没有传该传的
import * as Mock from './mock'
// 使用 Mock["list"] key
const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: {
        'Content-Type': 'application/json'
    },
    method:'GET',
    dataType: 'json'
}

let util = {
    request(opt) {
        // Object.assign()生成新的对象(把后面的参数组合起来，放到前面的对象里)，{}是options
        let options = Object.assign({}, DEFAULT_REQUEST_OPTIONS, opt);
        let {url, data, header, method, dataType, mock=false} = options;
        // console.log(url, data, header, method, dataType, mock);
        return new Promise((resolve, reject) => {
            if (mock) {
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                    // 通过Mock['lists/detail']来请求数据
                }
                resolve(res.data);
                return;
            }
            // mock 为true 则为本地的模拟数据
            wx.request({
                url,
                data,
                header,
                method,
                dataType,
                success(res) {
                    resolve(res.data)
                },
                fail(err) {
                    reject(err)
                }
            })
        });
    }
}
export default util