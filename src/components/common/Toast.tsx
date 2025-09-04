// 定义 toast 类型
type ToastType = "info" | "success" | "warning" | "error";

// 定义 toast 配置接口
interface ToastConfig {
  type: ToastType;
  message: string;
  duration?: number;
}
/**
 * 全局 Toast 管理器
 */
class ToastManager {
  private toastElement: HTMLDivElement | null = null;
  private timeoutId: NodeJS.Timeout | null = null;

  show(config: ToastConfig): void {
    // 清除之前的 toast
    this.clear();

    // 创建新的 toast 容器
    this.toastElement = document.createElement("div");
    this.toastElement.id = "global-toast";

    // 由于我们没有在 React 组件树中，所以直接设置 innerHTML
    const typeMap = {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    };

    this.toastElement.className = "toast toast-top toast-center";
    this.toastElement.innerHTML = `
      <div role="alert" class="alert ${typeMap[config.type]} alert-soft">
        <span>${config.message}</span>
      </div>
    `;

    document.body.appendChild(this.toastElement);

    // 设置自动关闭定时器
    this.timeoutId = setTimeout(() => {
      this.clear();
    }, config.duration || 3000);
  }

  clear(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (this.toastElement && document.body.contains(this.toastElement)) {
      document.body.removeChild(this.toastElement);
      this.toastElement = null;
    }
  }
}

// 创建单例实例
const toastManager = new ToastManager();

// 导出便捷方法
export const toast = {
  info(message: string, duration?: number): void {
    toastManager.show({ type: "info", message, duration });
  },
  success(message: string, duration?: number): void {
    toastManager.show({ type: "success", message, duration });
  },
  warning(message: string, duration?: number): void {
    toastManager.show({ type: "warning", message, duration });
  },
  error(message: string, duration?: number): void {
    toastManager.show({ type: "error", message, duration });
  },
  clear(): void {
    toastManager.clear();
  },
};

export default toast;
