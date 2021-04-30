import request from '@/utils/request'

export default {

    // 根据课程id获取课程章节小结
    getAllChapterVideo(data) {
        return request({
            url: `/eduservice/chapter/getChapterVideo/` + data,
            method: "get",

        })
    },



}