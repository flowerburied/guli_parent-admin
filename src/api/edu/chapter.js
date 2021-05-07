import request from '@/utils/request'

export default {

    // 根据课程id获取课程章节小结
    getAllChapterVideo(data) {
        return request({
            url: `/eduservice/chapter/getChapterVideo/` + data,
            method: "get",

        })
    },

    // 添加章节

    addChapter(data) {
        return request({
            url: `/eduservice/chapter/addChapter`,
            method: "post",
            data: data

        })
    },

    // 根据章节id查询

    getChapterInfo(data) {
        return request({
            url: `/eduservice/chapter/getChapterInfo` + data,
            method: "get",


        })
    },

    //   修改章节

    updateChapter(data) {
        return request({
            url: `/eduservice/chapter/updateChapter`,
            method: "post",
            data: data


        })
    },

    //    删除方法
    deleteChapter(data) {
        return request({
            url: `/eduservice/chapter/` + data,
            method: "delete",
        })
    }


}