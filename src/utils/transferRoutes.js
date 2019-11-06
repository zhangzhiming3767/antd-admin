import { routerActions } from "react-router-redux"

function transferRoutes(list){
    // if(list && list.length){
    //     let routes=[]
    //     routes.push({
    //         id:'-1',
    //         icon:'dashboard',
    //         route:'/dashboard',
    //         zh:{
    //             name:'工作台',
    //         }
    //     })
    // }
    if (list.length > 0) {
        let routes = [];
        list.forEach(element=>{
            let temp={
                id:element.id,
                icon:element.icon || 'dashboard',
                route:element.menuUrl?element.menuUrl:'/',
                zh:{
                    name:element.menuName,
                },
            }
            if (element.parentId !== 'root') {
                temp.menuParentId = element.parentId
                temp.breadcrumbParentId = element.parentId
              }
            routes.push(temp)
        })
        return routes;
    }
}
/**
 * json格式转树状结构        这个保留，对加载左侧菜单好像没什么用，在展示菜单树的时候好像能用上
 * @param   {json}      json数据
 * @param   {String}    id的字符串
 * @param   {String}    父id的字符串
 * @param   {String}    children的字符串
 * @return  {Array}     数组
 */
function transData(a, idStr, pidStr, chindrenStr) {
    var r = [],
      hash = {},
      id = idStr,
      pid = pidStr,
      children = chindrenStr,
      i = 0,
      j = 0,
      len = a.length
    for (; i < len; i++) {
      hash[a[i][id]] = a[i]
    }
    for (; j < len; j++) {
      var aVal = a[j],
        hashVP = hash[aVal[pid]]
      if (hashVP) {
        !hashVP[children] && (hashVP[children] = [])
        hashVP[children].push(aVal)
      } else {
        r.push(aVal)
      }
    }
    return r
  }

export {transData,transferRoutes }