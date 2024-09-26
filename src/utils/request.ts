import { plainToInstance, ClassConstructor } from 'class-transformer';
import { useUserStore } from '@/store';
import { alert, toast } from './util';

type RequestOptionsMethod =
	| 'OPTIONS'
	| 'GET'
	| 'HEAD'
	| 'POST'
	| 'PUT'
	| 'DELETE'
	| 'TRACE'
	| 'CONNECT';
type RequestOptionsMethodAll = RequestOptionsMethod | Lowercase<RequestOptionsMethod>;
declare let uni: any;
/**
 * 请求接口方法
 *
 * @param url 接口地址
 * @param method 接口方法
 * @param data 请求体
 * @param obj auth是否需要登录 verify结果是否需要校验 original是否返回最外层数据 loading是否显示loading
 * @returns promise
 */
function baseRequest(
	url: string,
	method: RequestOptionsMethod,
	data: any,
	{ auth = true, verify = true, original = false, loading = false }: any
): Promise<any> {
	const userStore = useUserStore();
	const baseURL = 'https://appgw.yuedushufang.com';
	const token = userStore.userInfo?.token;
	const header = {
		'content-type': 'application/json',
	};
	if (auth) {
		if (!token) {
			userStore.logout();
			return Promise.reject({ msg: '请登录' });
		}
	}
	return new Promise((reslove, reject) => {
		if (loading) {
			uni.showLoading({
				title: '加载中',
				mask: true,
			});
		}
		uni.request({
			url: url.startsWith('http') ? url : baseURL + url,
			method,
			header,
			data,
			success: (res: any) => {
				if (!verify) {
					reslove(res.data);
				} else if (res.statusCode === 200) {
					if (res.data.code === 200) {
						reslove(original ? res.data : res.data.data || res.data.rows);
					} else if ([10010, 100011, 100012, 100013, 100014].includes(res.data.code)) {
						userStore.logout();
						errorHandle(res.data.msg);
						reject(res.data.msg || '登录已过期, 请重新登录');
					} else {
						errorHandle(res.data.msg);
						reject(res.data.msg || '系统错误');
					}
				} else {
					errorHandle(res.errMsg);
					reject(res.errMsg || '系统错误');
				}
			},
			fail: (err: UniApp.GeneralCallbackResult) => {
				errorHandle(err.errMsg);
				reject(err.errMsg || '请求失败');
			},
			complete: () => {
				if (loading) {
					uni.hideLoading();
				}
			},
		});
	});
}
function errorHandle(msg: string) {
	uni.$emit('z-paging-error-emit', msg || '请求失败');
	if (!msg || (msg && msg.length < 20)) {
		toast(msg || '请求失败');
	} else {
		alert({
			content: msg,
			showCancel: false,
			okText: '我知道了',
			onOk: () => {},
		});
	}
}

// const request: Request = {}
const requestOptions: RequestOptionsMethodAll[] = [
	'options',
	'get',
	'post',
	'put',
	'head',
	'delete',
	'trace',
	'connect',
];

type Methods = (typeof requestOptions)[number];
// @ts-ignore
const request: {
	// eslint-disable-next-line
	[key in Methods]: (url: string, data?: any, opt?: any) => Promise<any>;
} = {};

requestOptions.forEach((method) => {
	const m = method.toUpperCase() as unknown as RequestOptionsMethod;
	request[method] = (url, data?, opt?) =>
		baseRequest(
			url,
			m,
			data || {},
			opt || {
				auth: true,
				verify: true,
				original: false,
				loading: false,
			}
		);
});

const map2model = <T>(cls: ClassConstructor<T>, data: any): T => {
	if (typeof data === 'object') {
		return plainToInstance(cls, data as object);
	} else {
		throw Error('转换错误');
	}
};
const map2models = <T>(cls: ClassConstructor<T>, data: any): T[] => {
	if (Array.isArray(data)) {
		return plainToInstance(cls, data);
	} else {
		throw Error('转换错误');
	}
};

export default request;
export { map2model, map2models };
