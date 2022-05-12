
/**
 * 
 * https://segmentfault.com/a/1190000011947724
https://www.bilibili.com/video/BV1Eb41147dK?from=search&seid=16051892050619509521&spm_id_from=333.337.0.0
 */

function buildHeap(data) {
    var len = data.length;
    for (var i = Math.floor(len / 2); i >= 0; i--) {
        heapAjust(data, i, len);
    }
}
// 堆调整函数，即调整当前data为大根堆
function heapAjust(data, i, len) {
    var child = 2 * i + 1;
    // 如果有孩子结点，默认情况是左孩子
    while (child <= len) {
        var temp = data[i];
        // 如果右孩子存在且其值大于左孩子的值，则将child指向右孩子
        if (child + 1 <= len && data[child] < data[child + 1]) {
            child = child + 1;
        }
        // 如果当前结点的值小于其孩子结点的值，则交换，直至循环结束
        if (data[i] < data[child]) {
            data[i] = data[child];
            data[child] = temp;
            i = child;
            child = 2 * i + 1
        } else {
            break
        }
    }
}
// 排序
function heapSort(data) {
    var data = data.slice(0);
    if (!(data instanceof Array)) {
        return null;
    }
    if (data instanceof Array && data.length == 1) {
        return data;
    }
    // 将data数组改造为“堆”的结构
    buildHeap(data);

    var len = data.length;
    // 下面需要注意的时候参数的边界，参考文档里面程序中i的值是不对的
    for (var i = len - 1; i >= 0; i--) {
        swap(data, i, 0);
        heapAjust(data, 0, i - 1);
    }
    return data;
} 
function swap(arr, i, j) 
{ 
    [arr[i], arr[j]] = [arr[j], arr[i]] 
}
const arr = [62, 88, 58, 47, 35, 73, 51, 99, 37, 93];
var newArr = heapSort(arr);
console.log(newArr); 