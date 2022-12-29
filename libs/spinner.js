import ora from 'ora';
import spinners from 'cli-spinners';

/**
 * 使用 ora 创建读取中转圈动画
 * @param {Object} options
 * @returns {Object} ora 对象
 */
export default (options = {}) =>
    ora(
        Object.assign(
            {
                spinner: spinners.dots,
                color: 'cyan',
            },
            typeof options === 'string'
                ? {
                      text: options,
                  }
                : options
        )
    ).start();
