import request from '@/utils/request'

export default {

    // 添加
    addVideo(data) {
        return request({
            url: `/eduservice/video/addVideo`,
            method: "post",
            data: data
        })
    },

    //2 删除
    deleteVideo(data) {
        return request({
            url: '/eduservice/video/' + data,
            method: 'delete'
        })
    },



}