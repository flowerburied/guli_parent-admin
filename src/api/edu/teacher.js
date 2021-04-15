import request from '@/utils/request'

export default {

    // 查询讲师
    getTeacherListPage(current, limit, teacherQuery) {
        return request({
            // url:"/eduservice/teacher/pageTeacherCondition/"+current+"/"+limit,
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: "post",
            // 条件对象，后端使用RequestBody获取数据
            // data表示把对象转换json进行传递到接口里面
            data: teacherQuery
        })
    },
    // 删除讲师
    deleteTeacherId(id) {
        return request({
            // url:"/eduservice/teacher/pageTeacherCondition/"+current+"/"+limit,
            url: `/eduservice/teacher/${id}`,
            method: "delete",

        })
    },

    // 查询讲师
    addTeacher(data) {
        return request({
            // url:"/eduservice/teacher/pageTeacherCondition/"+current+"/"+limit,
            url: `/eduservice/teacher/addTeacher`,
            method: "post",
            // 条件对象，后端使用RequestBody获取数据
            // data表示把对象转换json进行传递到接口里面
            data: data
        })
    },

    // 查询id讲师
    getTeacherInfo(data) {
        return request({
            // url:"/eduservice/teacher/pageTeacherCondition/"+current+"/"+limit,
            url: `/eduservice/teacher/getTeacher/${data}`,
            method: "get",

        })
    },

    // 修改讲师
    updateTeacherInfo(data) {
        return request({
            // url:"/eduservice/teacher/pageTeacherCondition/"+current+"/"+limit,
            url: `/eduservice/teacher/updateTeacher`,
            method: "post",
            data: data

        })
    }


}