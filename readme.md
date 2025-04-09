# TerminalError2AI Node.js Application

## Introduction 

This Node.js application, **TerminalError2AI**, is designed to work alongside other applications (like a Vue.js project) to capture and process error messages in real-time. It integrates with the ChatGPT API to provide intelligent suggestions or solutions based on the captured errors. The application is lightweight, customizable, and designed for live debugging and troubleshooting during development.

### Features
- Captures error messages from terminal output.
- Sends error information to ChatGPT for solutions.
- Provides solutions in multiple languages (e.g., Chinese, English).
- Seamless integration with Vue.js projects or other command-line applications.
- Easy to set up and extend for long-term use.

### Usage
1. **Set up the error handler:**
    - Place the error handler in a directory accessible to your project (e.g., `../TerminalError2AI/`).
    - Configure `config.js` with your ChatGPT API key and preferred language.

2. **Modify your `package.json`:**  
   Update the `start` script to pipe output to the error handler:
   ```json
   {
     "scripts": {
       "start": "vue-cli-service serve | node ../TerminalError2AI/index.js"
     }
   }
   ```

3. **Install dependencies:**  
   Run the following commands in both the Vue project and the error handler directory:
   ```bash
   npm install
   ```

4. **Run your application:**  
   Start your Vue.js project as usual:
   ```bash
   npm start
   ```

5. **Trigger errors:**  
   Write code that intentionally causes errors to see how the application captures and responds to them.

### Example Output
```plaintext
 ERROR  Failed to compile with 1 error

Captured error message: SyntaxError: Unexpected token
Sending to Copilot for solution...

=== Copilot Response (Chinese) ===
解决方案：
请检查代码中是否有语法错误，例如遗漏括号或引号。
```

## 流程介绍

这个 Node.js 应用程序，**TerminalError2AI**，旨在与其他应用程序（例如 Vue.js 项目）一起使用，以实时捕获和处理错误信息。它集成了 ChatGPT API，根据捕获的错误提供智能建议或解决方案。该应用程序轻量、可定制，非常适合开发过程中的实时调试和故障排除。

### 功能
- 捕获终端输出中的错误信息。
- 将错误信息发送到 ChatGPT 获取解决方案。
- 提供多语言支持（例如中文和英文）的解决方案。
- 可与 Vue.js 项目或其他命令行应用程序无缝集成。
- 易于设置并适合长期使用。

### 使用方法
1. **设置错误处理程序：**
    - 将错误处理程序放置在项目可访问的目录中（例如 `../TerminalError2AI/`）。
    - 在 `config.js` 中配置您的 ChatGPT API 密钥和首选语言。

2. **修改 `package.json`：**  
   更新 `start` 脚本，将输出重定向到错误处理程序：
   ```json
   {
     "scripts": {
       "start": "vue-cli-service serve | node ../TerminalError2AI/index.js"
     }
   }
   ```

3. **安装依赖：**  
   分别在 Vue 项目和错误处理程序目录中运行以下命令：
   ```bash
   npm install
   ```

4. **运行您的应用程序：**  
   启动 Vue.js 项目：
   ```bash
   npm start
   ```

5. **触发错误：**  
   编写故意引发错误的代码，并查看应用程序如何捕获和响应这些错误。

### 示例输出
```plaintext
 ERROR  Failed to compile with 1 error

捕获到错误信息： SyntaxError: Unexpected token
正在发送到 Copilot 获取解决方案...

=== Copilot 回复 (中文) ===
解决方案：
请检查代码中是否有语法错误，例如遗漏括号或引号。
```
---

## License / 许可证

---

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this software, provided that the original copyright notice and permission notice are included in all copies or substantial portions of the software.

For the full license text, please refer to the [LICENSE](./LICENSE) file.

---

本项目使用 **MIT 开源许可证**。您可以自由地使用、修改和分发本软件，但需在软件的所有副本或重要部分中包含原始的版权声明和许可声明。

完整的许可文本，请参阅 [LICENSE](./LICENSE) 文件。

---
