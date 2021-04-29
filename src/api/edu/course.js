import request from '@/utils/request'

export default {

    // 添加课程信息
    addCourseInfo(data) {
        return request({
            url: `/eduservice/course/addCourseInfo`,
            method: "post",
            data: data
        })
    },

    //2 查询所有讲师
    getListTeacher() {
        return request({
            url: '/eduservice/teacher/findAll',
            method: 'get'
        })
    }

}