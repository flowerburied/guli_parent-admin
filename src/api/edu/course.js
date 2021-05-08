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
    },

    //3 根据课程id查询课程基本信息
    getCourseInfoId(data) {
        return request({
            url: '/eduservice/course/getCourseInfo/' + data,
            method: 'get'
        })
    },
    // 4 修改课程信息
    updateCourseInfo(data) {
        return request({
            url: '/eduservice/course/updataCourseInfo/',
            method: 'post',
            data: data
        })
    },
    // 4 修改课程信息
    getPublihCourseInfo(data) {
        return request({
            url: '/eduservice/course/getPublishCourseInfo/' + data,
            method: 'get',

        })
    },
    // 4 修改课程信息
    publihCourse(data) {
        return request({
            url: '/eduservice/course/publishCourse/' + data,
            method: 'post',

        })
    },

    // 查询所有课程
    getListCourse() {
        return request({
            url: '/eduservice/course/',
            method: 'get',

        })
    },

}