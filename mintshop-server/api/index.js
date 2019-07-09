/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax'
// const BASE_URL = 'http://local:4000'
const BASE_URL = '/api'
/**
 * 获取地址信息(根据经纬度串)
 * 这个接口的经纬度参数是在url路径里的，没有query参数
 */
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`)