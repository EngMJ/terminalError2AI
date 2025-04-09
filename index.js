const readline = require('readline');
const CopilotService = require('./copilotService'); // 假设已实现 Copilot API 调用逻辑
const { language } = require('./config');

// 创建读取终端输入的接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

console.log('错误处理程序已启动，等待错误信息...\n');

rl.on('line', async (line) => {
    const errorMessage = line.trim();

    if (errorMessage) {
        console.log('\n捕获到错误信息：', errorMessage);
        console.log('正在发送到 Copilot 获取解决方案...\n');

        try {
            const solution = await CopilotService.sendErrorToCopilot(errorMessage);
            console.log(
                `\n=== Copilot 回复 (${language === 'zh' ? '中文' : '英文'}) ===\n`,
                solution
            );
        } catch (err) {
            console.error('请求 Copilot 失败：', err.message);
        }
    }
});
