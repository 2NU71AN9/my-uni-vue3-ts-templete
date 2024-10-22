import lottie from 'lottie-miniprogram';

declare let wx: any;

type LoadAnimationReturnType = ReturnType<typeof lottie.loadAnimation>;

function makeCanvas(canvasId: string, size: { width: number; height: number }): Promise<HTMLCanvasElement> {
	// weixin的canvas完全实现了HTML上canvas的API，这里就直接用HTMLCanvasElement当做canvas的类型
	return new Promise<HTMLCanvasElement>((resolve) => {
		wx.createSelectorQuery()
			.select(`#${canvasId}`)
			.fields({ node: true, size: true })
			.exec((res: any) => {
				const canvas = res[0].node as HTMLCanvasElement;
				// 处理真机显示模糊
				const dpr = wx.getWindowInfo().pixelRatio;
				canvas.width = size.width * dpr;
				canvas.height = size.height * dpr;
				resolve(canvas);
			});
	});
}

function loadAnimation(options: {
	canvas: HTMLCanvasElement;
	data?: any;
	path?: string; // 只支持在线地址
	auto?: boolean;
	loop?: boolean;
	complete?: () => void; // loop为true不会执行complete
}): LoadAnimationReturnType | undefined {
	const context = options.canvas.getContext('2d');
	if (!context) return;
	const dpr = wx.getWindowInfo().pixelRatio;
	context.scale(dpr, dpr);
	lottie.setup(options.canvas);
	const animation = lottie.loadAnimation({
		loop: options.loop,
		autoplay: options.auto,
		animationData: options.data,
		path: options.path,
		rendererSettings: { context },
	});
	function completeLister() {
		animation.goToAndStop(100, true);
		animation.removeEventListener('complete', completeLister);
		if (options.complete) {
			options.complete();
		}
	}
	animation.addEventListener('complete', completeLister);
	return animation;
}

export { makeCanvas, loadAnimation, type LoadAnimationReturnType };
