// @ts-nocheck
import { Type } from 'class-transformer';

export default class UserModel {
	id: number;
	libraryId: number;
	libraryName: string;
	libraryLogo: string;
	libraryAddress: string;
	source: number;
	isStop: number;
	bookNumber: number;
	bindingTime?: any;
	bookstoreHeadPath: string;
	bookstoreWechatId: string;
	bookstoreAddress: string;
	bookstoreQrCode: string;
	bookstoreName: string;
	schLibraryName: string;
	ucSchoolName: string;
	managerRealName: string;
	managerPhone: string;
	token: string;
	deviceAlias: string;
	roleType: number;
	@Type(() => String)
	tagVos: string[];
	bookCapacity: number;
	position: string;
	memberSelfRegQRCode: string;
	borrowPeriod: number;
	makeUpOnFunction: number;
	answerUpOnFunction: number;
	schIdCode: string;
	isZy: number; // 1: 直营 2: 不是直营
	sourceType: number; // 1-儿童书店  2- 双师书店  3-直营书店

	get isFfMember() {
		return this.sourceType === 1;
	}
	get isSsMember() {
		return this.sourceType === 2;
	}
	get isZyMember() {
		return this.sourceType === 3;
	}
}
