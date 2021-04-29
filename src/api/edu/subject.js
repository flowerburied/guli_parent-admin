import request from '@/utils/request'

export default {

    // 课程分类
    getAllSubject() {
        return request({

            url: `/eduservice/subject/getAllSubject`,
            method: "get",
            // 条件对象，后端使用RequestBody获取数据
            // data表示把对象转换json进行传递到接口里面

        })
    },
    // 课程分类
    getSubjectList() {
        return request({

            url: `/eduservice/subject/getAllSubject`,
            method: "get",
            // 条件对象，后端使用RequestBody获取数据
            // data表示把对象转换json进行传递到接口里面

        })
    },


}