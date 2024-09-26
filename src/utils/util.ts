export const toast = function (content?: string) {
	uni.showToast({
		title: content,
		icon: 'none',
		duration: 2000,
		mask: true,
	});
};

interface AlertOptions {
	/**
	 * 提示的标题
	 */
	title?: string;
	/**
	 * 提示的内容
	 */
	content?: string;
	/**
	 * 是否显示取消按钮，默认为 true
	 */
	showCancel?: boolean;
	/**
	 * 取消按钮的文字，默认为"取消"
	 */
	cancelText?: string;
	/**
	 * 取消按钮的文字颜色，默认为"#000000"
	 */
	cancelColor?: string;
	/**
	 * 确定按钮的文字，默认为"确定"
	 */
	okText?: string;
	/**
	 * 确定按钮的文字颜色，默认为"#3CC51F"
	 */
	okColor?: string;
	/**
	 * 是否显示输入框
	 */
	editable?: boolean;
	/**
	 * 显示输入框时的提示文本
	 */
	placeholder?: string;
	onOk?: (result?: string) => void;
	onCancel?: () => void;
}
export const alert = function (val: AlertOptions) {
	uni.showModal({
		title: val.title || '',
		content: val.content || '',
		showCancel: val.showCancel ?? true,
		cancelText: val.cancelText || '取消',
		cancelColor: val.cancelColor || '#969799',
		confirmText: val.okText || '确定',
		confirmColor: val.okColor || '#3072F6',
		editable: val.editable || false,
		placeholderText: val.placeholder || '',
		success: function (res) {
			if (res.confirm) {
				val.onOk && val.onOk(res.content);
			} else if (res.cancel) {
				val.onCancel && val.onCancel();
			}
		},
	});
};
